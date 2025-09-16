import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowRight, Search, FileText, Share2, CheckCircle, Users } from "lucide-react";

const EndToEndSolution = () => {
  const focusAreas = [
    { name: "your business" },
    { name: "innovation" }, 
    { name: "growth"  }
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

          <div className="space-y-16 mb-20">
            <ScrollReveal direction="left">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 border border-primary/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-xl font-semibold text-foreground">
                    So you can focus on <span className="text-primary font-bold">what you do best</span>
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-base">
                  {focusAreas.map((area, index) => (
                    <motion.span
                      key={area.name}
                      className="px-4 py-2 bg-gradient-to-r from-background to-background/80 rounded-full border border-primary/20 text-foreground font-medium shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {area.name}
                    </motion.span>
                  ))}
                  <span className="px-4 py-2 bg-gradient-to-r from-background to-background/80 rounded-full border border-primary/20 text-foreground font-medium shadow-sm">your passions</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-background to-background/80 rounded-full border border-primary/20 text-foreground font-medium shadow-sm">family time</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-background to-background/80 rounded-full border border-primary/20 text-foreground font-medium shadow-sm">customer relationships</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-background to-background/80 rounded-full border border-primary/20 text-foreground font-medium shadow-sm">product development</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-background to-background/80 rounded-full border border-primary/20 text-foreground font-medium shadow-sm">whatever drives you</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <Card className="shadow-lg border-primary/10 bg-gradient-to-br from-muted/30 to-muted/10 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-12">
                  <div className="flex items-center gap-4 mb-8 justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground">We'll Keep NewsDelivered</h4>
                  </div>
                  <p className="text-lg font-medium mb-12 text-center text-muted-foreground">Our content marketing experts will</p>
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
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full mr-8 flex-shrink-0 font-semibold text-lg shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300">
                            {step.number}
                          </div>
                          <div className="flex-1 pt-2">
                            <div className="flex items-center mb-4">
                              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mr-4">
                                <step.icon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="h-0.5 bg-gradient-to-r from-primary/40 to-transparent flex-1 rounded-full"></div>
                            </div>
                            <h5 className="text-xl font-bold mb-3 text-foreground leading-tight">{step.title}</h5>
                            <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
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