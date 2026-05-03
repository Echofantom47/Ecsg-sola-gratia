import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ProgramsSection from "@/components/ProgramsSection";
import VerseHighlight from "@/components/VerseHighlight";
import PosterFeature from "@/components/PosterFeature";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ResultsSection />
      <AboutSection />
      <ValuesSection />
      <ProgramsSection />
      <VerseHighlight />
      <PosterFeature />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
