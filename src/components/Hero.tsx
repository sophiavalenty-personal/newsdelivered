import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import AnimatedCounter from "@/components/ui/animated-counter";
import heroImage from "@/assets/hero-news-delivery.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We turn your newsletter into a
              <motion.span 
                className="bg-gradient-hero bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              > must-read magazine.</motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your customers don't want another sales email. They want value, entertainment, and insights. 
              We build engaging newsletters that grow loyalty — while subtly driving revenue.
            </motion.p>
            
            {[
              { text: "80% value-driven content", delay: 0.6 },
              { text: "20% strategic promotion", delay: 0.8 },
              { text: "Newsletters customers love to read", delay: 1.0 }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: item.delay + 0.2 }}
                >
                  <CheckCircle className="text-primary w-5 h-5" />
                </motion.div>
                <span className="text-foreground">{item.text}</span>
              </motion.div>
            ))}
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
                  Request Your Free Audit
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
                  See Sample Work
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.4}>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
                <motion.img 
                  src={heroImage} 
                  alt="News delivery platform dashboard showing global reach and analytics"
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
              
              {/* Floating stats with animations */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Card className="absolute -bottom-4 -left-4 bg-background p-4 shadow-glow hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter end={27} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Open Rate</div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Card className="absolute -top-4 -right-4 bg-background p-4 shadow-glow hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-primary">
                    +<AnimatedCounter end={30} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Click Increase</div>
                </Card>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;