import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedCounter from "@/components/ui/animated-counter";

const Expectations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              What You Can Expect:
            </h2>
            <p className="text-2xl font-semibold bg-gradient-hero bg-clip-text text-transparent">
              More eyeballs, more money
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="left" delay={0.2}>
            <Card className="text-center p-8 shadow-elegant hover:shadow-glow transition-all duration-500">
              <CardContent className="space-y-4">
                <motion.div
                  className="text-4xl font-bold text-primary mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  +<AnimatedCounter end={150} suffix="%" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  More Clicks (Happy Audience)
                </h3>
                <p className="text-muted-foreground">
                  Watch your click-through rates soar as your audience eagerly awaits your content
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.4}>
            <Card className="text-center p-8 shadow-elegant hover:shadow-glow transition-all duration-500">
              <CardContent className="space-y-4">
                <motion.div
                  className="text-4xl font-bold text-primary mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter end={10} suffix="x" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Magnetic Brand Reputation
                </h3>
                <p className="text-muted-foreground">
                  People Coming Back for More - Build a loyal community that actively promotes your brand
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Expectations;