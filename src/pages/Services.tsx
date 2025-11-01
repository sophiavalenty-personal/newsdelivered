import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Target, Wrench, BarChart, Code, Send, Shield, TrendingUp, ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const steps = [{
    number: 1,
    icon: Phone,
    title: "Book a Free Strategy Consultation",
    description: ""
  }, {
    number: 2,
    icon: Target,
    title: "Strategy & Planning",
    description: "We'll discuss your goals, pain points and current marketing approach, then create an ideal email strategy designed to increase your bottom line."
  }, {
    number: 3,
    icon: Wrench,
    title: "We'll Put It All Together For You",
    description: "Once you approve the plan we'll handle all the technical details so you can sit back, relax, and focus on the parts of your business you do best."
  }, {
    number: 4,
    icon: BarChart,
    title: "Transparent Reporting and Iteration",
    description: "We monitor performance, make adjustments as needed, and communicate regularly with detailed reports to keep you informed about how your strategy is improving and providing value to your business."
  }];
  const industries = ["Ecommerce", "B2B", "Service Providers", "Health and Wellness", "Publishing", "And More"];
  const testimonials = [{
    quote: "Working with News Delivered transformed our email strategy. Our open rates increased by 180% and we're seeing consistent engagement from our audience.",
    author: "Sarah Johnson",
    company: "TechStart Inc.",
    result: "+180% Open Rates"
  }, {
    quote: "Finally, an email partner that understands the balance between promotion and value. Our customers actually look forward to our emails now.",
    author: "Michael Chen",
    company: "Wellness Co.",
    result: "+250% Click-Through Rate"
  }, {
    quote: "The ROI has been incredible. We've seen a 3x increase in revenue directly attributed to our improved email strategy.",
    author: "Emily Rodriguez",
    company: "E-commerce Brand",
    result: "3x Revenue Growth"
  }];
  const faqs = [{
    question: "How long until we see results?",
    answer: "Most clients start seeing improved engagement within 2-3 weeks of launching their new strategy. Significant revenue impact typically becomes evident within 60-90 days as we optimize and refine your approach."
  }, {
    question: "What if we already have an email strategy?",
    answer: "Perfect! We'll conduct a comprehensive audit of your current strategy and identify opportunities for improvement. We can either enhance what you have or help you transition to a more effective approach."
  }, {
    question: "What ESPs do you work with?",
    answer: "We work with all major email service providers including Mailchimp, Klaviyo, SendGrid, ConvertKit, ActiveCampaign, and more. If you have a specific platform, we can work with it."
  }, {
    question: "How much time commitment is required from us?",
    answer: "Minimal! That's the beauty of our done-for-you service. We typically need 1-2 hours per month for strategy alignment calls. We handle all the heavy lifting - content creation, design, sending, and reporting."
  }, {
    question: "Do you offer custom pricing?",
    answer: "Yes! Every business has unique needs. We'll create a custom package based on your email list size, sending frequency, and specific requirements. Contact us for a personalized quote."
  }];
  return <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 pb-2 leading-tight text-primary">
              End to End Newsletter Management
            </h1>
          </ScrollReveal>

          {/* Steps Process */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16 mt-20">
            {steps.map((step, index) => <ScrollReveal key={index} delay={index * 0.15}>
                <div className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-primary/40 to-transparent hidden md:block" />}
                  
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        {/* Step Number Circle */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                        </div>
                        
                        <div className="flex-1">
                          {/* Icon and Title */}
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3">
                              <step.icon className="w-6 h-6 text-primary" />
                              <h3 className="text-2xl font-bold text-foreground">
                                {step.title}
                              </h3>
                            </div>
                            {step.number === 1 && <Link to="/contact" className="flex items-center gap-1 text-base text-primary hover:text-primary-glow transition-colors">
                                Contact
                                <ArrowRight className="w-5 h-5" />
                              </Link>}
                          </div>
                          
                          {/* Description */}
                          {step.description && <p className="text-lg text-muted-foreground">
                              {step.description}
                            </p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>)}
          </div>
        </section>

        {/* Industries Section - Streamlined */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                We Work With Businesses Across Industries
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Email should be a key sales driver, no matter your industry
              </p>
            </ScrollReveal>
            
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => <ScrollReveal key={index} delay={index * 0.05}>
                  <Badge variant="outline" className="px-6 py-2 text-base font-medium border-primary/30 text-foreground">
                    {industry}
                  </Badge>
                </ScrollReveal>)}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary-glow to-secondary rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Email Strategy?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you build a newsletter your audience loves and drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Schedule Your Free Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Custom pricing</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Services;