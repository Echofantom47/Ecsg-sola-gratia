import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { authenticImages, editorialItems } from "@/data/siteContent";

const EditorialPage = ({ mode }: { mode: "actualites" | "evenements" }) => {
  const isNews = mode === "actualites";
  const item = editorialItems[isNews ? 0 : 1];
  return <PageLayout><PageHero eyebrow={item.type} title={isNews ? "Actualités de l’établissement." : "Les rendez-vous de la communauté."} intro={item.text} image={isNews ? authenticImages.promoFlyer : authenticImages.culturalDay} /><section className="section-shell"><div className="container mx-auto px-4"><div className="max-w-3xl border-l-4 border-primary pl-6 md:pl-10"><p className="section-label text-primary">Publication officielle</p><h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">{item.title}</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Aucune information non validée n’est publiée. Revenez ici pour consulter les annonces officielles de l’école.</p></div></div></section></PageLayout>;
};

export default EditorialPage;