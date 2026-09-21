import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { authenticImages, school } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { FileCheck2, MessageCircle, Phone } from "lucide-react";

const AdmissionsPage = () => (
  <PageLayout>
    <PageHero eyebrow="Admissions" title="Préparer l’entrée de votre enfant à Sola Gratia." intro="L’administration vous accompagne pour comprendre les étapes, vérifier les pièces et choisir le cycle adapté." image={authenticImages.inscriptionPoster} />
    <section className="section-shell">
      <div className="container mx-auto px-4">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {[
            [FileCheck2, "Préparer le dossier", "Acte de naissance et bulletin précédent. L’administration confirme les autres pièces selon le niveau."],
            [MessageCircle, "Échanger avec l’école", "Posez vos questions sur les programmes, les places et les frais avant de vous déplacer."],
            [Phone, "Finaliser avec l’administration", "Les conditions définitives d’admission sont validées directement par l’établissement."],
          ].map(([Icon, title, text], index) => {
            const IconComponent = Icon as typeof FileCheck2;
            return <article key={String(title)} className="bg-background p-7 md:p-9"><span className="section-label text-primary">0{index + 1}</span><IconComponent className="mt-8 h-7 w-7 text-primary" /><h2 className="mt-5 font-display text-2xl font-semibold">{String(title)}</h2><p className="mt-4 leading-7 text-muted-foreground">{String(text)}</p></article>;
          })}
        </div>
        <div className="mt-12 flex flex-wrap gap-3"><Button asChild size="lg"><a href={school.whatsapp}>Commencer sur WhatsApp</a></Button><Button asChild size="lg" variant="outline"><a href="tel:+22890071065">Appeler l’administration</a></Button></div>
      </div>
    </section>
  </PageLayout>
);

export default AdmissionsPage;