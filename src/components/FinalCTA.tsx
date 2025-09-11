import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
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
                <div className="text-4xl mb-6">👉</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  "Let's make your newsletter your customers' favorite email."
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Stop sending emails that get ignored. Start building a channel your audience actually loves.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-xl px-12 py-6 hover:shadow-glow transition-all duration-300"
                  >
                    Help Me NOW! (We're ready...)
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