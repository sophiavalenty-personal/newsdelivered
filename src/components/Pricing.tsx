import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Zap } from "lucide-react";

const Pricing = () => {
  const options = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Pay as you go",
      description: "Perfect for testing the waters",
      detail: "(per article)"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Consultation Services", 
      description: "Get expert guidance on your strategy",
      detail: ""
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Handle it all for me",
      description: "Full-service newsletter management",
      detail: ""
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start small, 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> scale big.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the approach that fits your needs and budget. No long-term commitments required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {options.map((option, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  {option.detail && (
                    <div className="text-sm text-primary font-medium mb-2">{option.detail}</div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Not sure which option is right for you?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your specific needs and find the perfect solution that reduces friction and maximizes your ROI.
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Book a Strategy Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;