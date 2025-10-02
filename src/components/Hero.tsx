import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Stars, Sparkles } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal direction="up">
            {/* Decorative element */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Professional Newsletter Services
                <Stars className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-[3.5rem] font-normal leading-tight mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="bg-gradient-hero bg-clip-text text-transparent block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Irresistible Newsletters
              </motion.span>
              <motion.span 
                className="text-foreground block mt-4 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Made-For-You
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="flex flex-col gap-4 mb-6 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button 
                  variant="hero" 
                  size="default" 
                  className="text-lg px-8 py-4 hover:shadow-glow transition-all duration-300 w-full font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  → Need an expert?
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;