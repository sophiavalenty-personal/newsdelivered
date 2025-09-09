import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      number: "01",
      title: "Free Audit",
      description: "We review your current newsletter, highlight quick wins."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      number: "02", 
      title: "Engagement Plan",
      description: "Select high engaging subjects in your niche"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      number: "03",
      title: "Start Publishing", 
      description: "Optimize engagement for what you need it for."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Process</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Three steps to an 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> engaging newsletter.</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="absolute top-4 right-4 text-6xl font-bold text-muted/20 group-hover:text-primary/30 transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {step.number}
                      </motion.div>
                      <motion.div 
                        className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.8}>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
                  Request Your Free Audit
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;