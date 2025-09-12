import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Channels = () => {
  const channels = [
    {
      title: "Food & Cooking",
      description: "Recipes, restaurant reviews, culinary trends, and cooking tips",
      icon: "🍳"
    },
    {
      title: "Celebrity Gossip",
      description: "Latest celebrity news, red carpet events, and entertainment buzz",
      icon: "⭐"
    },
    {
      title: "Sports",
      description: "Game highlights, player stats, team news, and sports analysis",
      icon: "⚽"
    },
    {
      title: "Trivia & Facts",
      description: "Interesting facts, brain teasers, and educational content",
      icon: "🧠"
    },
    {
      title: "Political",
      description: "Political news, policy updates, and government developments",
      icon: "🏛️"
    },
    {
      title: "Evergreen Content",
      description: "Timeless articles, how-to guides, and evergreen topics",
      icon: "🌲"
    },
    {
      title: "House & Home",
      description: "Interior design, home improvement, gardening, and DIY projects",
      icon: "🏠"
    },
    {
      title: "Technology",
      description: "Tech news, gadget reviews, software updates, and innovation",
      icon: "💻"
    },
    {
      title: "Health & Wellness",
      description: "Fitness tips, mental health, nutrition, and wellness trends",
      icon: "💪"
    },
    {
      title: "Finance",
      description: "Market news, investment tips, personal finance, and economic updates",
      icon: "💰"
    },
    {
      title: "Travel",
      description: "Destination guides, travel tips, adventure stories, and culture",
      icon: "✈️"
    },
    {
      title: "Business",
      description: "Entrepreneurship, industry news, leadership, and career advice",
      icon: "📈"
    },
    {
      title: "Fashion & Style",
      description: "Fashion trends, style guides, beauty tips, and lifestyle content",
      icon: "👗"
    },
    {
      title: "Automotive",
      description: "Car reviews, industry news, maintenance tips, and auto shows",
      icon: "🚗"
    },
    {
      title: "Gaming",
      description: "Game reviews, esports news, gaming culture, and tech updates",
      icon: "🎮"
    },
    {
      title: "Parenting",
      description: "Parenting tips, child development, family activities, and education",
      icon: "👶"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal direction="up">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-hero bg-clip-text text-transparent">
                      Choose Your Content Channels
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Select from our curated news feeds to power your email campaigns. 
                    Each channel delivers fresh, engaging content tailored to your audience.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {channels.map((channel, index) => (
                  <ScrollReveal 
                    key={channel.title} 
                    direction="up" 
                    delay={index * 0.1}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="h-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                        <CardHeader className="text-center pb-4">
                          <div className="text-4xl mb-3">{channel.icon}</div>
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {channel.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between flex-1">
                          <CardDescription className="text-sm text-muted-foreground mb-6 text-center leading-relaxed">
                            {channel.description}
                          </CardDescription>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="hero" 
                              size="sm" 
                              className="w-full"
                              onClick={() => window.location.href = '/contact'}
                            >
                              Use This Channel
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal direction="up" delay={0.6}>
                <div className="text-center mt-16">
                  <p className="text-muted-foreground mb-6">
                    Don't see what you're looking for? We can create custom content channels for your specific needs.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="hero-outline" 
                      size="lg"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Request Custom Channel
                    </Button>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Channels;