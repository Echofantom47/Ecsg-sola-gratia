import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { authenticImages, school, values } from "@/data/siteContent";

const AProposPage = () => (
  <PageLayout>
    <PageHero eyebrow="L’École" title="Une école de convictions, tournée vers l’avenir." intro="Sola Gratia associe formation scolaire, développement du caractère et valeurs chrétiennes depuis 2002." image={authenticImages.heroCampus} />
    <section className="section-shell bg-background"><div className="container mx-auto grid gap-12 px-4 lg:grid-cols-12"><div className="lg:col-span-7"><SectionHeading eyebrow="Notre histoire" title="Une œuvre éducative née le 16 septembre 2002." /><p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">Fondée par {school.founder}, l’École Chrétienne Sola Gratia accueille les familles à Yokoè Agblégan, Lomé. Elle accompagne les élèves de la maternelle au lycée.</p></div><aside className="border-l-4 border-primary pl-6 lg:col-span-4 lg:col-start-9"><p className="section-label text-primary">Devise</p><p className="mt-4 font-display text-3xl font-semibold">{school.motto}</p></aside></div></section>
    <section className="section-shell bg-muted"><div className="container mx-auto px-4"><SectionHeading eyebrow="Nos repères" title="Des valeurs qui orientent l’éducation." /><div className="mt-12 grid gap-px bg-border md:grid-cols-2">{values.map((value) => <article key={value.title} className="bg-background p-8 md:p-10"><span className="section-label text-primary">{value.number}</span><h2 className="mt-8 font-display text-3xl font-semibold">{value.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{value.text}</p></article>)}</div></div></section>
    <section className="section-shell bg-primary text-primary-foreground"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-12"><div className="lg:col-span-5"><p className="section-label text-primary-foreground/60">Le fondateur</p><h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl">{school.founder}</h2></div><div className="lg:col-span-6 lg:col-start-7"><p className="text-lg leading-8 text-primary-foreground/75">Le message officiel et le portrait du fondateur seront publiés ici après validation par l’établissement. Aucun propos ne lui est attribué sans source.</p></div></div></section>
  </PageLayout>
);

export default AProposPage;