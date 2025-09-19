import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentStrategy from "@/components/ContentStrategy";
import EndToEndSolution from "@/components/EndToEndSolution";
import ProvenFormula from "@/components/ProvenFormula";
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
        <EndToEndSolution />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
