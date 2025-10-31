import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Target, Wrench, BarChart, Code, Send, Shield, TrendingUp, ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const steps = [{
    number: 1,
    icon: Search,
    title: "Current Strategy Audit",
    description: "Our team will assess your overall marketing strategy and determine how email can increase your bottom line."
  }, {
    number: 2,
    icon: Target,
    title: "Develop Ideal Marketing Strategy",
    description: "We'll build out your content calendar and create a comprehensive email strategy tailored to your business goals."
  }, {
    number: 3,
    icon: Wrench,
    title: "We'll put it all together",
    description: "Done for you:",
    subItems: [{
      icon: Code,
      title: "Templates",
      description: "We're HTML experts so you don't have to be. Beautiful, responsive email templates that work across all devices."
    }, {
      icon: Send,
      title: "Sending",
      description: "We'll send the email from your ESP / social platforms. Sit back while we handle the technical details."
    }]
  }, {
    number: 4,
    icon: BarChart,
    title: "We'll make sure it's working and keep you posted",
    description: null,
    subItems: [{
      icon: Shield,
      title: "Delivery - Email Authentication",
      description: "Make sure you're playing by all the Email Authentication Rules. We handle SPF, DKIM, DMARC, and more."
    }, {
      icon: TrendingUp,
      title: "Performance",
      description: "Make sure your email is working for you. We'll communicate often and provide detailed reports to keep you in the know about how your strategy is improving and providing value to your business."
    }]
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
      
      <Footer />
    </div>;
};
export default Services;