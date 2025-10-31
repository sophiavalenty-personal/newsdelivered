import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
const Pricing = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground leading-relaxed">
                  NewsDelivered offers premium solutions with transparent, cost-effective pricing. 
                  Tell us where you're at, where you want to go and we'll customize a plan to help you get there.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <motion.div whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};
export default Pricing;