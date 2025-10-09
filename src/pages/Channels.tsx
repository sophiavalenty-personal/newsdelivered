import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Newspaper, Heart, Shield, DollarSign, Lightbulb, TrendingUp } from "lucide-react";

const Channels = () => {
  const channels = [
    {
      title: "Daily News",
      description: "Stay informed with curated daily news and current events from reliable sources",
      icon: Newspaper,
      color: "from-blue-200 to-blue-300",
      iconColor: "text-blue-700"
    },
    {
      title: "Health & Wellness",
      description: "Expert tips on fitness, nutrition, mental health, and living your best life",
      icon: Heart,
      color: "from-pink-200 to-pink-300",
      iconColor: "text-pink-700"
    },
    {
      title: "Survival & Tactical",
      description: "Practical survival skills, tactical knowledge, and preparedness strategies",
      icon: Shield,
      color: "from-slate-200 to-slate-300",
      iconColor: "text-slate-700"
    },
    {
      title: "Money & Finance",
      description: "Smart money management, investment insights, and financial success strategies",
      icon: DollarSign,
      color: "from-emerald-200 to-emerald-300",
      iconColor: "text-emerald-700"
    },
    {
      title: "Interesting Trivia",
      description: "Fascinating facts, brain teasers, and surprising discoveries to expand your mind",
      icon: Lightbulb,
      color: "from-amber-200 to-amber-300",
      iconColor: "text-amber-700"
    },
    {
      title: "Opportunities",
      description: "Exclusive deals, business opportunities, and ways to grow your income",
      icon: TrendingUp,
      color: "from-purple-200 to-purple-300",
      iconColor: "text-purple-700"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-elegant">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="text-center mb-16">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-light text-foreground mb-4"
                  >
                    Example Channels
                  </motion.h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "4rem" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-0.5 bg-elegant-sage mx-auto rounded-full mb-6"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                  >
                    Choose from our expertly curated content channels, each designed to engage and convert your specific audience
                  </motion.p>
                </div>
              </ScrollReveal>

              {/* Channel Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {channels.map((channel, index) => {
                  const IconComponent = channel.icon;
                  return (
                    <ScrollReveal 
                      key={channel.title} 
                      direction="up" 
                      delay={index * 0.1}
                    >
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-500 overflow-hidden">
                          <CardHeader className="text-center pb-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.4 }}
                              className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-subtle group-hover:shadow-md transition-shadow duration-300`}
                            >
                              <IconComponent className={`w-8 h-8 ${channel.iconColor}`} />
                            </motion.div>
                            <CardTitle className="text-xl font-semibold text-foreground">
                              {channel.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-col justify-between flex-1 p-6 pt-0">
                            <CardDescription className="text-sm text-muted-foreground text-center leading-relaxed">
                              {channel.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* CTA Section */}
              <ScrollReveal direction="up" delay={0.6}>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-subtle">
                  <h2 className="text-3xl font-semibold text-foreground mb-4">
                    Ready to engage your audience?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Let our experts create and manage content that drives results. Get your free audit and discover how our channel expertise can transform your email marketing.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      variant="hero" 
                      size="lg"
                      className="text-lg px-8 py-6 shadow-subtle hover:shadow-elegant transition-all duration-400"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Your Free Audit
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
