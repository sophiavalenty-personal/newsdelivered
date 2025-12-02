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
          
          <div className="w-full">
            <iframe 
              src="https://newsdelivered-clearcardio.lovable.app/" 
              width="100%" 
              height="800px" 
              frameBorder="0"
              style={{ border: 'none' }}
              title="ClearCardio Newsletter Gallery"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClearCardio;
