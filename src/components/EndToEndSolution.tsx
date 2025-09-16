import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowRight, Search, FileText, Share2, CheckCircle, Users, ArrowRightLeft } from "lucide-react";

const EndToEndSolution = () => {
  const focusAreas = [
    { name: "your business" },
    { name: "innovation" }, 
    { name: "growth"  }
  ];

  const steps = [
    {
      number: 1,
      title: "Audience Research",
      description: "Experts in your field will deep dive into your specific audience and customer needs",
      icon: Search
    },
    {
      number: 2,
      title: "Winning Strategy",
      description: "Create a content strategy that brings value to you AND your readers, customers and leads",
      icon: FileText
    },
    {
      number: 3,
      title: "Make it Real",
      description: "We'll publish content that works for you across all your desired platforms",
      icon: Share2
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg"></div>
      </div>
      
      {/* Top border separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
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
                Getting NewsDelivered Means…
              </motion.h3>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                You focus on what you do best, our experts will take care of the rest
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="space-y-16 mb-20">
            {/* Interactive Handoff Design */}
            <ScrollReveal direction="up">
              <div className="relative">
                {/* Main container with two sections and bridge */}
                <div className="grid lg:grid-cols-5 gap-8 items-center min-h-[600px]">
                  
                  {/* Left Section - You Focus */}
                  <motion.div 
                    className="lg:col-span-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full shadow-lg border-primary/20 bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-500 group">
                      <CardContent className="p-8 h-full flex flex-col justify-center">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/15 to-primary/10 rounded-full mb-4 border border-primary/20">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <p className="text-lg font-semibold text-foreground">
                              You focus on <span className="text-primary font-bold">what you do best</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-3 text-sm">
                          {focusAreas.map((area, index) => (
                            <motion.span
                              key={area.name}
                              className="px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 text-foreground font-medium shadow-sm group-hover:bg-primary/15 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {area.name}
                            </motion.span>
                          ))}
                          <span className="px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 text-foreground font-medium shadow-sm group-hover:bg-primary/15 transition-all duration-300">your passions</span>
                          <span className="px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 text-foreground font-medium shadow-sm group-hover:bg-primary/15 transition-all duration-300">family time</span>
                          <span className="px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 text-foreground font-medium shadow-sm group-hover:bg-primary/15 transition-all duration-300">customer relationships</span>
                          <span className="px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 text-foreground font-medium shadow-sm group-hover:bg-primary/15 transition-all duration-300">product development</span>
                          <span className="px-3 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 text-foreground font-medium shadow-sm group-hover:bg-primary/15 transition-all duration-300">whatever drives you</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Center Bridge - Interactive Handoff */}
                  <div className="lg:col-span-1 flex justify-center items-center relative">
                    <motion.div 
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated bridge background */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-full blur-lg"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Main handoff circle */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <motion.div
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <ArrowRightLeft className="w-8 h-8 text-primary-foreground" />
                        </motion.div>
                      </div>
                      
                      {/* Connecting lines */}
                      <div className="absolute top-1/2 -left-16 w-16 h-0.5 bg-gradient-to-r from-transparent to-primary/50 -translate-y-1/2"></div>
                      <div className="absolute top-1/2 -right-16 w-16 h-0.5 bg-gradient-to-l from-transparent to-primary/50 -translate-y-1/2"></div>
                      
                      {/* Floating particles */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-2 h-2 bg-primary/60 rounded-full"
                        animate={{ 
                          y: [-5, 5, -5],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0
                        }}
                      />
                      <motion.div 
                        className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/60 rounded-full"
                        animate={{ 
                          y: [5, -5, 5],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Right Section - We Handle */}
                  <motion.div 
                    className="lg:col-span-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full shadow-lg border-primary/20 bg-gradient-to-br from-muted/30 to-primary/5 hover:shadow-xl transition-all duration-500 group">
                      <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Users className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">We'll Keep The News Delivered</h4>
                        <p className="text-lg text-muted-foreground font-medium">Our experts will take care of the rest...</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Our Process Section */}
          <ScrollReveal direction="up">
            <div className="mb-20">
              <div className="text-center mb-16">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Our Process
                </motion.h3>
                <motion.p 
                  className="text-xl text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  It's all part of the package
                </motion.p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.number}
                    className="relative group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full shadow-lg border-primary/20 bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-500 group-hover:border-primary/40">
                      <CardContent className="p-8 text-center">
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 transition-colors duration-300">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h4>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-xl px-12 py-8 hover:shadow-glow transition-all duration-300 font-semibold"
                  onClick={() => window.location.href = '#'}
                >
                  → Watch A Demo
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default EndToEndSolution;