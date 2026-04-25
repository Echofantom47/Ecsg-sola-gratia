import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default PageLayout;
