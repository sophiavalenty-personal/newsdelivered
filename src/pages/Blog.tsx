import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/scroll-reveal";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Way
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert advice on creating newsletters that your audience actually wants to read
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Placeholder blog posts */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-muted-foreground">Coming Soon</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Blog Post Title {i}
                    </CardTitle>
                    <CardDescription>
                      This is a preview of upcoming content about newsletter best practices and engagement strategies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Coming Soon</span>
                      <span>5 min read</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <div className="bg-muted/50 rounded-lg p-12">
                <h2 className="text-2xl font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Be the first to know when we publish new insights about newsletter marketing and audience engagement.
                </p>
                <Button size="lg">
                  Get Notified
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;