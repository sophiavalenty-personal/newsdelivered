import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedProgress from "@/components/ui/animated-progress";

const Solution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Solution</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              An 80/20 content formula that keeps 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> readers hooked.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We flip the script:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">80%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Entertaining + Informative Content</h3>
                  <p className="text-muted-foreground">
                    Industry insights, trends, lifestyle tips that your audience actually wants to read.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <span className="text-2xl font-bold text-accent">20%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Subtle, Brand-Aligned Promotion</h3>
                  <p className="text-muted-foreground">
                    Strategic promotional content that feels natural and adds value.
                  </p>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
                <h4 className="text-lg font-semibold mb-2">The Result?</h4>
                <p className="text-primary-foreground/90">
                  Newsletters your customers actually look forward to receiving.
                </p>
              </div>
            </div>
            
            <ScrollReveal direction="right" delay={0.4}>
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 hover:shadow-elegant transition-all duration-500">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">Content Formula</h3>
                  
                  <div className="space-y-6">
                    <AnimatedProgress 
                      value={80} 
                      label="Value Content"
                      color="bg-primary"
                      delay={0.5}
                    />
                    <AnimatedProgress 
                      value={20} 
                      label="Strategic Promotion"
                      color="bg-accent"
                      delay={0.8}
                    />
                  </div>
                  
                  <motion.div 
                    className="mt-8 p-4 bg-background/50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-sm text-muted-foreground">
                      Visual representation of our proven 80/20 content strategy
                    </div>
                  </motion.div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;