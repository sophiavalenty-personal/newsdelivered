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
              <Card className="h-full">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">You get to focus on what you do best…</h4>
                  <ul className="space-y-4">
                    {focusAreas.map((area, index) => (
                      <motion.li 
                        key={area}
                        className="flex items-center text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        {area}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="h-full">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">We'll keep the NewsDelivered</h4>
                  <p className="text-lg font-medium mb-6">Our experts will</p>
                  <div className="space-y-6">
                    {steps.map((step, index) => (
                      <motion.div 
                        key={step.number}
                        className="flex items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full mr-4 flex-shrink-0 font-bold">
                          {step.number}
                        </div>
                         <div className="flex-1">
                           <step.icon className="w-5 h-5 text-primary mb-2" />
                           <p className="text-sm leading-relaxed">{step.title}</p>
                         </div>
                       </motion.div>
                    ))}
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