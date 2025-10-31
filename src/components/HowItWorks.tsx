import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Search, Lightbulb, Send, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Content Discovery",
      description: "We research trending topics and curate relevant content that resonates with your audience"
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Strategic Creation",
      description: "Our team crafts engaging newsletters using the proven 80/20 formula for maximum impact"
    },
    {
      icon: Send,
      number: "03",
      title: "Delivery & Optimization",
      description: "We handle publishing, track performance, and continuously optimize for better results"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-white relative">
      {/* Geometric separator from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-1 origin-top-left"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                How It Works
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                From strategy to execution, we handle everything so you can focus on your business
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Card className="h-full shadow-elegant hover:shadow-glow transition-all duration-500 border-primary/20 bg-gradient-to-br from-background to-background/50 overflow-hidden group">
                    {/* Step number badge */}
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-primary/10 text-primary font-bold text-lg px-3 py-1 border-primary/20">
                        {step.number}
                      </Badge>
                    </div>

                    <CardContent className="p-8 pt-20">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-8 h-8 text-primary/30" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Geometric separator to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
    </section>
  );
};

export default HowItWorks;