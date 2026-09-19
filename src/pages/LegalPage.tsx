import PageLayout from "@/components/PageLayout";
import { school } from "@/data/siteContent";

const LegalPage = ({ privacy = false }: { privacy?: boolean }) => (
  <PageLayout><main className="container mx-auto max-w-4xl px-4 pb-24 pt-36"><p className="section-label text-primary">Informations légales</p><h1 className="page-title mt-5">{privacy ? "Confidentialité" : "Mentions légales"}</h1><div className="prose prose-lg mt-12 max-w-none text-muted-foreground"><h2 className="text-foreground">{school.name}</h2><p>{school.address}<br />{school.email}<br />{school.phones.join(" · ")}</p><p>{privacy ? "Le site ne collecte pas de données personnelles par un formulaire en ligne. Les échanges initiés par téléphone, courriel ou WhatsApp relèvent des services choisis par le visiteur." : "Ce site présente les informations publiques de l’établissement. Pour toute correction ou demande, contactez directement l’administration."}</p></div></main></PageLayout>
);

export default LegalPage;