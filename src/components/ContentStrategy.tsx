import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Target, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

const ContentStrategy = () => {
  const strategies = [
    {
      icon: Target,
      title: "Entertain, Inform, Empower",
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
                className="text-3xl font-bold mb-12"
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
              {/* Problem/Reality Check Section */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-lg md:text-xl font-medium mb-6 text-muted-foreground">
                  But here's where most people are:
                </p>
                
                <div className="p-8 bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/20 rounded-2xl max-w-4xl mx-auto">
                  <motion.p 
                    className="text-4xl md:text-6xl font-bold mb-6 text-destructive"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    80% of newsletters are ignored
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Most company newsletters read like ads. Open rates sink below 25%, click-throughs drop even lower. 
                    Your audience tunes out — and you lose one of your best chances to stay top-of-mind.
                  </motion.p>
                  
                  {/* Transition to Solution */}
                  <motion.div
                    className="pt-6 border-t border-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    <p className="text-xl md:text-2xl font-semibold text-primary">
                      The Newsletter Strategy that Works
                    </p>
                  </motion.div>
                </div>
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