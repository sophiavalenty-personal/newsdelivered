import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Target, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

const ContentStrategy = () => {
  const strategies = [
    {
      icon: Target,
      title: "Entertain, Empower and Educate",
      description: "Create content that resonates and provides real value",
      highlighted: false
    },
    {
      icon: DollarSign,
      title: "Drive Sales and Revenue",
      description: "Convert your audience into loyal customers",
      highlighted: true
    },
    {
      icon: TrendingUp,
      title: "Build Brand Authority",
      description: "Establish yourself as the trusted expert in your field",
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative">
      {/* Geometric separator from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-1 origin-top-left"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Your Newsletter Should
              </motion.h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={`h-full text-center shadow-elegant border-primary/10 bg-gradient-to-br from-background to-background/50 hover:shadow-glow transition-all duration-300 ${strategy.highlighted ? 'ring-2 ring-primary/20 shadow-glow scale-105' : ''}`}>
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-6 ${strategy.highlighted ? 'from-primary to-primary/90 shadow-lg' : 'from-primary to-primary/80'}`}>
                        <strategy.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className={`text-xl font-bold mb-4 leading-tight ${strategy.highlighted ? 'text-primary' : 'text-foreground'}`}>
                        {strategy.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {strategy.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <motion.div
                className="flex items-center justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <CheckCircle className="w-6 h-6 text-primary" />
                <p className="text-2xl font-semibold text-foreground">
                  Need a newsletter that does all that?
                </p>
              </motion.div>
              
              {/* Reality Check Section */}
              <motion.div 
                className="mb-12 p-8 bg-destructive/5 border border-destructive/20 rounded-xl max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <p className="text-xl md:text-2xl font-bold mb-4 text-destructive">
                  But here's where most people are:
                </p>
                <p className="text-2xl md:text-3xl font-bold mb-4 text-destructive">
                  80% of brand newsletters are ignored
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most company newsletters read like ads. Open rates sink below 25%, click-throughs drop even lower. 
                  Your audience tunes out — and you lose one of your best chances to stay top-of-mind.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-xl px-12 py-8 hover:shadow-glow transition-all duration-300 font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get NewsDelivered
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Geometric separator to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
    </section>
  );
};

export default ContentStrategy;