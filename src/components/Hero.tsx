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
              We turn your newsletter into a
              <span className="bg-gradient-hero bg-clip-text text-transparent"> must-read magazine.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your customers don't want another sales email. They want value, entertainment, and insights. 
              We build engaging newsletters that grow loyalty — while subtly driving revenue.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <CheckCircle className="text-primary w-5 h-5" />
              <span className="text-foreground">80% value-driven content</span>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <CheckCircle className="text-primary w-5 h-5" />
              <span className="text-foreground">20% strategic promotion</span>
            </div>
            <div className="flex items-center space-x-4 mb-12">
              <CheckCircle className="text-primary w-5 h-5" />
              <span className="text-foreground">Newsletters customers love to read</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Request Your Free Audit
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
                See Sample Work
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
              <div className="text-2xl font-bold text-primary">27%</div>
              <div className="text-sm text-muted-foreground">Avg Open Rate</div>
            </Card>
            
            <Card className="absolute -top-4 -right-4 bg-background p-4 shadow-glow">
              <div className="text-2xl font-bold text-primary">+30%</div>
              <div className="text-sm text-muted-foreground">Click Increase</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;