import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainSolution from "@/components/PainSolution";
import HowItWorks from "@/components/HowItWorks";
// import Pricing from "@/components/Pricing"; // SHELVED — uncomment to restore
import ServicesOverview from "@/components/ServicesOverview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <HowItWorks />
        {/* <Pricing /> */}{/* SHELVED — uncomment to restore */}
        <ServicesOverview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
