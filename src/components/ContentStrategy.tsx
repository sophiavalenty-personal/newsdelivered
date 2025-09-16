import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const ContentStrategy = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Content Strategy Should
            </motion.h2>
            
            <motion.div 
              className="space-y-4 mb-8 text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>Entertain, Empower and Educate Your Audience</p>
              <p>Build Brand Authority</p>
              <p>Drive Sales and Revenue</p>
            </motion.div>
            
            <motion.p 
              className="text-xl mb-8 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              If it's not working for you, NewsDelivered can help.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 hover:shadow-glow transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                → Get a Free Strategy Audit Now
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContentStrategy;