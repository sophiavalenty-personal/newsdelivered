import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsletterFavorite from "@/components/NewsletterFavorite";
import ContentDoneRight from "@/components/ContentDoneRight";
import EmailTransformation from "@/components/EmailTransformation";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/Proof";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
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
        <NewsletterFavorite />
        <Problem />
        <Solution />
        <ContentDoneRight />
        <EmailTransformation />
        <HowItWorks />
        <Proof />
        <Pricing />
        <CTA />
        <Expertise />
        <Expectations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
