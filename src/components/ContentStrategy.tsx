import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Target, TrendingUp, DollarSign, CheckCircle, ArrowDown } from "lucide-react";

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
            {/* Problem Section - At the Top */}
            <div className="text-center mb-16">
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg md:text-xl font-medium mb-6 text-muted-foreground">
                  But here's where most people are:
                </p>
                
                <div className="p-10 bg-gradient-to-br from-orange-50/80 to-red-50/60 border-2 border-orange-200/50 rounded-2xl max-w-4xl mx-auto shadow-lg">
                  <motion.p 
                    className="text-4xl font-bold mb-6 text-orange-700/90 leading-tight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    80% of newsletters are ignored
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Most company newsletters read like ads. Open rates sink below 25%, click-throughs drop even lower. 
                    Your audience tunes out — and you lose one of your best chances to stay top-of-mind.
                  </motion.p>
                </div>

                {/* Arrow pointing down */}
                <motion.div 
                  className="flex justify-center my-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.5
                  }}
                >
                  <ArrowDown className="w-12 h-12 text-primary" strokeWidth={2.5} />
                </motion.div>
                  
                {/* Solution Header */}
                <motion.div
                  className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 rounded-2xl max-w-4xl mx-auto shadow-glow mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-3">
                    The Newsletter Strategy that Works
                  </p>
                  <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>
              </motion.div>

              {/* Your Newsletter Should - Heading */}
              <motion.h2 
                className="text-3xl font-bold mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Your Newsletter Should
              </motion.h2>
            </div>
            
            {/* The 3 Strategy Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
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
          </ScrollReveal>
        </div>
      </div>
      
      {/* Geometric separator to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
    </section>
  );
};

export default ContentStrategy;