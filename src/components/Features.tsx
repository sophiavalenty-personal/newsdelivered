import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, BarChart3, Shield, Clock, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast Delivery",
      description: "Distribute your news content to millions of readers in milliseconds with our global CDN network.",
      badge: "Performance"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision Targeting",
      description: "Reach the exact audience you want with advanced demographic and behavioral targeting tools.",
      badge: "Targeting"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Track engagement, conversion rates, and reader behavior with comprehensive real-time analytics.",
      badge: "Analytics"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level security ensures your content and subscriber data remain completely protected.",
      badge: "Security"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Scheduled Publishing",
      description: "Automate your content distribution with intelligent scheduling and time zone optimization.",
      badge: "Automation"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Expand your audience worldwide with multi-language support and regional optimization.",
      badge: "Global"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools you need to deliver news content 
            effectively and measure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-border">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  {feature.icon}
                  <Badge variant="outline">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;