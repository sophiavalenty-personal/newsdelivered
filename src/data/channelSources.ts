export interface RSSSource {
  id: string;
  name: string;
  url: string;
  description?: string;
}

export interface ChannelData {
  id: string;
  title: string;
  description: string;
  sources: RSSSource[];
}

export const channelSources: Record<string, ChannelData> = {
  "daily-news": {
    id: "daily-news",
    title: "Daily News",
    description: "Stay informed with curated daily news and current events from reliable sources",
    sources: [
      {
        id: "unitedvoice",
        name: "United Voice",
        url: "https://www.unitedvoice.com/feed/",
        description: "Independent news and analysis"
      },
      {
        id: "newsready",
        name: "News Ready",
        url: "https://www.newsready.com/feed/",
        description: "Breaking news and current events"
      }
    ]
  },
  "health-wellness": {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Expert tips on fitness, nutrition, mental health, and living your best life",
    sources: [
      {
        id: "wellnesspursuits",
        name: "Wellness Pursuits",
        url: "https://www.wellnesspursuits.com/feed/",
        description: "Health and wellness tips"
      },
      {
        id: "soulvibe",
        name: "Soul Vibe",
        url: "https://www.soulvibe.com/feed/",
        description: "Mental health and wellness insights"
      }
    ]
  },
  "survival-tactical": {
    id: "survival-tactical",
    title: "Survival & Tactical",
    description: "Practical survival skills, tactical knowledge, and preparedness strategies",
    sources: [
      {
        id: "modernsurvival",
        name: "Modern Survival",
        url: "https://modernsurvival.org/feed",
        description: "Practical survival and preparedness tips"
      }
    ]
  },
  "money-finance": {
    id: "money-finance",
    title: "Money & Finance",
    description: "Smart money management, investment insights, and financial success strategies",
    sources: [
      {
        id: "marketwatch",
        name: "MarketWatch",
        url: "https://feeds.content.dowjones.io/public/rss/mw_topstories",
        description: "Top financial news and market insights"
      }
    ]
  },
  "interesting-trivia": {
    id: "interesting-trivia",
    title: "Interesting Trivia",
    description: "Fascinating facts, brain teasers, and surprising discoveries to expand your mind",
    sources: [
      {
        id: "dailytreasure",
        name: "Daily Treasure",
        url: "https://www.dailytreasure.com/category/trivia/feed",
        description: "Daily trivia and fascinating facts"
      }
    ]
  },
  "opportunities": {
    id: "opportunities",
    title: "Opportunities",
    description: "Exclusive deals, business opportunities, and ways to grow your income",
    sources: []
  },
  "product-reviews": {
    id: "product-reviews",
    title: "Product Reviews",
    description: "In-depth reviews and comparisons to help make informed purchasing decisions",
    sources: [
      {
        id: "theverge",
        name: "The Verge Reviews",
        url: "https://www.theverge.com/rss/reviews/index.xml",
        description: "Tech product reviews and analysis"
      }
    ]
  },
  "travel-lifestyle": {
    id: "travel-lifestyle",
    title: "Travel & Lifestyle",
    description: "Discover destinations, travel tips, and lifestyle inspiration for your next adventure",
    sources: []
  },
  "food-drink": {
    id: "food-drink",
    title: "Food & Drink",
    description: "Recipes, restaurant reviews, culinary trends, and food culture",
    sources: []
  }
};
