import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-news-delivery.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your
              <span className="bg-gradient-hero bg-clip-text text-transparent"> News Delivery</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Reach your audience with precision. Our advanced news delivery platform 
              ensures your content gets to the right people at the right time, 
              maximizing engagement and conversions.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <CheckCircle className="text-primary w-5 h-5" />
              <span className="text-foreground">Instant global distribution</span>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <CheckCircle className="text-primary w-5 h-5" />
              <span className="text-foreground">Advanced audience targeting</span>
            </div>
            <div className="flex items-center space-x-4 mb-12">
              <CheckCircle className="text-primary w-5 h-5" />
              <span className="text-foreground">Real-time analytics & insights</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="News delivery platform dashboard showing global reach and analytics"
                className="w-full h-auto"
              />
            </Card>
            
            {/* Floating stats */}
            <Card className="absolute -bottom-4 -left-4 bg-background p-4 shadow-glow">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </Card>
            
            <Card className="absolute -top-4 -right-4 bg-background p-4 shadow-glow">
              <div className="text-2xl font-bold text-primary">2.5M+</div>
              <div className="text-sm text-muted-foreground">Articles Delivered</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;