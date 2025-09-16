import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowRight, Search, FileText, Share2, CheckCircle, Users } from "lucide-react";

const EndToEndSolution = () => {
  const focusAreas = [
    { name: "Sales", icon: ArrowRight },
    { name: "Product", icon: CheckCircle }, 
    { name: "Customer Support", icon: Users }
  ];

  const steps = [
    {
      number: 1,
      title: "Research your audience",
      description: "Deep dive into your target market and customer needs",
      icon: Search
    },
    {
      number: 2,
      title: "Create a content strategy that brings value to you and your customers / readers",
      description: "Develop content that resonates and drives results",
      icon: FileText
    },
    {
      number: 3,
      title: "Publish it for you on all your desired platforms (website, newsletter, social media, etc.)",
      description: "Multi-channel distribution for maximum reach",
      icon: Share2
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
      </div>
      
      {/* Top border separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                An End to End Solution
              </motion.h2>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-semibold mb-12 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Getting NewsDelivered Means…
              </motion.h3>
            </div>
          </ScrollReveal>

          <div className="space-y-12 mb-20">
            <ScrollReveal direction="left">
              <Card className="shadow-elegant border-primary/10 bg-gradient-to-br from-background to-background/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-3xl font-bold text-primary">You get to focus on what you do best…</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {focusAreas.map((area, index) => (
                      <motion.div
                        key={area.name}
                        className="flex items-center justify-center p-6 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                            <area.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <span className="text-xl font-semibold">{area.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="shadow-elegant border-primary/10 bg-gradient-to-br from-background to-background/50 hover:shadow-glow transition-all duration-300 relative">
                <CardContent className="p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-3xl font-bold text-primary">We'll keep the NewsDelivered</h4>
                  </div>
                  <p className="text-2xl font-semibold mb-12 text-foreground">Our experts will</p>
                  <div className="relative">
                    {/* Enhanced connecting line */}
                    <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full"></div>
                    <div className="space-y-12">
                      {steps.map((step, index) => (
                        <motion.div 
                          key={step.number}
                          className="flex items-start relative group"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.3 }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full mr-8 flex-shrink-0 font-bold text-xl shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                            {step.number}
                          </div>
                          <div className="flex-1 pt-3">
                            <div className="flex items-center mb-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                <step.icon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1"></div>
                            </div>
                            <h5 className="text-lg font-bold mb-2 text-foreground leading-tight">{step.title}</h5>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-xl px-12 py-8 hover:shadow-glow transition-all duration-300 font-semibold"
                  onClick={() => window.location.href = '#'}
                >
                  → Watch A Demo
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default EndToEndSolution;