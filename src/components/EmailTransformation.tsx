import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { useState, useEffect } from "react";

const EmailTransformation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["profit center", "lead generator", "prospect warming oven"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="up">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Make email a{" "}
                <motion.span 
                  key={currentWordIndex}
                  className="text-primary font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </motion.span>
            </motion.h2>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EmailTransformation;