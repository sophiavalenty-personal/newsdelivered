import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Expectations from "@/components/Expectations";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Expectations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
