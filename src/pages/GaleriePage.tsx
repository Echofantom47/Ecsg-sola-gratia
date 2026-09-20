import { useState } from "react";
import { X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { authenticImages } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

const images = [
  { src: authenticImages.culturalDay, title: "Journée culturelle", format: "md:col-span-8 md:row-span-2" },
  { src: authenticImages.promoFlyer, title: "Affiche officielle", format: "md:col-span-4" },
  { src: authenticImages.afficheEcsg, title: "Identité Sola Gratia", format: "md:col-span-4" },
  { src: authenticImages.classroom, title: "Vie scolaire", format: "md:col-span-5" },
  { src: authenticImages.afficheEduquer, title: "Éduquer pour la gloire de Dieu", format: "md:col-span-7" },
];

const GaleriePage = () => {
  const [selected, setSelected] = useState<(typeof images)[number] | null>(null);
  return <PageLayout><PageHero eyebrow="Galerie" title="La vie de Sola Gratia en images." intro="Une sélection de photographies et d’affiches authentiques transmises par l’établissement." image={authenticImages.culturalDay} /><section className="section-shell bg-background"><div className="container mx-auto px-4"><SectionHeading eyebrow="Photothèque" title="Moments, visages et identité." /><div className="mt-12 grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-12">{images.map((image) => <button key={image.title} type="button" onClick={() => setSelected(image)} className={`group relative overflow-hidden text-left ${image.format}`}><img src={image.src} alt={image.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 bg-primary/90 p-5 font-display text-xl font-semibold text-primary-foreground">{image.title}</span></button>)}</div></div></section>{selected && <div role="dialog" aria-modal="true" aria-label={selected.title} className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4" onClick={() => setSelected(null)}><Button variant="secondary" size="icon" className="absolute right-5 top-5" onClick={() => setSelected(null)} aria-label="Fermer"><X /></Button><img src={selected.src} alt={selected.title} className="max-h-[86vh] max-w-full object-contain" onClick={(event) => event.stopPropagation()} /></div>}</PageLayout>;
};

export default GaleriePage;