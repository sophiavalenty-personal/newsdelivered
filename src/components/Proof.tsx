import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Mail, MousePointer } from "lucide-react";

const Proof = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Proof & Results</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What happens when you make newsletters 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> entertaining?</span>
            </h2>
          </div>
          
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-8">Mini Case Study</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-destructive/10 p-2 rounded-lg">
                        <Mail className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-1">Before</h4>
                        <p className="text-sm text-muted-foreground">
                          Weekly sales emails with 18% open rate
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">After</h4>
                        <p className="text-sm text-muted-foreground">
                          Content-first newsletter — 27% open rate, +30% CTR in 30 days
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary">27%</div>
                      <div className="text-sm text-muted-foreground">Open Rate</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="text-2xl font-bold text-accent">+30%</div>
                      <div className="text-sm text-muted-foreground">Click-Through</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Card className="bg-gradient-to-br from-muted to-muted/50 p-6 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-2">Before/After Preview</div>
                      <div className="bg-background p-4 rounded border">
                        <div className="h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">
                          [Email Design Screenshots]
                          <br />
                          <span className="text-xs">Placeholder for before/after visuals</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Button variant="outline" className="w-full group">
                    See More Examples
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Proof;