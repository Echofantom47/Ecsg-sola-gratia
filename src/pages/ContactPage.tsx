import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { authenticImages, school } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const ContactPage = () => (
  <PageLayout>
    <PageHero eyebrow="Contact" title="Une équipe disponible pour vous orienter." intro="Contactez directement l’administration pour les admissions, les frais, les horaires et les informations pédagogiques." image={authenticImages.afficheEcsg} />
    <section className="section-shell bg-background"><div className="container mx-auto grid gap-12 px-4 lg:grid-cols-12"><div className="space-y-8 lg:col-span-5">{[[MapPin, "Adresse", school.address], [Phone, "Téléphone", school.phones.join(" · ")], [Mail, "Courriel", school.email]].map(([Icon, label, value]) => { const ContactIcon = Icon as typeof MapPin; return <div key={String(label)} className="flex gap-4 border-b border-border pb-7"><ContactIcon className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><p className="section-label text-muted-foreground">{String(label)}</p><p className="mt-2 text-lg font-semibold">{String(value)}</p></div></div>; })}<div className="flex flex-wrap gap-3"><Button asChild><a href={school.whatsapp}><MessageCircle /> WhatsApp</a></Button><Button asChild variant="outline"><a href="tel:+22890071065">Appeler</a></Button></div></div><div className="lg:col-span-7"><iframe title="Localisation de l’École Chrétienne Sola Gratia" src="https://www.google.com/maps?q=%C3%89cole+Chr%C3%A9tienne+Sola+Gratia+Yoko%C3%A8+Agbl%C3%A9gan+Lom%C3%A9+Togo&output=embed" className="h-[520px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={school.maps} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary"><MapPin className="h-4 w-4" /> Ouvrir dans Google Maps</a></div></div></section>
  </PageLayout>
);

export default ContactPage;