import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowDown, Handshake, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PainSolution = () => {
  return <section className="py-24 bg-muted/30 relative">
      {/* Geometric separator from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-1 origin-top-left"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            {/* Entertainment-First Strategy Section - Donut Chart */}
            <div className="mb-16">
              <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center">Add Engaging Content, Increase Revenue.</h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  {/* Left side - Content Details */}
                  <div className="space-y-8">
                    {/* 80% Section */}
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border-2 border-primary/20">
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-5xl font-bold text-primary">80%</span>
                        <span className="text-xl font-bold text-foreground">Entertaining + Informative Content</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Keeps readers engaging with the brand</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Supercharges email delivery reputation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Creates more advertising opportunities</span>
                        </li>
                      </ul>
                    </div>

                    {/* 20% Section */}
                    <div className="bg-muted/30 p-6 rounded-lg border-2 border-border">
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-5xl font-bold text-foreground">20%</span>
                        <span className="text-xl font-bold text-foreground">Strategic Brand Promotion</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>More positive engagement - fewer unsubscribes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Drives revenue without overwhelming your audience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Feels natural and more compelling</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Donut Chart */}
                  <div className="relative flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie data={[{
                        name: "Content",
                        value: 80
                      }, {
                        name: "Promotion",
                        value: 20
                      }]} cx="50%" cy="50%" innerRadius={100} outerRadius={160} paddingAngle={2} dataKey="value">
                          <Cell fill="hsl(var(--primary))" />
                          <Cell fill="hsl(var(--muted-foreground))" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-primary">80/20</div>
                        <div className="text-sm text-muted-foreground mt-1">Formula</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow pointing down */}
            <div className="text-center mb-16">
              <motion.div className="flex justify-center my-10" initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}>
                <ArrowDown className="w-12 h-12 text-primary" strokeWidth={2.5} />
              </motion.div>
                
              {/* SOLUTION Header */}
              <motion.div className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 rounded-2xl max-w-4xl mx-auto shadow-glow mb-16" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.0
            }}>
                <div className="text-3xl font-bold mb-3 md:text-4xl">
                  <p className="text-primary">Human Experts + AI Automation</p>
                  <p className="text-foreground">Done-For-You</p>
                </div>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </motion.div>

              {/* Full Service Partnership */}
              <motion.div className="mb-12" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.2
            }}>
                <Card className="p-8 md:p-10 shadow-elegant max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Handshake className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                      Full-Service Partnership Offering
                    </h3>
                    <div className="mb-6 max-w-2xl mx-auto space-y-4">
                      {/* Item 1 */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-foreground">
                          Custom revenue-boosting email strategy
                        </p>
                      </div>
                      
                      {/* Item 2 */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-foreground">
                          Hyper engaging content creation
                        </p>
                      </div>
                      
                      {/* Item 3 */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-foreground">
                          Expert campaign deployment
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic max-w-3xl mx-auto">
                      We become your email team — designing, writing, and managing campaigns while keeping you fully in the loop. We handle the heavy lifting.
                    </p>
                    <div className="text-center">
                      <Link to="/services" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all hover:underline">
                        Learn More <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Geometric separator to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
    </section>;
};

export default PainSolution;
