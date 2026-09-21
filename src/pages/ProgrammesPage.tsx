import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { cycles, authenticImages } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

const ProgrammesPage = () => (
  <PageLayout>
    <PageHero eyebrow="Programmes" title="Quatre cycles. Un même engagement éducatif." intro="Un parcours continu de la maternelle au Baccalauréat, avec les séries A4, C et D au lycée." image={authenticImages.rentreePoster} />
    <section className="section-shell bg-background"><div className="container mx-auto px-4"><SectionHeading eyebrow="Parcours scolaire" title="Choisir le cycle qui correspond à votre enfant." /><div className="mt-14 divide-y divide-border border-y border-border">{cycles.map((cycle, index) => <article key={cycle.slug} className="grid gap-7 py-10 md:grid-cols-12 md:items-center md:py-14"><span className="section-label text-primary md:col-span-1">0{index + 1}</span><img src={cycle.image} alt={`Élèves du cycle ${cycle.title}`} className="h-56 w-full object-cover md:col-span-4" /><div className="md:col-span-5"><p className="section-label text-muted-foreground">{cycle.kicker}</p><h2 className="mt-3 font-display text-4xl font-semibold">{cycle.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{cycle.text}</p></div><div className="md:col-span-2 md:text-right"><Button asChild variant="outline"><Link to={`/programmes/${cycle.slug}`}>Découvrir <ArrowRight /></Link></Button></div></article>)}</div></div></section>
  </PageLayout>
);

export default ProgrammesPage;