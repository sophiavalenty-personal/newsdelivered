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
  try {
    // Use CORS proxy to fetch RSS feeds
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    const channel = xmlDoc.querySelector("channel");
    const feedTitle = channel?.querySelector("title")?.textContent || "RSS Feed";
    const feedDescription = channel?.querySelector("description")?.textContent || "";

    const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => {
      const title = item.querySelector("title")?.textContent || "";
      const description = item.querySelector("description")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      
      // Try different image formats
      let image = item.querySelector("enclosure[type^='image']")?.getAttribute("url") || "";
      if (!image) {
        const mediaContent = item.querySelector("content[medium='image']");
        image = mediaContent?.getAttribute("url") || "";
      }
      if (!image) {
        const mediaThumbnail = item.querySelector("thumbnail");
        image = mediaThumbnail?.getAttribute("url") || "";
      }
      
      // Get content:encoded if available
      const contentEncoded = item.querySelector("encoded")?.textContent || "";
      const content = contentEncoded || description;

      return {
        title,
        description,
        link,
        pubDate,
        image,
        content,
      };
    });

    return {
      title: feedTitle,
      description: feedDescription,
      items,
    };
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    throw new Error("Failed to fetch RSS feed");
  }
}
