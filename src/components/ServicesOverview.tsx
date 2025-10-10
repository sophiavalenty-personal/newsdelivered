import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Target, Code, BarChart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      title: "Strategy Audit",
      description: "We assess your current marketing strategy and identify how email can increase your bottom line.",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "Content Calendar & Strategy",
      description: "We build a comprehensive email strategy and content calendar tailored to your business goals.",
      color: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-600"
    },
    {
      icon: Code,
      title: "Templates & Sending",
      description: "Beautiful, responsive HTML templates delivered through your ESP. We handle all the technical details.",
      color: "from-green-500/10 to-green-600/10",
      iconColor: "text-green-600"
    },
    {
      icon: BarChart,
      title: "Performance & Reporting",
      description: "Detailed analytics and regular communication to ensure your email strategy is driving results.",
      color: "from-orange-500/10 to-orange-600/10",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                End-to-End Newsletter Management
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From strategy to execution, we handle everything so you can focus on your business
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`h-full hover:shadow-elegant transition-all duration-300 border-primary/10 bg-gradient-to-br ${service.color}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center ${service.iconColor}`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-foreground">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="text-center">
              <Link to="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="group">
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;