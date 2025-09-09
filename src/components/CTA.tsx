import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="max-w-4xl mx-auto shadow-elegant hover:shadow-glow transition-all duration-500">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Let's make your newsletter your customers' 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> favorite email.</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Stop sending emails that get ignored. Start building a channel your audience actually loves.
                </p>
            
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="hero" className="group hover:shadow-glow transition-all duration-300">
                      Request Your Free Audit
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
            
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {[
                    "No credit card required",
                    "14-day free trial",
                    "Cancel anytime"
                  ].map((text, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;