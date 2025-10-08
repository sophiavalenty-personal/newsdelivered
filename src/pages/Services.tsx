import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Wrench, BarChart, Code, Send, Shield, TrendingUp, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Services = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Current Strategy Audit",
      description: "Our team will assess your overall marketing strategy and determine how email can increase your bottom line."
    },
    {
      number: 2,
      icon: Target,
      title: "Develop Ideal Marketing Strategy",
      description: "We'll build out your content calendar and create a comprehensive email strategy tailored to your business goals."
    },
    {
      number: 3,
      icon: Wrench,
      title: "We'll put it all together",
      description: "Done for you:",
      subItems: [
        {
          icon: Code,
          title: "Templates",
          description: "We're HTML experts so you don't have to be. Beautiful, responsive email templates that work across all devices."
        },
        {
          icon: Send,
          title: "Sending",
          description: "We'll send the email from your ESP / social platforms. Sit back while we handle the technical details."
        }
      ]
    },
    {
      number: 4,
      icon: BarChart,
      title: "We'll make sure it's working and keep you posted",
      description: null,
      subItems: [
        {
          icon: Shield,
          title: "Delivery - Email Authentication",
          description: "Make sure you're playing by all the Email Authentication Rules. We handle SPF, DKIM, DMARC, and more."
        },
        {
          icon: TrendingUp,
          title: "Performance",
          description: "Make sure your email is working for you. We'll communicate often and provide detailed reports to keep you in the know about how your strategy is improving and providing value to your business."
        }
      ]
    }
  ];

  const industries = [
    "Ecommerce",
    "B2B",
    "Service Providers",
    "Health and Wellness",
    "Publishing",
    "And More"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              End to End Newsletter Management
            </h1>
          </ScrollReveal>

          {/* Steps Process */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-transparent hidden md:block" />
                  )}
                  
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        {/* Step Number Circle */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                        </div>
                        
                        <div className="flex-1">
                          {/* Icon and Title */}
                          <div className="flex items-center gap-3 mb-3">
                            <step.icon className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                          
                          {/* Description (for steps 1 & 2) */}
                          {step.description && !step.subItems && (
                            <p className="text-lg text-muted-foreground">
                              {step.description}
                            </p>
                          )}
                          
                          {/* Description with sub-items label (for step 3) */}
                          {step.description && step.subItems && (
                            <p className="text-lg font-medium text-foreground mb-4">
                              {step.description}
                            </p>
                          )}
                          
                          {/* Sub-items (for steps 3 & 4) */}
                          {step.subItems && (
                            <div className="mt-4 space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                              {step.subItems.map((item, subIndex) => (
                                <div key={subIndex} className="flex items-start gap-4">
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1 text-foreground">
                                      {item.title}
                                    </h4>
                                    <p className="text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {/* Arrow indicator */}
                        {index < steps.length - 1 && (
                          <div className="hidden md:flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Value Proposition */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
                We're a whole extension of your marketing department, at a fraction of the cost, while we multiply your results.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Industries Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
                Need an email strategy that boosts customer lifetime value?
              </h2>
              <p className="text-lg text-center mb-8 text-muted-foreground">
                We've got you covered whether you're in
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {industries.map((industry, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-2">
                      <p className="font-medium text-foreground">{industry}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <p className="text-lg text-center mb-4 text-foreground">
              Email should be a key sales driver, no matter your industry.
            </p>
            <p className="text-xl font-semibold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              News Delivered can help your marketing strategy go from zero to HERO.
            </p>
          </div>
        </section>

        {/* Engagement Section */}
        <section className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
                The Key: Engaging with Non Promotional Content
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Engagement secures your golden ticket to the inbox. Non promotional content (aka trustworthy and valuable content) paves the way for promotions and is a KEY element to getting in the inbox when it matters most.
                </p>
                <p className="font-medium text-foreground">
                  News Delivered will deliver emails your customers and readers get excited to read and interact with and keep you top of mind and end of wallet... ;)
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
