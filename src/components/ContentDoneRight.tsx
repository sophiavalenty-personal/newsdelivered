import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { CheckCircle, TrendingUp } from "lucide-react";

const ContentDoneRight = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Keeps people happy and returning",
      description: "Engaging content that builds loyalty and keeps your audience coming back for more"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Drives sales and revenue (without being salesy)",
      description: "Strategic content that converts naturally through value and trust-building"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Content done right:
              </h2>
              <p className="text-lg text-muted-foreground">
                Here's what happens when your content strategy is executed perfectly
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full bg-background border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="mb-2">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDoneRight;