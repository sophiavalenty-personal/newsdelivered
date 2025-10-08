import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Quote, Star, TrendingUp, Users, Target } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      quote: "NewsDelivered transformed our email strategy. Open rates jumped from 18% to 47% in just 3 months.",
      author: "Sarah Chen",
      company: "TechFlow Inc.",
      result: "+160% Open Rate",
      rating: 5
    },
    {
      quote: "Finally, a newsletter our customers actually read. The 80/20 formula works brilliantly.",
      author: "Marcus Johnson",
      company: "GreenLeaf Organics",
      result: "+89% CTR",
      rating: 5
    },
    {
      quote: "We've seen a 3x increase in qualified leads since partnering with NewsDelivered. Game changer.",
      author: "Emily Rodriguez",
      company: "CloudServe Solutions",
      result: "3x Leads",
      rating: 5
    }
  ];

  const stats = [
    { value: "5+", label: "Years in Business", icon: TrendingUp },
    { value: "200+", label: "Newsletters Managed", icon: Target },
    { value: "2M+", label: "Subscribers Reached", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Star }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Proven Results
              </Badge>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Don't Just Take Our Word For It
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join hundreds of businesses that have transformed their newsletter strategy
              </motion.p>
            </div>
          </ScrollReveal>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full shadow-elegant hover:shadow-glow transition-all duration-500 border-primary/10">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <Quote className="w-8 h-8 text-primary/20 mb-4" />
                      
                      <p className="text-foreground mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">
                          {testimonial.result}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust Stats */}
          <ScrollReveal direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;