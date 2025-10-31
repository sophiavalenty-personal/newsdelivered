import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";

const Pricing = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pricing
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Card className="border-l-4 border-primary/30 shadow-sm">
              <CardContent className="py-12 px-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  NewsDelivered offers premium solutions with transparent, cost-effective pricing. 
                  <br /><br />
                  Tell us where you're at, where you want to go and we'll customize a plan to help you get there.
                </p>
                
                <div className="text-center mt-8">
                  <Link to="/contact">
                    <Button size="lg" className="font-semibold">
                      Talk to an Expert
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};

export default Pricing;