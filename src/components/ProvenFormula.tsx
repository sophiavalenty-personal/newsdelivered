import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedProgress from "@/components/ui/animated-progress";

const ProvenFormula = () => {
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
                The Proven NewsDelivered Formula
              </motion.h2>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold mb-8 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                An 80/20 content to promo ratio keeps readers hooked.
              </motion.h3>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <motion.p 
                  className="text-xl font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  We flip the script:
                </motion.p>
                
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-lg font-semibold text-primary mb-2">80% entertaining + informative content</p>
                    <p className="text-muted-foreground">(industry insights, trends, lifestyle tips)</p>
                  </div>
                  
                  <div className="p-6 bg-secondary/10 rounded-lg border border-secondary/20">
                    <p className="text-lg font-semibold text-secondary-foreground mb-2">20% subtle, brand-aligned promotion</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-xl font-semibold">The result?</p>
                  <p className="text-lg text-muted-foreground">Newsletters your customers actually look forward to.</p>
                  <p className="text-lg font-medium text-primary">People will naturally keep coming back for more.</p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-500">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-8 text-center">The 80/20 Split</h4>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium text-primary">Entertaining + Informative</span>
                        <span className="text-2xl font-bold text-primary">80%</span>
                      </div>
                      <AnimatedProgress value={80} label="Entertaining + Informative" className="h-6" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium text-secondary-foreground">Brand Promotion</span>
                        <span className="text-2xl font-bold text-secondary-foreground">20%</span>
                      </div>
                      <AnimatedProgress value={20} label="Brand Promotion" className="h-6 [&>div]:bg-secondary" />
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                      This ratio keeps your audience engaged while building trust and driving results
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenFormula;