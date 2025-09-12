import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Target, Rocket, Flame, DollarSign, Smile } from "lucide-react";

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
        <section className="py-20 bg-gradient-elegant">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* How It Works Section */}
              <div className="mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <ScrollReveal direction="up" delay={0.1}>
                    <Card className="group h-full bg-white/70 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-500">
                      <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="w-20 h-20 bg-elegant-slate-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-subtle"
                        >
                          <Target className="w-10 h-10 text-elegant-charcoal" />
                        </motion.div>
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">We'll curate the best content for your audience</h3>
                      </CardContent>
                    </Card>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={0.2}>
                    <Card className="group h-full bg-white/70 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-500">
                      <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-subtle"
                        >
                          <Rocket className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">Publish it to all your platforms</h3>
                        <p className="text-lg text-muted-foreground font-medium">
                          Site posts, Email Newsletters, Social -- All done for you.
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>

                {/* Results Section */}
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold mb-12 text-foreground">
                      Results You'll See
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Card className="bg-elegant-pearl border-0 shadow-subtle hover:shadow-elegant transition-all duration-500">
                          <CardContent className="p-8 text-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                              className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-subtle"
                            >
                              <Flame className="w-8 h-8 text-orange-700" />
                            </motion.div>
                            <h4 className="text-xl font-semibold text-foreground">Warmer leads</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Card className="bg-elegant-pearl border-0 shadow-subtle hover:shadow-elegant transition-all duration-500">
                          <CardContent className="p-8 text-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                              className="w-16 h-16 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-subtle"
                            >
                              <DollarSign className="w-8 h-8 text-emerald-700" />
                            </motion.div>
                            <h4 className="text-xl font-semibold text-foreground">More opportunities to convert</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Card className="bg-elegant-pearl border-0 shadow-subtle hover:shadow-elegant transition-all duration-500">
                          <CardContent className="p-8 text-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                              className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-subtle"
                            >
                              <Smile className="w-8 h-8 text-blue-700" />
                            </motion.div>
                            <h4 className="text-xl font-semibold text-foreground">Happier customers</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        variant="hero" 
                        size="lg"
                        className="text-lg px-8 py-4 shadow-subtle hover:shadow-elegant transition-all duration-400"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Get Started Today
                      </Button>
                    </motion.div>
                  </div>
                </ScrollReveal>
              </div>

              {/* News Channels Section */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-semibold text-foreground mb-4">
                    News we've delivered...
                  </h2>
                  <div className="w-24 h-0.5 bg-elegant-slate mx-auto rounded-full"></div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {channels.map((channel, index) => (
                  <ScrollReveal 
                    key={channel.title} 
                    direction="up" 
                    delay={index * 0.05}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-500 overflow-hidden">
                        <CardHeader className="text-center pb-4 relative">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            {channel.icon}
                          </motion.div>
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {channel.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between flex-1 p-6">
                          <CardDescription className="text-sm text-muted-foreground mb-6 text-center leading-relaxed">
                            {channel.description}
                          </CardDescription>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Button 
                              variant="hero" 
                              size="sm" 
                              className="w-full font-medium shadow-subtle hover:shadow-elegant transition-all duration-400"
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