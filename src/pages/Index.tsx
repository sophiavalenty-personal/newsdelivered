import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import ServicesOverview from "@/components/ServicesOverview";
import Proof from "@/components/Proof";
import Pricing from "@/components/Pricing";
import EndToEndSolution from "@/components/EndToEndSolution";
import HomeFAQ from "@/components/HomeFAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ServicesOverview />
        <Proof />
        <Pricing />
        <EndToEndSolution />
        <HomeFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
