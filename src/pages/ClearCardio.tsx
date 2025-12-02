import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClearCardio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="w-full">
          
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
