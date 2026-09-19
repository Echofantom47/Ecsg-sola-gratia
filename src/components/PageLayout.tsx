import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const PageLayout = ({ children, flush = false }: { children: React.ReactNode; flush?: boolean }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className={flush ? "" : "pt-20"}>{children}</div>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default PageLayout;
