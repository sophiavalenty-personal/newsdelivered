import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { PenTool, Mail, Truck, BarChart3, Search, ShieldCheck, Sparkles, Layout, Scale } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      title: "Email Content Creation",
      description: "Professional content creation tools to craft compelling emails that engage and convert",
      icon: PenTool
    },
    {
      title: "Send Your Email - Earnware",
      description: "Powerful email sending platform with advanced delivery optimization",
      icon: Mail
    },
    {
      title: "Email Delivery",
      description: "Ensure your emails reach the inbox with our reliable delivery infrastructure",
      icon: Truck
    },
    {
      title: "Delivery Report Analytics",
      description: "Comprehensive, easy-to-use reporting and analytics to track and improve your email performance",
      icon: BarChart3
    },
    {
      title: "SPF Checker",
      description: "Ensure your emails land in the inbox with our fast, reliable SPF validation tool",
      icon: Search
    },
    {
      title: "Email Authentication",
      description: "Greatly increase deliverability by securing your emails with DKIM, SPF, and DMARC authentication protocols",
      icon: ShieldCheck
    },
    {
      title: "Automatic List Hygiene",
      description: "Keep your email lists clean, current and engaged with automated list maintenance",
      icon: Sparkles
    },
    {
      title: "Custom Template Builder",
      description: "Design beautiful, mobile-responsive email templates with our drag-and-drop builder",
      icon: Layout
    },
    {
      title: "Automated CCPA Compliance",
      description: "Say goodbye to compliance headaches - in a privacy-first world our CCPA tool honors consumer rights and protects you from costly fines",
      icon: Scale
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
                    Email Marketing Tools
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
                    Complete suite of professional tools that allow you to easily create, send, measure and improve your email campaigns - making it easier to grow and increase revenue
                  </motion.p>
                </div>
              </ScrollReveal>

              {/* Tool Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <ScrollReveal 
                      key={tool.title} 
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
                            className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4 shadow-subtle group-hover:shadow-md transition-shadow duration-300"
                          >
                            <IconComponent className="w-8 h-8 text-foreground" />
                          </motion.div>
                            <CardTitle className="text-xl font-semibold text-foreground">
                              {tool.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-col justify-between flex-1 p-6 pt-0">
                            {tool.title === "Automated CCPA Compliance" ? (
                              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                <div className="text-left">Say goodbye to compliance headaches - in a privacy-first world our CCPA tool honors consumer rights and</div>
                                <div className="text-center">protects you from costly fines</div>
                              </CardDescription>
                            ) : (
                              <CardDescription className="text-sm text-muted-foreground text-center leading-relaxed">
                                {tool.description}
                              </CardDescription>
                            )}
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
                    Ready to optimize your email marketing?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Get access to our complete suite of professional email marketing tools. Contact us today for a free consultation and see how we can help grow your business.
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
                      Get Started Today
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

export default Tools;
