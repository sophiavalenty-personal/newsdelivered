import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

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
            <motion.h1
              className="text-[3.6rem] font-normal leading-tight mb-4 bg-gradient-hero bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Email Marketing Experts
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              News Delivered boosts revenue for businesses using hyper-engaging newsletters.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300 font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  → Get Your Free Audit
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="hero-outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 transition-all duration-300 font-semibold"
                  onClick={() => window.location.href = '/services'}
                >
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              ✓ No long-term contracts  ✓ 47% average open rate  ✓ Results in 90 days
            </motion.p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;