import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import GaleriePage from "./pages/GaleriePage";
import AProposPage from "./pages/AProposPage";
import ProgrammesPage from "./pages/ProgrammesPage";
import ContactPage from "./pages/ContactPage";
import VersetsPage from "./pages/VersetsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LegacyGithubRedirect = () => {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/^\/Ecsg-sola-gratia/, "") || "/";

  return <Navigate to={normalizedPath} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/Ecsg-sola-gratia/*" element={<LegacyGithubRedirect />} />
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/galerie" element={<GaleriePage />} />
          <Route path="/versets" element={<VersetsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
