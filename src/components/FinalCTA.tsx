import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-muted/30 relative">
      {/* Geometric separator from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-1 origin-top-left"></div>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <Card className="max-w-4xl mx-auto shadow-elegant hover:shadow-glow transition-all duration-500">
            <CardContent className="text-center p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Want NewsDelivered Today?
                </h2>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-xl px-12 py-6 hover:shadow-glow transition-all duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    → Talk with an expert now
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;