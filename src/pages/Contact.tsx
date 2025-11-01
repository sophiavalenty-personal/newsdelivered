import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  preferredContact: z.enum(["phone", "email"], { required_error: "Please select your preferred contact method" }),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email").optional(),
  company: z.string().optional(),
  goals: z.array(z.string()).min(1, "Please select at least one goal"),
  comments: z.string().optional(),
}).refine((data) => {
  if (data.preferredContact === "phone" && !data.phone) {
    return false;
  }
  if (data.preferredContact === "email" && !data.email) {
    return false;
  }
  return true;
}, {
  message: "Please provide your preferred contact information",
  path: ["preferredContact"],
});

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      preferredContact: undefined,
      phone: "",
      email: "",
      company: "",
      goals: [],
      comments: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    console.log(values);
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Get Started
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Real people on the other side of your screen are ready to help you today
            </p>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center">
                <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Call or Text Sales & Support:</h3>
                <a 
                  href="tel:+15551234567"
                  className="text-primary hover:text-primary/80 font-medium transition-colors text-2xl"
                >
                  +1 (555) 123-4567
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