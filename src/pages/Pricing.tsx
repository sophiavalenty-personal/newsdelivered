import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Minus, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

interface FeatureRow {
  label: string;
  start: boolean | string;
  grow: boolean | string;
  scale: boolean | string;
}

const features: FeatureRow[] = [
  { label: "Hyper engaging design & content", start: true, grow: true, scale: true },
  { label: "Expert human editorial", start: true, grow: true, scale: true },
  { label: "Quality & Compliance Verification", start: true, grow: true, scale: true },
  { label: "End-to-End technical management", start: true, grow: true, scale: true },
  { label: "Publishing & Performance Optimization", start: true, grow: true, scale: true },
  { label: "Full list management + segmentation", start: true, grow: true, scale: true },
  { label: "Single point of contact (Content Strategist)", start: true, grow: true, scale: true },
  { label: "Website article posting (Blog)", start: true, grow: true, scale: true },
  { label: "Custom lead magnets (Mini-Course)", start: false, grow: true, scale: true },
  { label: "+2x sub-agent/CPA branded newsletter", start: false, grow: false, scale: true },
  { label: "Email prospect follow-up sequences", start: false, grow: false, scale: true },
  { label: "Social media posting (LinkedIn, FB, IG)", start: false, grow: false, scale: true },
  { label: "Subscriber growth (Paid Meta Ads)", start: false, grow: false, scale: "By Quote" },
];

const onboardingSteps = [
  { step: 1, title: "Research and GTM Strategy", description: "Documented go-to-market strategy session" },
  { step: 2, title: "Technical Implementation", description: "Platform setup, data validation, segmentation, and configuration" },
  { step: 3, title: "List Cleaning, Warming & First Send", description: "Prepare your list and deliver your first newsletter" },
  { step: 4, title: "Monitoring & Performance Tracking", description: "Open rates, click-throughs, and bookings analysis" },
  { step: 5, title: "Scale-Up + Monthly Content Reviews", description: "Ongoing optimization and strategy reviews (1-2 hrs/mo)" },
];

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-600 mx-auto" />;
    }
    if (value === false) {
      return <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
    }
    return <span className="text-sm font-medium text-primary">{value}</span>;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 pb-2 leading-tight text-primary" data-testid="text-pricing-heading">
              Done-For-You Newsletter Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              Choose the plan that fits your business. All plans include expert human editorial,
              end-to-end management, and a dedicated Content Strategist.
            </p>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-left" data-testid="table-plan-comparison">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-3 pr-4 text-sm font-semibold text-foreground w-1/2">Included</th>
                    <th className="py-3 px-4 text-sm font-semibold text-center text-foreground">
                      Start
                      <div className="text-xs font-normal text-muted-foreground mt-1">Up to 4x / Mo.</div>
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-center text-foreground">
                      Grow
                      <div className="text-xs font-normal text-muted-foreground mt-1">Up to 8x / Mo.</div>
                    </th>
                    <th className="py-3 px-4 text-sm font-semibold text-center text-foreground">
                      Scale
                      <div className="text-xs font-normal text-muted-foreground mt-1">10+ / Mo.</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 pr-4 text-sm text-foreground">{feature.label}</td>
                      <td className="py-3 px-4 text-center">{renderFeatureValue(feature.start)}</td>
                      <td className="py-3 px-4 text-center">{renderFeatureValue(feature.grow)}</td>
                      <td className="py-3 px-4 text-center">{renderFeatureValue(feature.scale)}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-primary/20">
                    <td className="py-4 pr-4 text-sm font-bold text-foreground">Monthly Investment</td>
                    <td className="py-4 px-4 text-center font-bold text-lg">$2k</td>
                    <td className="py-4 px-4 text-center font-bold text-lg">$3k</td>
                    <td className="py-4 px-4 text-center font-bold text-lg">$4k</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4"></td>
                    <td className="py-4 px-4 text-center">
                      <Button size="sm" onClick={() => window.open('https://buy.stripe.com/dRm28rd0Rcbd0Bw2ImeUU0j', '_blank')} data-testid="button-choose-start">
                        Choose Plan <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Button size="sm" onClick={() => window.open('https://buy.stripe.com/aFacN51i9cbdfwq82GeUU0i', '_blank')} data-testid="button-choose-grow">
                        Choose Plan <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Button size="sm" onClick={() => window.open('https://buy.stripe.com/fZucN5bWN3EHcke82GeUU0h', '_blank')} data-testid="button-choose-scale">
                        Choose Plan <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
                *60-day guarantee. Cancel any time and/or train your internal team to run your newsletter
                using our platform, systems, and SOPs. You own all your content and data.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary" data-testid="text-onboarding-heading">
              Onboarding Process
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {onboardingSteps.map((item) => (
              <ScrollReveal key={item.step}>
                <Card data-testid={`card-onboarding-step-${item.step}`}>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <ScrollReveal>
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Schedule a free consultation to discuss which plan is the best fit for your business goals.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  data-testid="button-cta-consultation"
                >
                  Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
