import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Calendar, Phone, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-background to-muted py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" data-testid="text-contact-title">
                Book Your Free Consultation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                See how NewsDelivered can transform your content into engaging newsletters that drive results.
              </p>

              <Card className="shadow-elegant mb-8">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Schedule a Free Consultation</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Pick a time that works for you and we'll walk you through everything.
                  </p>
                  <a
                    href="https://calendly.com/stephencolwell"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-calendly"
                  >
                    <Button size="lg" className="text-lg gap-2">
                      <ExternalLink className="w-5 h-5" />
                      Book on Calendly
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-8 text-center">
                  <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Support Inquiries</h3>
                  <p className="text-muted-foreground text-lg mb-2">Steve Colwell</p>
                  <a
                    href="tel:+19492545986"
                    className="text-primary hover:text-primary/80 font-medium transition-colors text-2xl"
                    data-testid="link-phone"
                  >
                    949-254-5986
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
