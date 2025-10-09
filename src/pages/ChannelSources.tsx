import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { channelSources } from "@/data/channelSources";

const ChannelSources = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();
  
  const channelData = channelId ? channelSources[channelId] : null;

  if (!channelData) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-semibold text-foreground mb-4">Channel Not Found</h1>
              <Button onClick={() => navigate("/channels")}>Back to Channels</Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-elegant">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="mb-12">
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/channels")}
                    className="mb-6"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Channels
                  </Button>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-light text-foreground mb-4"
                  >
                    {channelData.title}
                  </motion.h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "4rem" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-0.5 bg-primary mx-0 rounded-full mb-6"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-muted-foreground"
                  >
                    {channelData.description}
                  </motion.p>
                </div>
              </ScrollReveal>

              {/* Sources List */}
              {channelData.sources.length > 0 ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">RSS Sources</h2>
                  {channelData.sources.map((source, index) => (
                    <ScrollReveal key={source.id} direction="up" delay={index * 0.1}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-300 cursor-pointer"
                          onClick={() => navigate(`/channels/${channelId}/sources/${source.id}`)}
                        >
                          <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-foreground flex items-center justify-between">
                              {source.name}
                              <ExternalLink className="w-5 h-5 text-muted-foreground" />
                            </CardTitle>
                            {source.description && (
                              <CardDescription className="text-base">
                                {source.description}
                              </CardDescription>
                            )}
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground break-all">{source.url}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg mb-6">
                    No RSS sources configured for this channel yet.
                  </p>
                  <Button onClick={() => navigate("/contact")}>
                    Request Content Setup
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChannelSources;
