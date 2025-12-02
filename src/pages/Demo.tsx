import { useState } from "react";
import { useParams } from "react-router-dom";
import { Monitor, Smartphone, Expand, Grid, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Demo data structure - will be populated per client
interface NewsletterSample {
  id: string;
  title: string;
  description: string;
  htmlContent: string;
  thumbnail?: string;
}

interface ClientDemo {
  clientName: string;
  brandColor?: string;
  newsletters: NewsletterSample[];
}

// Placeholder data - this will be replaced with actual client data
const clientDemos: Record<string, ClientDemo> = {
  clearcardio: {
    clientName: "ClearCardio",
    brandColor: "#3b82f6",
    newsletters: [
      {
        id: "1",
        title: "Welcome Newsletter",
        description: "Introduction email for new subscribers",
        htmlContent: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; text-align: center;">
          <h1 style="color: #3b82f6;">Newsletter Sample 1</h1>
          <p style="color: #666; font-size: 18px;">Upload your HTML newsletter files to see them here.</p>
          <div style="background: #f0f9ff; padding: 30px; border-radius: 8px; margin-top: 20px;">
            <p style="color: #0369a1;">This is a placeholder for your newsletter content.</p>
          </div>
        </div>`,
      },
      {
        id: "2",
        title: "Weekly Digest",
        description: "Weekly content roundup template",
        htmlContent: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; text-align: center;">
          <h1 style="color: #3b82f6;">Newsletter Sample 2</h1>
          <p style="color: #666; font-size: 18px;">Weekly digest placeholder content.</p>
          <div style="background: #fef3c7; padding: 30px; border-radius: 8px; margin-top: 20px;">
            <p style="color: #92400e;">Your weekly digest content will appear here.</p>
          </div>
        </div>`,
      },
      {
        id: "3",
        title: "Promotional Email",
        description: "Special offer announcement template",
        htmlContent: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; text-align: center;">
          <h1 style="color: #3b82f6;">Newsletter Sample 3</h1>
          <p style="color: #666; font-size: 18px;">Promotional email placeholder.</p>
          <div style="background: #fce7f3; padding: 30px; border-radius: 8px; margin-top: 20px;">
            <p style="color: #9d174d;">Your promotional content will appear here.</p>
          </div>
        </div>`,
      },
    ],
  },
};

const Demo = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [showGallery, setShowGallery] = useState(false);

  const clientData = clientId ? clientDemos[clientId.toLowerCase()] : null;

  if (!clientData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Demo Not Found</h1>
          <p className="text-muted-foreground">The requested demo gallery does not exist.</p>
        </div>
      </div>
    );
  }

  const currentNewsletter = clientData.newsletters[selectedIndex];
  const totalSamples = clientData.newsletters.length;

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? totalSamples - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === totalSamples - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">{clientData.clientName}</h1>
              <p className="text-sm text-muted-foreground">Newsletter Gallery</p>
            </div>
            <div className="flex items-center gap-2">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-8 px-3",
                    viewMode === "desktop" && "bg-background shadow-sm"
                  )}
                  onClick={() => setViewMode("desktop")}
                >
                  <Monitor className="h-4 w-4 mr-1" />
                  Desktop
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-8 px-3",
                    viewMode === "mobile" && "bg-background shadow-sm"
                  )}
                  onClick={() => setViewMode("mobile")}
                >
                  <Smartphone className="h-4 w-4 mr-1" />
                  Mobile
                </Button>
              </div>

              {/* Gallery Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowGallery(!showGallery)}
                className={cn(showGallery && "bg-primary text-primary-foreground")}
              >
                <Grid className="h-4 w-4 mr-1" />
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {showGallery ? (
          /* Gallery View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientData.newsletters.map((newsletter, index) => (
              <Card
                key={newsletter.id}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-lg",
                  selectedIndex === index && "ring-2 ring-primary"
                )}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowGallery(false);
                }}
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-muted overflow-hidden rounded-t-lg">
                    <iframe
                      srcDoc={newsletter.htmlContent}
                      className="w-full h-full pointer-events-none"
                      style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%" }}
                      title={newsletter.title}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{newsletter.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{newsletter.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Single Preview View */
          <div className="max-w-5xl mx-auto">
            {/* Template Info */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{currentNewsletter.title}</h2>
                <p className="text-sm text-muted-foreground">{currentNewsletter.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {selectedIndex + 1} of {totalSamples}
                </span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Expand className="h-4 w-4 mr-1" />
                      View Full
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[90vh] p-0">
                    <iframe
                      srcDoc={currentNewsletter.htmlContent}
                      className="w-full h-full"
                      title={currentNewsletter.title}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Preview Frame */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="shrink-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex-1 flex justify-center">
                <div
                  className={cn(
                    "bg-background rounded-lg shadow-xl border border-border overflow-hidden transition-all duration-300",
                    viewMode === "desktop" ? "w-full max-w-3xl" : "w-[375px]"
                  )}
                >
                  <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-muted-foreground">{currentNewsletter.title}</span>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "overflow-auto",
                      viewMode === "desktop" ? "h-[600px]" : "h-[667px]"
                    )}
                  >
                    <iframe
                      srcDoc={currentNewsletter.htmlContent}
                      className="w-full h-full"
                      title={currentNewsletter.title}
                    />
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="shrink-0"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {clientData.newsletters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    selectedIndex === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
