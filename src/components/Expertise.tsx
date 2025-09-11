import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Expertise = () => {
  const expertiseAreas = [
    {
      area: "Email delivery",
      description: "We know what inboxes like to see…"
    },
    {
      area: "List hygiene", 
      description: "Dirty lists hate to see us coming…"
    },
    {
      area: "Segmentation",
      description: "Finding who wants what you've got"
    },
    {
      area: "Hyper-Engaging Content",
      description: "Tailored content to your audience's interests"
    },
    {
      area: "Monetization",
      description: "Boost your products or help promote others"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              NewsDelivered connects you with experts in...
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {expertiseAreas.map((item, index) => (
                    <motion.div
                      key={index}
                      className="grid md:grid-cols-2 gap-4 p-6 hover:bg-muted/30 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="font-semibold text-foreground text-lg">
                        {item.area}
                      </div>
                      <div className="text-muted-foreground">
                        {item.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Expertise;