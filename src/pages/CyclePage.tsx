import { Navigate, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { cycles } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

const CyclePage = () => {
  const { cycle } = useParams();
  const item = cycles.find((entry) => entry.slug === cycle);
  if (!item) return <Navigate to="/programmes" replace />;

  return (
    <PageLayout>
      <PageHero eyebrow="Programmes" title={item.title} intro={item.text} image={item.image} />
      <section className="section-shell">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="section-label text-primary">{item.kicker}</p>
            <h2 className="section-title mt-4">Un parcours qui accompagne chaque étape.</h2>
          </div>
          <div className="space-y-6 lg:col-span-5">
            <p className="text-lg leading-8 text-muted-foreground">Les informations détaillées sur les classes, les horaires et les modalités pédagogiques sont communiquées directement par l’administration.</p>
            <Button asChild size="lg"><a href="https://wa.me/22890071065">Demander des informations</a></Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CyclePage;