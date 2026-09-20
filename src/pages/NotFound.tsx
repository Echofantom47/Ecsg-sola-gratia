import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="max-w-xl text-center">
        <p className="section-label text-primary">Erreur 404</p>
        <h1 className="mt-5 font-display text-5xl font-semibold md:text-7xl">Cette page n’existe pas.</h1>
        <p className="mb-8 mt-5 text-lg text-muted-foreground">Revenez à l’accueil ou utilisez le menu pour poursuivre votre visite.</p>
        <Button asChild size="lg"><Link to="/">Retour à l’accueil</Link></Button>
      </div>
    </div>
  );
};

export default NotFound;
