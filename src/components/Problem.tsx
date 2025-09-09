import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Mail, Eye, MousePointer } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="destructive" className="mb-4">The Problem</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            80% of brand newsletters are 
            <span className="text-destructive"> ignored.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Most company newsletters read like ads. Open rates sink below 25%, and click-throughs even lower. 
            Your audience tunes out — and you lose one of your best chances to stay top-of-mind.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background border-destructive/20">
              <CardContent className="p-6 text-center">
                <TrendingDown className="w-8 h-8 text-destructive mx-auto mb-3" />
                <div className="text-2xl font-bold text-destructive mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Newsletters ignored</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-destructive/20">
              <CardContent className="p-6 text-center">
                <Eye className="w-8 h-8 text-destructive mx-auto mb-3" />
                <div className="text-2xl font-bold text-destructive mb-2">&lt;25%</div>
                <div className="text-sm text-muted-foreground">Open rates</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-destructive/20">
              <CardContent className="p-6 text-center">
                <MousePointer className="w-8 h-8 text-destructive mx-auto mb-3" />
                <div className="text-2xl font-bold text-destructive mb-2">&lt;3%</div>
                <div className="text-sm text-muted-foreground">Click-through rates</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;