import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Target, Rocket, Flame, DollarSign, Smile, Users } from "lucide-react";
import contentCurationImage from "@/assets/content-curation.jpg";
import contentPublishingImage from "@/assets/content-publishing.jpg";

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
              {/* Our Experts Header */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="text-center mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center mb-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-elegant-sage/20 rounded-full flex items-center justify-center mr-4 shadow-subtle"
                    >
                      <Users className="w-8 h-8 text-elegant-sage" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-light text-foreground">
                      Our experts
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "4rem" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-0.5 bg-elegant-sage mx-auto rounded-full"
                  />
                </div>
              </ScrollReveal>

              {/* Expert Services Section */}
              <div className="mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <ScrollReveal direction="left" delay={0.2}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-700 overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden rounded-t-lg">
                            <motion.img
                              src={contentCurationImage}
                              alt="Content curation process"
                              className="w-full h-48 object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.6 }}
                            />
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-elegant-sage/10 flex items-center justify-center"
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-elegant"
                              >
                                <Target className="w-8 h-8 text-elegant-sage" />
                              </motion.div>
                            </motion.div>
                          </div>
                          <div className="p-8 text-center">
                            <motion.h3 
                              className="text-2xl font-medium mb-4 text-foreground"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              Curate the best content for your audience
                            </motion.h3>
                            <p className="text-muted-foreground leading-relaxed">
                              Our experts carefully review and select the most engaging, relevant content that resonates with your specific audience.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollReveal>

                  <ScrollReveal direction="right" delay={0.3}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-700 overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden rounded-t-lg">
                            <motion.img
                              src={contentPublishingImage}
                              alt="Content publishing across platforms"
                              className="w-full h-48 object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.6 }}
                            />
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-elegant-sage/10 flex items-center justify-center"
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-elegant"
                              >
                                <Rocket className="w-8 h-8 text-elegant-sage" />
                              </motion.div>
                            </motion.div>
                          </div>
                          <div className="p-8 text-center">
                            <motion.h3 
                              className="text-2xl font-medium mb-4 text-foreground"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              Publish that content to all your platforms
                            </motion.h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              Seamlessly distribute your content across websites, email newsletters, and social media platforms.
                            </p>
                            <p className="text-sm text-muted-foreground/80 italic">
                              All done for you, automatically.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
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