import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { PenTool, Mail, Truck, BarChart3, Search, ShieldCheck, Sparkles, Layout, Scale, Plug } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      title: "Email Content Creation",
      description: "Professional content creation tools to craft compelling emails that engage and convert",
      icon: PenTool
    },
    {
      title: "Email Delivery",
      description: "Ensure your emails reach the inbox with our reliable delivery infrastructure",
      icon: Truck
    },
    {
      title: "Email Authentication",
      description: "Securing your emails with DKIM, SPF, and DMARC authentication.",
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
      title: "Flexible ESP Integration",
      description: "Expert email delivery and integration across all leading email service providers.",
      icon: Plug
    },
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
                            <CardDescription className="text-sm text-muted-foreground text-center leading-relaxed">
                              {tool.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Email Service Providers Section */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-subtle mb-16">
                  <h2 className="text-3xl font-semibold text-foreground mb-3 text-center">
                    We support clients across 40+ email service providers, including
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
                    {[
                      "Klaviyo",
                      "Omnisend",
                      "Salesforce",
                      "Active Campaign",
                      "Hubspot",
                      "Keap",
                      "Mailchimp",
                      "Brevo",
                      "Marketo",
                      "Get Response",
                      "Cordial",
                      "Dotdigital",
                      "Iterable",
                      "Campaign Monitor",
                      "Braze",
                      "Aweber"
                    ].map((provider) => (
                      <div
                        key={provider}
                        className="bg-white rounded-lg p-4 flex items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
                      >
                        <span className="text-foreground font-medium text-sm">
                          {provider}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

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
