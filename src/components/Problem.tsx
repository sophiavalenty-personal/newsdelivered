import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Mail, Eye, MousePointer } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedCounter from "@/components/ui/animated-counter";

const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="destructive" className="mb-4">The Problem</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <AnimatedCounter end={80} suffix="%" /> of brand newsletters are 
              <span className="text-destructive"> ignored.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Most company newsletters read like ads. Open rates sink below 25%, and click-throughs even lower. 
              Your audience tunes out — and you lose one of your best chances to stay top-of-mind.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingDown, value: 80, suffix: "%", label: "Newsletters ignored", delay: 0.2 },
              { icon: Eye, value: 25, prefix: "<", suffix: "%", label: "Open rates", delay: 0.4 },
              { icon: MousePointer, value: 3, prefix: "<", suffix: "%", label: "Click-through rates", delay: 0.6 }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={stat.delay}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-background border-destructive/20 hover:border-destructive/40 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                        viewport={{ once: true }}
                      >
                        <stat.icon className="w-8 h-8 text-destructive mx-auto mb-3" />
                      </motion.div>
                      <div className="text-2xl font-bold text-destructive mb-2">
                        {stat.prefix}<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;