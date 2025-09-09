import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Solution</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              An 80/20 content formula that keeps 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> readers hooked.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We flip the script:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-bold text-primary">80%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Entertaining + Informative Content</h3>
                  <p className="text-muted-foreground">
                    Industry insights, trends, lifestyle tips that your audience actually wants to read.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <span className="text-2xl font-bold text-accent">20%</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Subtle, Brand-Aligned Promotion</h3>
                  <p className="text-muted-foreground">
                    Strategic promotional content that feels natural and adds value.
                  </p>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
                <h4 className="text-lg font-semibold mb-2">The Result?</h4>
                <p className="text-primary-foreground/90">
                  Newsletters your customers actually look forward to receiving.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">Content Formula</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold">
                        80% Value Content
                      </div>
                    </div>
                    <div className="relative">
                      <div className="h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-semibold">
                        20% Promotion
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-sm text-muted-foreground">
                    Visual representation of our proven 80/20 content strategy
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;