import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Channels from "./pages/Channels";
import ChannelSources from "./pages/ChannelSources";
import RSSFeed from "./pages/RSSFeed";
import Tools from "./pages/Tools";
import ClearCardio from "./pages/ClearCardio";
import Demo from "./pages/Demo";
import Example from "./pages/Example";
import TrumpAccounts from "./pages/blog/TrumpAccounts";
import RmdInheritedIra from "./pages/blog/RmdInheritedIra";
import WildfireCasualtyLoss from "./pages/blog/WildfireCasualtyLoss";
import FinancialMistakes50s from "./pages/blog/FinancialMistakes50s";
import RothVsTraditionalIra from "./pages/blog/RothVsTraditionalIra";
import InsuranceFoundation from "./pages/blog/InsuranceFoundation";
import MaximizeTaxRefund from "./pages/blog/MaximizeTaxRefund";
import NewYearsResolutions from "./pages/blog/NewYearsResolutions";
// import Pricing from "./pages/Pricing"; // SHELVED — uncomment to restore
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/channels/:channelId" element={<ChannelSources />} />
          <Route path="/channels/:channelId/sources/:sourceId" element={<RSSFeed />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/clearcardio" element={<ClearCardio />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/example/harikthompsoncpas/blog/trump-accounts" element={<TrumpAccounts />} />
          <Route path="/example/harikthompsoncpas/blog/rmd-inherited-ira" element={<RmdInheritedIra />} />
          <Route path="/example/harikthompsoncpas/blog/wildfire-casualty-loss" element={<WildfireCasualtyLoss />} />
          <Route path="/example/hegland/blog/financial-mistakes-50s" element={<FinancialMistakes50s />} />
          <Route path="/example/hegland/blog/roth-vs-traditional-ira" element={<RothVsTraditionalIra />} />
          <Route path="/example/hegland/blog/insurance-foundation" element={<InsuranceFoundation />} />
          <Route path="/example/derickgant/blog/maximize-tax-refund" element={<MaximizeTaxRefund />} />
          <Route path="/example/derickgant/blog/new-years-resolutions" element={<NewYearsResolutions />} />
          <Route path="/example/:clientId" element={<Example />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}{/* SHELVED — uncomment to restore */}
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
