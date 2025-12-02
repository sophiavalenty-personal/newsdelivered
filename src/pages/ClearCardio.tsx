import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClearCardio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            ClearCardio Newsletter Gallery
          </h1>
          
          <div className="w-full flex justify-center">
            {/* Iframe placeholder - will be replaced with actual embed code */}
            <div className="w-full max-w-4xl h-[600px] bg-muted rounded-lg flex items-center justify-center border border-border">
              <p className="text-muted-foreground">Newsletter gallery iframe will be added here</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClearCardio;
