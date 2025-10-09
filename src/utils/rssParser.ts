export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  image?: string;
  content?: string;
}

export interface RSSFeed {
  title: string;
  description: string;
  items: RSSItem[];
}

export async function fetchAndParseRSS(url: string): Promise<RSSFeed> {
  const cleanUrl = url.trim();

  // Try multiple proxies and direct fetch to improve reliability across CORS/CDN protections
  const proxyCandidates = [
    (u: string) => `https://cors.isomorphic-git.org/${u}`,
    (u: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    (u: string) => `https://allorigins.hexlet.app/raw?url=${encodeURIComponent(u)}`,
    (u: string) => `https://api.allorigins.workers.dev/raw?url=${encodeURIComponent(u)}`,
  ];

  const targets: string[] = [...proxyCandidates.map((fn) => fn(cleanUrl)), cleanUrl];

  // Helper: parse RSS/XML text into our RSSFeed shape
  const parseXmlToFeed = (text: string): RSSFeed => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    // If the proxy returns non-XML, DOMParser may yield a parsererror
    const parseError = xmlDoc.querySelector("parsererror");
    if (parseError) {
      throw new Error("Invalid XML received from source");
    }

    const channel = xmlDoc.querySelector("channel");
    const feedTitle = channel?.querySelector("title")?.textContent || "RSS Feed";
    const feedDescription = channel?.querySelector("description")?.textContent || "";

    const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => {
      const title = item.querySelector("title")?.textContent || "";
      const description = item.querySelector("description")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const pubDate = item.querySelector("pubDate")?.textContent || "";

      // Try different image formats (including namespaced media tags)
      let image =
        item.querySelector("enclosure[type^='image']")?.getAttribute("url") || "";

      if (!image) {
        // media:content or content[medium='image']
        image =
          item.querySelector("media\\:content")?.getAttribute("url") ||
          item.querySelector("content[medium='image']")?.getAttribute("url") ||
          "";
      }
      if (!image) {
        // media:thumbnail or thumbnail
        image =
          item.querySelector("media\\:thumbnail")?.getAttribute("url") ||
          item.querySelector("thumbnail")?.getAttribute("url") ||
          "";
      }

      // Get content:encoded if available
      const contentEncoded =
        item.querySelector("content\\:encoded")?.textContent || "";
      const content = contentEncoded || description;

      return {
        title,
        description,
        link,
        pubDate,
        image,
        content,
      } as RSSItem;
    });

    return {
      title: feedTitle,
      description: feedDescription,
      items,
    } as RSSFeed;
  };

  // Attempt fetching via multiple targets
  let lastError: unknown = null;
  for (const target of targets) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(target, {
        headers: {
          Accept:
            "application/rss+xml, application/xml, text/xml, text/plain; charset=utf-8",
        },
        cache: "no-store",
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const text = await response.text();
      if (!text || /Clone failed|Failed to fetch|Error 5\d{2}/i.test(text)) {
        throw new Error("Upstream proxy failure");
      }

      // Parse as XML; if invalid, let it fall through to next candidate
      return parseXmlToFeed(text);
    } catch (err) {
      lastError = err;
      // Try next candidate
      continue;
    }
  }

  // Final fallback: use rss2json (public service, may be rate limited)
  try {
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      cleanUrl
    )}`;
    const res = await fetch(api, { cache: "no-store" });
    if (!res.ok) throw new Error(`rss2json HTTP ${res.status}`);
    const data = await res.json();

    const items: RSSItem[] = (data.items ?? []).map((it: any) => ({
      title: it.title ?? "",
      description: it.description ?? "",
      link: it.link ?? "",
      pubDate: it.pubDate ?? "",
      image: it.enclosure?.link || it.thumbnail || "",
      content: it.content || it.description || "",
    }));

    return {
      title: data.feed?.title ?? "RSS Feed",
      description: data.feed?.description ?? "",
      items,
    };
  } catch (error) {
    console.error("Error fetching RSS feed:", lastError || error);
    throw new Error("Failed to fetch RSS feed");
  }
}
