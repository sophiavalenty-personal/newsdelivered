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
      }
    ]
  },
  "health-wellness": {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Expert tips on fitness, nutrition, mental health, and living your best life",
    sources: []
  },
  "survival-tactical": {
    id: "survival-tactical",
    title: "Survival & Tactical",
    description: "Practical survival skills, tactical knowledge, and preparedness strategies",
    sources: []
  },
  "money-finance": {
    id: "money-finance",
    title: "Money & Finance",
    description: "Smart money management, investment insights, and financial success strategies",
    sources: []
  },
  "interesting-trivia": {
    id: "interesting-trivia",
    title: "Interesting Trivia",
    description: "Fascinating facts, brain teasers, and surprising discoveries to expand your mind",
    sources: []
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
    sources: []
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
