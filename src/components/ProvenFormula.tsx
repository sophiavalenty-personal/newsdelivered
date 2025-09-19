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
                Newsletters your customers actually look forward to reading
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
            <ScrollReveal direction="left">
              <motion.div 
                className="text-center lg:text-right space-y-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block lg:block">
                  <span className="text-4xl lg:text-6xl font-bold text-primary block">80%</span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-primary mt-2">Entertaining + Informative</h3>
                </div>
                <p className="text-muted-foreground max-w-xs mx-auto lg:ml-auto lg:mr-0">
                  Industry insights, trends, lifestyle tips that your audience craves
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={100}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
                    The proven 80/20 content ratio
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <motion.div 
                className="text-center lg:text-left space-y-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block lg:block">
                  <span className="text-4xl lg:text-6xl font-bold text-secondary-foreground block">20%</span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-secondary-foreground mt-2">Brand Promotion</h3>
                </div>
                <p className="text-muted-foreground max-w-xs mx-auto lg:mr-auto lg:ml-0">
                  Subtle, value-driven promotion that feels natural
                </p>
              </motion.div>
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
                <p className="text-2xl font-bold text-foreground">Engagement builds trust and drives results</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProvenFormula;