import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Users, Heart, Wrench, Mail } from "lucide-react";
const EndToEndSolution = () => {
  const focusAreas = [{
    name: "customer relationships",
    icon: Heart
  }, {
    name: "product development",
    icon: Wrench
  }, {
    name: "customer support",
    icon: Users
  }];
  return <section className="relative py-24 bg-muted/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <motion.h2 className="text-3xl font-bold mb-8" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }}>An End-to-End Solution</motion.h2>
              
              <motion.h3 className="text-3xl md:text-4xl font-semibold mb-6 text-primary" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                Getting NewsDelivered Means
              </motion.h3>
            </div>
          </ScrollReveal>

          {/* Minimal Cards Layout */}
          <ScrollReveal direction="up">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Left Card - You Focus */}
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} whileHover={{
              y: -5
            }} className="group">
                <Card className="h-full shadow-elegant border-primary/20 bg-gradient-to-br from-background to-muted/30 hover:shadow-glow transition-all duration-500 group-hover:border-primary/40">
                  <CardContent className="p-8 lg:p-12 text-center h-full flex flex-col justify-center">
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                        <Heart className="w-10 h-10 text-primary" />
                      </div>
                      
                      <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        You focus on <br />
                        <span className="text-primary">what you do best</span>
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      {focusAreas.map((area, index) => <motion.div key={area.name} className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/10 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-300" initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1
                    }} whileHover={{
                      scale: 1.02,
                      x: 2
                    }}>
                          <area.icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-semibold text-foreground">{area.name}</span>
                        </motion.div>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Card - We Handle */}
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} whileHover={{
              y: -5
            }} className="group">
                <Card className="h-full shadow-elegant border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-glow transition-all duration-500 group-hover:border-primary/50 group-hover:from-primary/10 group-hover:to-primary/15">
                  <CardContent className="p-8 lg:p-12 text-center h-full flex flex-col justify-center relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-8">
                        <motion.div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" whileHover={{
                        rotate: 5
                      }}>
                          <Mail className="w-10 h-10 text-primary-foreground" />
                        </motion.div>
                        
                        <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                          We'll Keep the <br />
                          <span className="text-primary font-extrabold">NewsDelivered</span>
                        </h4>
                      </div>
                      
                      <motion.div className="inline-flex items-center gap-3 px-6 py-4 bg-white/50 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm group-hover:bg-white/70 group-hover:shadow-md transition-all duration-300" animate={{
                      scale: [1, 1.02, 1]
                    }} transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-foreground text-lg">Complete newsletter management</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};
export default EndToEndSolution;