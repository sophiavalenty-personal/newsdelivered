import { Button } from "@/components/ui/button";
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
            <div className="relative py-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-border"></div>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-center px-4">
                NewsDelivered offers premium solutions with transparent, cost-effective pricing. 
                <br /><br />
                Tell us where you're at, where you want to go and we'll customize a plan to help you get there.
              </p>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-border"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="font-semibold">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};

export default Pricing;