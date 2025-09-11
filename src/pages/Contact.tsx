import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const formSchema = z.object({
  contact: z.string().min(1, "Phone or email is required"),
  company: z.string().optional(),
  niche: z.string().min(1, "Please tell us about your company/niche"),
  goal: z.string().min(1, "Please tell us about your main goal/KPI"),
  comments: z.string().optional(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact: "",
      company: "",
      niche: "",
      goal: "",
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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-32">
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
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real people on the other side of your screen are ready to help you today
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone or Email *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@company.com or +1 (555) 123-4567" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company name" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="niche"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What's your company / niche? *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your business, industry, or niche..."
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What's your goal / main KPI you want to improve? *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="e.g., Increase open rates, grow subscriber list, boost revenue..."
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Other comments (optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Anything else you'd like us to know..."
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email Us Directly</h3>
                  <p className="text-muted-foreground mb-4">
                    Prefer email? Send us a message directly:
                  </p>
                  <a 
                    href="mailto:experts@newsdelivered.com"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    experts@newsdelivered.com
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-center">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                        1
                      </div>
                      <p className="text-muted-foreground">
                        We'll review your information and goals
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                        2
                      </div>
                      <p className="text-muted-foreground">
                        Our expert will reach out within 24 hours
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                        3
                      </div>
                      <p className="text-muted-foreground">
                        We'll create a custom strategy for your needs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;