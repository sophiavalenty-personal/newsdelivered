import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Pricing = () => {
  const options = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Pay as you go",
      description: "Perfect for testing the waters",
      detail: "(per article)"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Consultation Services", 
      description: "Get expert guidance on your strategy",
      detail: ""
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Handle it all for me",
      description: "Full-service newsletter management",
      detail: ""
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Pricing</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Start small, 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> scale big.</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the approach that fits your needs and budget. No long-term commitments required.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {options.map((option, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-elegant transition-all duration-300 hover:border-primary/30 group">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        {option.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                      {option.detail && (
                        <motion.div 
                          className="text-sm text-primary font-medium mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {option.detail}
                        </motion.div>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.8}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/10 border-primary/20 hover:shadow-glow transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">
                    Not sure which option is right for you?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss your specific needs and find the perfect solution that reduces friction and maximizes your ROI.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="hero" size="lg" className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
                      Book a Strategy Call
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;