import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowRight, Search, FileText, Share2 } from "lucide-react";

const EndToEndSolution = () => {
  const focusAreas = [
    "Sales",
    "Product", 
    "Customer Support"
  ];

  const steps = [
    {
      number: 1,
      title: "Research your audience",
      icon: Search
    },
    {
      number: 2,
      title: "Create a content strategy that brings value to you and your customers / readers",
      icon: FileText
    },
    {
      number: 3,
      title: "Publish it for you on all your desired platforms (website, newsletter, social media, etc.)",
      icon: Share2
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                An End to End Solution
              </motion.h2>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold mb-8 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Getting NewsDelivered Means…
              </motion.h3>
            </div>
          </ScrollReveal>

          <div className="space-y-8 mb-16">
            <ScrollReveal direction="left">
              <Card className="h-full shadow-elegant border-primary/10 bg-gradient-to-br from-background to-background/50">
                <CardContent className="p-10">
                  <h4 className="text-2xl font-semibold mb-8 text-primary">You get to focus on what you do best…</h4>
                  <ul className="space-y-6">
                    {focusAreas.map((area, index) => (
                      <motion.li 
                        key={area}
                        className="flex items-center text-lg font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                        {area}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="h-full shadow-elegant border-primary/10 bg-gradient-to-br from-background to-background/50 relative">
                <CardContent className="p-10">
                  <h4 className="text-2xl font-semibold mb-4 text-primary">We'll keep the NewsDelivered</h4>
                  <p className="text-xl font-semibold mb-10 text-foreground">Our experts will</p>
                  <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary/20"></div>
                    <div className="space-y-8">
                      {steps.map((step, index) => (
                        <motion.div 
                          key={step.number}
                          className="flex items-start relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full mr-6 flex-shrink-0 font-bold text-lg shadow-lg relative z-10">
                            {step.number}
                          </div>
                          <div className="flex-1 pt-2">
                            <div className="flex items-center mb-3">
                              <step.icon className="w-6 h-6 text-primary mr-3" />
                              <div className="h-0.5 bg-primary/30 flex-1"></div>
                            </div>
                            <p className="text-base leading-relaxed font-medium">{step.title}</p>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300"
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