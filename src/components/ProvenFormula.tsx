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
                Builds <span className="text-primary font-semibold">trust</span>, keeps readers <span className="text-primary font-semibold">engaged</span>, drives <span className="text-primary font-semibold">results</span>
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="flex justify-center mb-16">
            <ScrollReveal direction="up">
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-500 max-w-2xl w-full">
                <CardContent className="p-12">
                  <h4 className="text-2xl font-semibold mb-12 text-center">Content Distribution</h4>
                  
                  <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={150}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend 
                          verticalAlign="bottom" 
                          height={50}
                          formatter={(value, entry) => (
                            <span className="text-base font-medium" style={{ color: entry.color }}>
                              {value}
                            </span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                      This proven ratio drives engagement and builds lasting relationships
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <div className="text-center">
              <motion.div 
                className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-2xl font-bold mb-4 text-primary">The Result?</p>
                <p className="text-xl font-medium text-foreground">Newsletters your customers actually look forward to reading.</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProvenFormula;