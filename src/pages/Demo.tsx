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
    brandColor: "#b91c1c",
    newsletters: [
      {
        id: "1",
        title: "Heart Disease Risk Assessment",
        description: "Educational newsletter about cardiac CT scanning and soft plaque detection",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Heart Disease Risk Assessment - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#f7f7f7;font-family:Arial, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f7f7f7">A high-stakes question: Is your heart truly safe? Why traditional tests miss the biggest risk factor.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f7f7f7"><tbody><tr><td align="center" style="padding:30px 0"><table border="0" cellPadding="0" cellSpacing="0" width="600" class="wrapper" style="background-color:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,0.05);max-width:100%"><tbody><tr><td align="center" style="padding:20px;background-color:#000000;border-bottom:2px solid #e5e7eb"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio" width="220" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td align="center" style="background-color:#b91c1c;padding:40px 30px"><h1 class="mobile-header" style="color:#ffffff;font-family:'Helvetica Neue', Arial, sans-serif;font-size:30px;font-weight:700;margin:0;letter-spacing:0.5px;line-height:1.2">The Invisible Threat: 9 Out of 10 Heart Attacks Start Here</h1><p style="color:#fecaca;font-family:Arial, sans-serif;font-size:15px;font-weight:500;letter-spacing:1px;margin-top:15px;margin-bottom:0">DON'T BE ONE OF THEM!</p></td></tr><tr><td class="mobile-padding" style="padding:40px 50px;background-color:#ffffff"><p class="mobile-text" style="color:#1f2937;font-size:17px;line-height:28px;margin-bottom:5px">Hi,</p><p class="mobile-text" style="color:#1f2937;font-size:17px;line-height:28px;margin-bottom:5px">I'm Dr. John Osborne, a cardiologist with more than 3 decades dedicated to the prevention and treatment of cardiovascular disease. If your routine physicals leave you with more questions than answers about your true heart risk then it's time to seek a higher degree of clarity.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="border-bottom:1px solid #e5e7eb;padding-bottom:20px;margin-bottom:20px"></td></tr></tbody></table><h2 style="color:#b91c1c;font-family:'Helvetica Neue', Arial, sans-serif;font-size:22px;font-weight:700;margin-top:30px;margin-bottom:15px">Why Conventional Tests Fall Short</h2><p class="mobile-text" style="color:#1f2937;font-size:17px;line-height:28px">The key risk factor is not blockage, but plaque stability. Traditional tests are designed to find severe blockages, missing the majority of soft, unstable plaque - the kind that ruptures without warning and causes a sudden event.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:25px 0"><tbody><tr><td style="background-color:#fef2f2;padding:20px;border:1px solid #fca5a5;border-radius:4px"><p style="color:#991b1b;font-size:16px;line-height:24px;margin:0;font-weight:600">ClearCardio utilizes Cardiac CT Angiography (CCTA) and specialized AI to quantify and locate soft plaque, providing a precise roadmap for personalized prevention - years ahead of symptoms.</p></td></tr></tbody></table><h2 style="color:#0ea5e9;font-family:'Helvetica Neue', Arial, sans-serif;font-size:22px;font-weight:700;margin-top:30px;margin-bottom:15px">The Benefits of ClearCardio's Life-Saving Heart Scan</h2><ul style="color:#1f2937;font-size:17px;line-height:28px;padding-left:20px"><li style="margin-bottom:12px"><b>Visible Clarity:</b> Get a 3D, high-resolution view of your coronary arteries, removing all guesswork.</li><li style="margin-bottom:12px"><b>Actionable Data:</b> AI analysis translates images into a quantified risk score and a definitive treatment plan.</li><li style="margin-bottom:12px"><b>Future-Proofing:</b> Find and stabilize disease now, ensuring you stay ahead of the curve.</li></ul><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:35px;background-color:#f7f7f7;border-top:2px solid #e5e7eb;border-bottom:2px solid #e5e7eb"><tbody><tr><td style="padding:25px"><h3 style="color:#1f2937;font-family:Arial, sans-serif;font-size:18px;font-weight:700;margin:0 0 15px 0">Should You Get Scanned?</h3><p style="color:#4b5563;font-size:16px;line-height:26px;margin-bottom:15px">The scan is essential if you have:</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="padding-bottom:10px;padding-left:10px"><p style="color:#4b5563;font-size:16px;line-height:24px;margin:0">•  A history of heart disease in your immediate family</p></td></tr><tr><td style="padding-bottom:10px;padding-left:10px"><p style="color:#4b5563;font-size:16px;line-height:24px;margin:0">•  Underlying conditions like high LDL, high blood pressure, or diabetes</p></td></tr><tr><td style="padding-left:10px"><p style="color:#4b5563;font-size:16px;line-height:24px;margin:0">•  A desire to stop relying on statistical risk and see your actual arterial health</p></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:40px"><tbody><tr><td align="center"><a href="https://clearcardio.com" style="background-color:#0ea5e9;color:#ffffff;padding:18px 36px;text-decoration:none;font-weight:bold;font-size:18px;border-radius:8px;display:inline-block;text-transform:uppercase;letter-spacing:0.5px;box-shadow:0 4px 10px rgba(14, 165, 233, 0.4)">Assess Your Risk: Schedule Consultation</a></td></tr></tbody></table></td></tr><tr><td style="background-color:#374151;padding:30px;color:#d1d5db;font-size:12px;line-height:18px;text-align:center"><p style="margin-bottom:10px;color:#ffffff;font-size:15px;font-weight:600">Your Health, Your Future, Your Clarity.</p>In partnership with ClearCardio™ and Dr. John Osborne, M.D., Ph.D.<br/>© 2025 ClearCardio. All rights reserved. | <a href="#" style="color:#9ca3af;text-decoration:underline">Unsubscribe</a></td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 600px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 20px !important; }
          .mobile-text { font-size: 16px !important; line-height: 24px !important; }
          .mobile-header { font-size: 24px !important; line-height: 30px !important; }
        }
        
        @media only screen and (max-width: 375px) {
          table { max-width: 100% !important; width: 100% !important; }
          img { max-width: 100% !important; height: auto !important; }
          td { word-wrap: break-word !important; }
          .wrapper { width: 100% !important; }
        }
      </style></div>
</body>
</html>`,
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
                variant="default"
                size="icon"
                onClick={goToPrevious}
                className="shrink-0 h-12 w-12 rounded-full shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="flex-1 flex justify-center">
                <div
                  className={cn(
                    "bg-background rounded-lg shadow-xl border border-border overflow-hidden transition-all duration-300",
                    viewMode === "desktop" ? "w-full max-w-3xl" : "w-[375px]"
                  )}
                >
                  <div className="bg-muted/50 px-4 py-2 border-b border-border">
                    <span className="text-xs text-muted-foreground">{currentNewsletter.title}</span>
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
                variant="default"
                size="icon"
                onClick={goToNext}
                className="shrink-0 h-12 w-12 rounded-full shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
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
