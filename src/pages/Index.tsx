import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentStrategy from "@/components/ContentStrategy";
import ProvenFormula from "@/components/ProvenFormula";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
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
        <ContentStrategy />
        <ProvenFormula />
        <HowItWorks />
        <SocialProof />
        <EndToEndSolution />
        <HomeFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
