import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { channelSources } from "@/data/channelSources";
import { fetchAndParseRSS, RSSFeed as RSSFeedType } from "@/utils/rssParser";
import { Skeleton } from "@/components/ui/skeleton";

const RSSFeed = () => {
  const { channelId, sourceId } = useParams<{ channelId: string; sourceId: string }>();
  const navigate = useNavigate();
  const [feed, setFeed] = useState<RSSFeedType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const channelData = channelId ? channelSources[channelId] : null;
  const source = channelData?.sources.find(s => s.id === sourceId);

  useEffect(() => {
    if (source) {
      fetchAndParseRSS(source.url)
        .then(data => {
          setFeed(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [source]);

  if (!channelData || !source) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-semibold text-foreground mb-4">Source Not Found</h1>
              <Button onClick={() => navigate("/channels")}>Back to Channels</Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-elegant min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="mb-12">
                  <Button
                    variant="ghost"
                    onClick={() => navigate(`/channels/${channelId}`)}
                    className="mb-6"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to {channelData.title}
                  </Button>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-light text-foreground mb-4"
                  >
                    {source.name}
                  </motion.h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "4rem" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-0.5 bg-primary mx-0 rounded-full mb-6"
                  />
                  {source.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-xl text-muted-foreground"
                    >
                      {source.description}
                    </motion.p>
                  )}
                </div>
              </ScrollReveal>

              {/* Feed Content */}
              {loading && (
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-white/80 backdrop-blur-sm border-0 shadow-subtle">
                      <CardHeader>
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/4" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-2/3" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {error && (
                <Card className="bg-destructive/10 border-destructive/20">
                  <CardContent className="pt-6">
                    <p className="text-destructive">Failed to load RSS feed: {error}</p>
                  </CardContent>
                </Card>
              )}

              {!loading && !error && feed && (
                <div className="space-y-8">
                  {feed.items.map((item, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-300 overflow-hidden">
                          {item.image && (
                            <div className="flex justify-center p-4">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-[180px] h-auto object-contain"
                              />
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-start justify-between gap-2"
                              >
                                <span>{item.title}</span>
                                <ExternalLink className="w-5 h-5 flex-shrink-0 mt-1" />
                              </a>
                            </CardTitle>
                            {item.pubDate && (
                              <CardDescription className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {formatDate(item.pubDate)}
                              </CardDescription>
                            )}
                          </CardHeader>
                          <CardContent>
                            <div 
                              className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                              dangerouslySetInnerHTML={{ 
                                __html: item.description.substring(0, 400) + (item.description.length > 400 ? '...' : '')
                              }}
                            />
                            <Button 
                              variant="link" 
                              className="mt-4 p-0"
                              onClick={() => window.open(item.link, '_blank')}
                            >
                              Read more <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  ))}
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

export default RSSFeed;
