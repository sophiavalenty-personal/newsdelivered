import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Target, TrendingUp, DollarSign, ArrowDown, Handshake, Heart, BarChart3, Check } from "lucide-react";
import { Link } from "react-router-dom";
import newsletterProblemImg from "@/assets/newsletter-problem.jpg";
const PainSolution = () => {
  const strategies = [{
    icon: Target,
    title: "Entertain, Inform, Empower",
    description: "Create content that resonates and provides real value",
    highlighted: false
  }, {
    icon: DollarSign,
    title: "Drive Sales and Revenue",
    description: "Convert your audience into loyal customers",
    highlighted: true
  }, {
    icon: TrendingUp,
    title: "Build Brand Authority",
    description: "Establish yourself as the trusted expert in your field",
    highlighted: false
  }];
  return <section className="py-24 bg-muted/30 relative">
      {/* Geometric separator from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white transform -skew-y-1 origin-top-left"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            {/* PAIN Section - At the Top */}
            <div className="mb-16">
              <motion.div className="mb-12" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                  The Newsletter Problem Most Brands Face
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                  {/* Left side - Image */}
                  <motion.div initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.2
                }} className="relative">
                    <img src={newsletterProblemImg} alt="Newsletter engagement challenges" className="rounded-lg shadow-lg w-full" />
                  </motion.div>

                  {/* Right side - Content */}
                  <motion.div initial={{
                  opacity: 0,
                  x: 20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.4
                }} className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Big Vision? Small Team? 
Not Enough Time?</h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      You have the subscribers but click rates are well under 5%. Your emails feel too salesy, 
                      and you're stuck in the spam folder. Meanwhile, your team lacks bandwidth to create the 
                      engaging, informative content that builds loyalty.
                    </p>
                    
                    <div className="bg-muted/50 p-6 rounded-lg border border-border">
                      <p className="text-base text-muted-foreground">
                        Sound familiar? <span className="bg-primary/20 text-primary font-semibold px-2 py-1 rounded">80% of marketers see email as a top engagement channel</span>, yet most struggle with non-promotional content that entertains and informs their audience, keeping them coming back for more.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Arrow pointing down */}
            <div className="text-center mb-16">
              <motion.div className="flex justify-center my-10" initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}>
                <ArrowDown className="w-12 h-12 text-primary" strokeWidth={2.5} />
              </motion.div>
                
              {/* SOLUTION Header */}
              <motion.div className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 rounded-2xl max-w-4xl mx-auto shadow-glow mb-16" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.0
            }}>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Solution</p>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </motion.div>

              {/* Full Service Partnership */}
              <motion.div className="mb-12" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.2
            }}>
                <Card className="p-8 md:p-10 shadow-elegant max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Handshake className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                      Full-Service Partnership Offering...
                    </h3>
                    <div className="mb-6 max-w-2xl mx-auto space-y-4">
                      {/* Item 1 */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-foreground">
                          Custom revenue-boosting email strategy
                        </p>
                      </div>
                      
                      {/* Item 2 */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-foreground">
                          Hyper engaging content creation
                        </p>
                      </div>
                      
                      {/* Item 3 */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-foreground">
                          Expert campaign deployment
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic max-w-3xl mx-auto">
                      We become your email team — designing, writing, and managing campaigns while keeping you fully in the loop. We handle the heavy lifting.
                    </p>
                    <div className="text-center">
                      <Link to="/services" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all hover:underline">
                        Learn More <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* How We Do It - Title */}
              <motion.h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.4
            }}>
                How We Do It
              </motion.h3>

              {/* Two Information Cards */}
              <motion.div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.6
            }}>
                {/* Entertainment-First Strategy Card */}
                <Card className="shadow-elegant border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">Entertainment-First Strategy</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          We follow the proven 80/20 rule: 80% of your newsletter delivers entertaining, informative, 
                          and valuable content that builds trust and keeps readers engaged.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          The remaining 20% features strategic brand promotion that feels natural and drives conversions 
                          without overwhelming your audience.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results-Driven Expertise Card */}
                <Card className="shadow-elegant border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3">Results-Driven Expertise</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Our approach is backed by data and proven strategies. We constantly monitor engagement metrics, 
                          click-through rates, and conversion performance.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          Every newsletter is optimized to deliver measurable results: higher open rates, increased engagement, 
                          and more revenue for your business.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Your Newsletter Should - Heading */}
              <motion.h2 className="text-3xl font-bold mb-12 text-center" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.8
            }}>
                Your Newsletter Should
              </motion.h2>
            </div>
            
            {/* The 3 Strategy Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {strategies.map((strategy, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 2.2 + index * 0.2
            }}>
                  <Card className={`h-full text-center shadow-elegant border-primary/10 bg-gradient-to-br from-background to-background/50 hover:shadow-glow transition-all duration-300 ${strategy.highlighted ? 'ring-2 ring-primary/20 shadow-glow scale-105' : ''}`}>
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-6 ${strategy.highlighted ? 'from-primary to-primary/90 shadow-lg' : 'from-primary to-primary/80'}`}>
                        <strategy.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className={`text-xl font-bold mb-4 leading-tight ${strategy.highlighted ? 'text-primary' : 'text-foreground'}`}>
                        {strategy.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {strategy.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Geometric separator to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
    </section>;
};
export default PainSolution;