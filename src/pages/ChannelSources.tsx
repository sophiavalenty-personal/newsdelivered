import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { channelSources } from "@/data/channelSources";
import { fetchAndParseRSS, RSSItem } from "@/utils/rssParser";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";

const ChannelSources = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const channelData = channelId ? channelSources[channelId] : null;

  // Fetch all feeds with React Query for caching
  const { data: sourceFeeds = {}, isLoading: loading } = useQuery({
    queryKey: ['channel-feeds', channelId],
    queryFn: async () => {
      if (!channelData?.sources.length) {
        return {};
      }

      const feeds: Record<string, RSSItem[]> = {};

      await Promise.all(
        channelData.sources.map(async (source) => {
          try {
            const feed = await fetchAndParseRSS(source.url);
            feeds[source.id] = feed.items.slice(0, 3);
          } catch (error) {
            console.error(`Failed to load feed for ${source.name}:`, error);
            feeds[source.id] = [];
          }
        })
      );

      return feeds;
    },
    enabled: !!channelData?.sources.length,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
    retry: 1,
  });

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

              {/* News Grid */}
              {channelData.sources.length > 0 ? (
                loading ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">Loading articles...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {channelData.sources.map((source, sourceIndex) => (
                      <div key={source.id} className="space-y-6">
                        <ScrollReveal direction="up" delay={sourceIndex * 0.1}>
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-foreground">{source.name}</h2>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigate(`/channels/${channelId}/sources/${source.id}`)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              View All
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </ScrollReveal>

                        {sourceFeeds[source.id]?.length > 0 ? (
                          <div className="space-y-4">
                            {sourceFeeds[source.id].map((item, itemIndex) => (
                              <ScrollReveal key={itemIndex} direction="up" delay={sourceIndex * 0.1 + itemIndex * 0.05}>
                                <motion.div
                                  whileHover={{ y: -4 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Card 
                                    className="bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-300 cursor-pointer overflow-hidden"
                                    onClick={() => window.open(item.link, '_blank')}
                                  >
                                    <CardContent className="p-0">
                                      <div className="flex gap-4 p-4">
                                        {item.image && (
                                          <div className="flex-shrink-0">
                                            <img 
                                              src={item.image} 
                                              alt={item.title}
                                              className="w-[120px] h-auto object-contain rounded"
                                              onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                              }}
                                            />
                                          </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                                            {item.title}
                                          </h3>
                                          {item.pubDate && (
                                            <div className="flex items-center text-xs text-muted-foreground">
                                              <Calendar className="w-3 h-3 mr-1" />
                                              {new Date(item.pubDate).toLocaleDateString()}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </motion.div>
                              </ScrollReveal>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-center py-8">
                            No articles available from this source.
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )
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

              {/* Channel Navigation */}
              {channelData.sources.length > 0 && !loading && (
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="mt-20 pt-12 border-t border-border/50">
                    <h2 className="text-3xl font-light text-foreground mb-8 text-center">
                      Explore Other Channels
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.values(channelSources)
                        .filter(channel => channel.id !== channelId)
                        .map((channel, index) => (
                          <motion.div
                            key={channel.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -4 }}
                          >
                            <Card 
                              className="bg-white/80 backdrop-blur-sm border-0 shadow-subtle hover:shadow-elegant transition-all duration-300 cursor-pointer h-full"
                              onClick={() => navigate(`/channels/${channel.id}`)}
                            >
                              <CardHeader>
                                <CardTitle className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                                  {channel.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                  {channel.description}
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </ScrollReveal>
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
