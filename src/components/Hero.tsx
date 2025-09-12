import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { useState, useEffect } from "react";

const Hero = () => {

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="bg-gradient-hero bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >Expert content marketing done for you.</motion.span>
            </motion.h1>
            
            <motion.div
              className="flex flex-col gap-4 mb-6 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300 w-full"
                  onClick={() => window.location.href = '/contact'}
                >
                  → Audit my current strategy (Free)
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-muted-foreground mb-4">Want us to just handle it all for you?</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    variant="hero-outline" 
                    size="lg" 
                    className="text-lg px-6 py-4 w-full"
                    onClick={() => window.location.href = '/contact'}
                  >
                    → Handle my content for me
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button 
                    variant="hero-outline" 
                    size="lg" 
                    className="text-lg px-6 py-4 w-full"
                    onClick={() => window.location.href = '/contact'}
                  >
                    → Teach me
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;