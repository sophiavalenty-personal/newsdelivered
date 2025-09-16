import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { TrendingDown, Eye, MousePointer } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";

const WherePeopleGoWrong = () => {
  const stats = [
    {
      icon: TrendingDown,
      value: 80,
      suffix: "%",
      label: "Brand newsletters ignored"
    },
    {
      icon: Eye, 
      value: 25,
      suffix: "%",
      label: "Average open rates"
    },
    {
      icon: MousePointer,
      value: 15,
      suffix: "%",
      label: "Click-through rates"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative">
      {/* Geometric separator from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-1 origin-top-left"></div>
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
                Where Most People Go Wrong…
              </motion.h2>
              
              <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl font-semibold mb-6 text-primary">
                  <AnimatedCounter end={80} duration={2} />% of brand newsletters are ignored.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most company newsletters read like ads. Open rates sink below 25%, click-throughs and conversions drop even lower. 
                  Your audience tunes out — and you lose one of your best chances to stay top-of-mind.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8">
                      <stat.icon className="w-12 h-12 text-destructive mx-auto mb-4" />
                      <div className="text-4xl font-bold text-destructive mb-2">
                        <AnimatedCounter end={stat.value} duration={2} />
                        {stat.suffix}
                      </div>
                      <p className="text-muted-foreground font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Geometric separator to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
    </section>
  );
};

export default WherePeopleGoWrong;