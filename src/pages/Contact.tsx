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
  preferredContact: z.enum(["phone", "email"], {
    required_error: "Please select your preferred contact method"
  }),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email").optional(),
  company: z.string().optional(),
  goals: z.array(z.string()).min(1, "Please select at least one goal"),
  comments: z.string().optional()
}).refine(data => {
  if (data.preferredContact === "phone" && !data.phone) {
    return false;
  }
  if (data.preferredContact === "email" && !data.email) {
    return false;
  }
  return true;
}, {
  message: "Please provide your preferred contact information",
  path: ["preferredContact"]
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
      comments: ""
    }
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours."
    });
    console.log(values);
  }
  return <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-background to-muted py-32">
        <div className="container mx-auto px-4">
        <ScrollReveal>
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Get Started
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">Experts Are Ready To Help You Today</p>
            
            <Card className="shadow-elegant mb-8">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email us directly</h3>
                <a href="mailto:experts@newsdelivered.com" className="text-primary hover:text-primary/80 font-medium transition-colors text-lg">
                  experts@newsdelivered.com
                </a>
                <div className="flex items-center justify-center my-6">
                  <div className="border-t border-border w-20"></div>
                  <span className="mx-4 text-muted-foreground font-medium">or</span>
                  <div className="border-t border-border w-20"></div>
                </div>
                
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-500">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({
                      field
                    }) => <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="preferredContact" render={({
                      field
                    }) => <FormItem className="space-y-3">
                          <FormLabel>Preferred contact method *</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-row space-x-6">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="phone" id="phone" />
                                <Label htmlFor="phone">Phone</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="email" id="email" />
                                <Label htmlFor="email">Email</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="phone" render={({
                        field
                      }) => <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />

                      <FormField control={form.control} name="email" render={({
                        field
                      }) => <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@company.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-4">Optional</h4>
                      
                      <FormField control={form.control} name="company" render={({
                        field
                      }) => <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <div className="border-t pt-6">
                      <FormField control={form.control} name="goals" render={() => <FormItem>
                            <div className="mb-4">
                              <FormLabel className="text-base">Goals *</FormLabel>
                            </div>
                            <div className="space-y-3">
                              {[{
                            id: "existing-newsletter",
                            label: "I have a newsletter, I want help getting more out of it"
                          }, {
                            id: "new-newsletter",
                            label: "I don't have a newsletter but I need one"
                          }].map(item => <FormField key={item.id} control={form.control} name="goals" render={({
                            field
                          }) => {
                            return <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                          <Checkbox checked={field.value?.includes(item.id)} onCheckedChange={checked => {
                                  return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter(value => value !== item.id));
                                }} />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal leading-relaxed">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>;
                          }} />)}
                            </div>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <FormField control={form.control} name="comments" render={({
                      field
                    }) => <FormItem>
                          <FormLabel>Anything else you'd like us to know</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us more about your specific needs, challenges, or questions..." className="min-h-[100px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
      </div>
      <Footer />
    </div>;
};
export default Contact;