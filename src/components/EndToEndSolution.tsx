import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowRight, Users, Heart, Wrench } from "lucide-react";

const EndToEndSolution = () => {
  const focusAreas = [
    { name: "customer relationships", icon: Heart },
    { name: "product development", icon: Wrench },
    { name: "customer support", icon: Users }
  ];

  return (
    <section className="relative py-24 bg-muted/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                An End to End Solution
              </motion.h2>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-semibold mb-6 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Getting NewsDelivered Means
              </motion.h3>
            </div>
          </ScrollReveal>

          {/* Timeline Flow */}
          <ScrollReveal direction="up">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 -translate-y-1/2 z-0"></div>
              
              {/* Timeline Container */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[400px]">
                
                {/* Left Section - You Focus */}
                <motion.div 
                  className="text-center lg:text-right"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-elegant border border-primary/10 relative">
                    <div className="absolute -right-4 top-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full -translate-y-1/2 z-20"></div>
                    
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      You focus on <span className="text-primary">what you do best</span>
                    </h4>
                    
                    <div className="space-y-4">
                      {focusAreas.map((area, index) => (
                        <motion.div
                          key={area.name}
                          className="flex items-center justify-center lg:justify-end gap-3 p-3 bg-primary/5 rounded-full border border-primary/10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.05, x: -5 }}
                        >
                          <area.icon className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">{area.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Center - Timeline Arrow */}
                <motion.div 
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-glow"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    
                    {/* Flowing particles */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-3 h-3 bg-primary/60 rounded-full"
                      animate={{ 
                        x: [0, 10, 0],
                        y: [0, -5, 0],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/60 rounded-full"
                      animate={{ 
                        x: [0, 15, 0],
                        y: [0, 5, 0],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Right Section - We Handle */}
                <motion.div 
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 shadow-elegant border border-primary/20 relative">
                    <div className="absolute -left-4 top-1/2 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 border-4 border-white rounded-full -translate-y-1/2 z-20"></div>
                    
                    <div className="flex justify-center lg:justify-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      We'll Keep the <span className="text-primary">NewsDelivered</span>
                    </h4>
                    
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ✓ Complete newsletter management
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EndToEndSolution;