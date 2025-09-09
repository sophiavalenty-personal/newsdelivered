import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Mail, MousePointer } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedCounter from "@/components/ui/animated-counter";

const Proof = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Proof & Results</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What happens when you make newsletters 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> entertaining?</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-500">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-8">Mini Case Study</h3>
                      
                      <div className="space-y-6">
                        <motion.div 
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-destructive/10 p-2 rounded-lg">
                            <Mail className="w-5 h-5 text-destructive" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-destructive mb-1">Before</h4>
                            <p className="text-sm text-muted-foreground">
                              Weekly sales emails with 18% open rate
                            </p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-1">After</h4>
                            <p className="text-sm text-muted-foreground">
                              Content-first newsletter — 27% open rate, +30% CTR in 30 days
                            </p>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        <motion.div 
                          className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20 hover:scale-105 transition-transform duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-2xl font-bold text-primary">
                            <AnimatedCounter end={27} suffix="%" />
                          </div>
                          <div className="text-sm text-muted-foreground">Open Rate</div>
                        </motion.div>
                        <motion.div 
                          className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20 hover:scale-105 transition-transform duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-2xl font-bold text-accent">
                            +<AnimatedCounter end={30} suffix="%" />
                          </div>
                          <div className="text-sm text-muted-foreground">Click-Through</div>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Card className="bg-gradient-to-br from-muted to-muted/50 p-6 mb-4">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground mb-2">Before/After Preview</div>
                            <div className="bg-background p-4 rounded border">
                              <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
                                [Email Design Screenshots]
                                <br />
                                <span className="text-xs">Placeholder for before/after visuals</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          See More Examples
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Proof;