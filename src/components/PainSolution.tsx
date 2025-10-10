import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Target, TrendingUp, DollarSign, ArrowDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import newsletterProblemImg from "@/assets/newsletter-problem.jpg";

const PainSolution = () => {
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

  const pieData = [
    { name: "Entertaining + Informative Content", value: 80, color: "hsl(var(--primary))" },
    { name: "Brand Promotion", value: 20, color: "hsl(var(--secondary))" }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-primary">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-24 bg-muted/30 relative">
      {/* Geometric separator from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-1 origin-top-left"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            {/* PAIN Section - At the Top */}
            <div className="mb-16">
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                  The Newsletter Problem Most Brands Face
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                  {/* Left side - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <img 
                      src={newsletterProblemImg} 
                      alt="Newsletter engagement challenges" 
                      className="rounded-lg shadow-lg w-full"
                    />
                  </motion.div>

                  {/* Right side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Big Vision? Small Team? Not Enough Time?
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      You have the subscribers but click rates are well under 5%. Your emails feel too salesy, 
                      and you're stuck in the spam folder. Meanwhile, your team lacks bandwidth to create the 
                      engaging, informative content that builds loyalty.
                    </p>
                    
                    <div className="bg-muted/50 p-6 rounded-lg border border-border">
                      <p className="text-base text-muted-foreground">
                        Sound familiar? <span className="bg-primary/20 text-primary font-semibold px-2 py-1 rounded">80% of marketers see email as a top engagement channel</span>, yet most struggle with non-promotional content that entertains and informs their audience, keeping them coming back for more.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Arrow pointing down */}
            <div className="text-center mb-16">
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
                
              {/* SOLUTION Header */}
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

              {/* 80/20 Pie Chart Section */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                  {/* Left side - Text content */}
                  <div className="space-y-6 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-4 h-4 rounded-full bg-primary mt-1.5"></div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">80% Entertaining + Informative Content</h3>
                          <p className="text-muted-foreground">
                            Build trust and engagement with valuable content that your audience actually wants to read.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-secondary mt-1.5"></div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">20% Brand Promotion</h3>
                          <p className="text-muted-foreground">
                            Strategic, well-placed promotions that feel natural and drive conversions.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - Pie Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  >
                    <Card className="p-6 shadow-elegant">
                      <CardContent className="p-0">
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, value }) => `${value}%`}
                              outerRadius={100}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                          </PieChart>
                        </ResponsiveContainer>
                        <p className="text-center font-semibold text-lg text-primary mt-4">
                          The 80/20 Rule Maximizes Engagement and Revenue
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              {/* Your Newsletter Should - Heading */}
              <motion.h2 
                className="text-3xl font-bold mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
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
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.2 }}
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

export default PainSolution;