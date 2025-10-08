import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const HomeFAQ = () => {
  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most clients are up and running within 2 weeks. We'll schedule a strategy call, develop your content plan, and have your first newsletter ready for review in no time."
    },
    {
      question: "What if we already have a newsletter?",
      answer: "Perfect! We'll audit your current newsletter, identify opportunities for improvement, and implement our proven 80/20 formula to boost engagement and results."
    },
    {
      question: "How do you measure success?",
      answer: "We track key metrics including open rates, click-through rates, subscriber growth, and conversion rates. You'll receive detailed monthly reports with actionable insights."
    },
    {
      question: "What makes your approach different?",
      answer: "Our 80/20 content formula focuses on entertaining and informing first, selling second. This builds trust and engagement, leading to higher conversions and customer loyalty."
    },
    {
      question: "Can we maintain our brand voice?",
      answer: "Absolutely! We work closely with you to understand your brand, tone, and messaging. Every newsletter is customized to reflect your unique voice and values."
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Common Questions
              </Badge>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Frequently Asked Questions
              </motion.h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl shadow-elegant p-8 border border-primary/10"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;