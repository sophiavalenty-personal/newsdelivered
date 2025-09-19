import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const ProvenFormula = () => {
  const data = [
    { name: 'Entertaining + Informative Content', value: 80, color: 'hsl(var(--primary))' },
    { name: 'Brand Promotion', value: 20, color: 'hsl(142 76% 36%)' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-primary font-bold">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-white relative">
      {/* Top border separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                The Proven NewsDelivered Formula
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl font-medium text-muted-foreground max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                An 80/20 content strategy that keeps readers engaged while building trust and driving results
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-lg font-semibold text-primary">Entertaining + Informative</p>
                      <span className="text-3xl font-bold text-primary">80%</span>
                    </div>
                    <p className="text-muted-foreground">Industry insights, trends, lifestyle tips that your audience craves</p>
                  </div>
                  
                  <div className="p-6 bg-secondary/10 rounded-lg border border-secondary/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-lg font-semibold text-secondary-foreground">Brand Promotion</p>
                      <span className="text-3xl font-bold text-secondary-foreground">20%</span>
                    </div>
                    <p className="text-muted-foreground">Subtle, value-driven promotion that feels natural</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-xl font-semibold mb-2">The Result?</p>
                  <p className="text-lg font-medium text-primary">Newsletters your customers actually look forward to reading.</p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-500">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-semibold mb-8 text-center">Content Distribution</h4>
                  
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend 
                          verticalAlign="bottom" 
                          height={36}
                          formatter={(value, entry) => (
                            <span className="text-sm font-medium" style={{ color: entry.color }}>
                              {value}
                            </span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                      This proven ratio drives engagement and builds lasting relationships
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenFormula;