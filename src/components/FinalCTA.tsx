import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <Card className="max-w-4xl mx-auto shadow-2xl border-primary/20 overflow-hidden">
            <CardContent className="text-center p-12 md:p-16 bg-gradient-to-br from-background to-background/95">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-5xl">📧</span>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Let's Turn Your Emails Into <span className="bg-gradient-hero bg-clip-text text-transparent">Revenue</span>
                </h2>

                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="text-xl px-12 py-6 hover:shadow-glow transition-all duration-300 font-semibold"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Talk to an expert
                    </Button>
                  </motion.div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Free strategy session
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    No commitment required
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Results in 90 days or less
                  </span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;