import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CalendarDays, Check, Cross, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { authenticImages, cycles, editorialItems, school, values } from "@/data/siteContent";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.65 } };

const HomeExperience = () => (
  <main>
    <section className="relative min-h-[92svh] overflow-hidden bg-muted pt-24 md:pt-28">
      <div className="container mx-auto grid min-h-[calc(92svh-7rem)] gap-10 px-4 py-10 lg:grid-cols-12 lg:items-center lg:py-14">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10 lg:col-span-6">
          <p className="section-label text-primary">Fondée à Lomé en 2002</p>
          <h1 className="hero-title mt-5">École Chrétienne <span className="block text-primary">Sola Gratia</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">Une éducation complète qui unit l’apprentissage, la formation du caractère et les valeurs chrétiennes.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/programmes">Découvrir nos programmes <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/contact">Demander des informations</Link></Button>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-px border-y border-border bg-border sm:grid-cols-3">
            {["Depuis 2002", "4 cycles", "Séries A4, C et D"].map((item) => <p key={item} className="bg-muted px-4 py-5 text-sm font-semibold text-foreground">{item}</p>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.15 }} className="relative lg:col-span-6">
          <div className="image-frame ml-auto aspect-[4/5] max-h-[680px] w-full overflow-hidden lg:w-[92%]"><img src={authenticImages.heroCampus} alt="Campus de l’École Chrétienne Sola Gratia" className="h-full w-full object-cover" /></div>
          <div className="absolute -bottom-6 left-0 max-w-[250px] bg-primary p-6 text-primary-foreground shadow-editorial"><Cross className="h-5 w-5" /><p className="mt-4 font-display text-xl font-semibold">Éduquer pour la gloire de Dieu.</p></div>
        </motion.div>
      </div>
    </section>

    <section className="section-shell bg-background">
      <div className="container mx-auto px-4">
        <motion.div {...reveal} className="grid gap-10 lg:grid-cols-12">
          <p className="section-label text-primary lg:col-span-3">Notre école</p>
          <div className="lg:col-span-8"><h2 className="section-title">Apprendre avec exigence. Grandir avec des repères.</h2><p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">À Yokoè Agblégan, Sola Gratia accompagne les élèves de la maternelle au lycée. L’établissement construit des fondations scolaires solides dans un cadre chrétien attentif à la personne.</p></div>
        </motion.div>
      </div>
    </section>

    <section className="section-shell bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Notre approche" title="Une formation qui regarde l’élève dans sa totalité." intro="Quatre engagements structurent l’expérience éducative proposée aux familles." />
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {["Enseignement structuré", "Valeurs chrétiennes", "Formation du caractère", "Accompagnement attentif"].map((item, index) => <motion.article {...reveal} transition={{ duration: 0.55, delay: index * 0.08 }} key={item} className="min-h-64 bg-background p-7"><span className="section-label text-primary">0{index + 1}</span><h3 className="mt-16 font-display text-2xl font-semibold">{item}</h3><p className="mt-4 leading-7 text-muted-foreground">Un axe clair pour apprendre, progresser et devenir responsable dans la communauté.</p></motion.article>)}
        </div>
      </div>
    </section>

    <section className="section-shell bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Nos cycles" title="Un parcours continu, de la maternelle au Baccalauréat." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cycles.map((cycle, index) => <motion.article {...reveal} key={cycle.slug} className="group relative min-h-[430px] overflow-hidden"><img src={cycle.image} alt={`Cycle ${cycle.title}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground md:p-9"><p className="section-label text-primary-foreground/70">0{index + 1} — {cycle.kicker}</p><div className="mt-3 flex items-end justify-between gap-4"><h3 className="font-display text-4xl font-semibold md:text-5xl">{cycle.title}</h3><Button asChild variant="secondary" size="icon" aria-label={`Découvrir ${cycle.title}`}><Link to={`/programmes/${cycle.slug}`}><ArrowRight /></Link></Button></div></div></motion.article>)}
        </div>
      </div>
    </section>

    <section className="section-shell bg-primary text-primary-foreground">
      <div className="container mx-auto px-4"><SectionHeading eyebrow="Valeurs chrétiennes" title="Des convictions vécues dans le travail quotidien." light /><div className="mt-14 grid gap-px bg-primary-foreground/20 md:grid-cols-2 lg:grid-cols-4">{values.map((value) => <article key={value.title} className="bg-primary p-7"><span className="section-label text-primary-foreground/60">{value.number}</span><h3 className="mt-10 font-display text-3xl font-semibold">{value.title}</h3><p className="mt-4 leading-7 text-primary-foreground/70">{value.text}</p></article>)}</div></div>
    </section>

    <section className="section-shell bg-background">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-12 lg:items-center">
        <motion.div {...reveal} className="lg:col-span-5"><img src={authenticImages.afficheEduquer} alt="Affiche officielle de l’École Chrétienne Sola Gratia" className="w-full object-cover shadow-editorial" /></motion.div>
        <motion.div {...reveal} className="lg:col-span-6 lg:col-start-7"><p className="section-label text-primary">Notre histoire</p><h2 className="section-title mt-5">Depuis le 16 septembre 2002.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Fondée par {school.founder}, l’École Chrétienne Sola Gratia porte une ambition claire : éduquer pour la gloire de Dieu et former pour la vie.</p><p className="mt-8 border-l-4 border-primary pl-6 font-display text-2xl font-semibold text-primary">{school.motto}</p><Button asChild variant="outline" className="mt-9"><Link to="/ecole">Découvrir l’école <ArrowRight /></Link></Button></motion.div>
      </div>
    </section>

    <section className="section-shell bg-muted">
      <div className="container mx-auto px-4"><SectionHeading eyebrow="Mot du fondateur" title="Une parole à publier avec fidélité." intro="Le message officiel du fondateur sera présenté ici dès qu’il aura été transmis et validé par l’établissement." /><div className="mt-12 max-w-4xl border-t border-border pt-8"><p className="text-lg leading-8 text-muted-foreground">Nous choisissons de ne pas inventer cette prise de parole. Cet espace reste prêt à accueillir le texte et le portrait officiels de M. Dosseh Kokou Beaugars.</p></div></div>
    </section>

    <section className="section-shell bg-background">
      <div className="container mx-auto px-4"><SectionHeading eyebrow="Vie à Sola Gratia" title="Une communauté en mouvement." intro="Quelques images authentiques de l’établissement et de ses temps forts." /><div className="mt-14 grid grid-cols-12 gap-4"><img src={authenticImages.culturalDay} alt="Journée culturelle à Sola Gratia" className="col-span-12 h-[480px] w-full object-cover md:col-span-8" /><img src={authenticImages.classroom} alt="Vie scolaire à Sola Gratia" className="col-span-12 h-[360px] w-full object-cover md:col-span-4 md:h-[480px]" /></div><Button asChild variant="outline" className="mt-8"><Link to="/galerie">Voir la galerie <ArrowRight /></Link></Button></div>
    </section>

    <section className="section-shell bg-muted">
      <div className="container mx-auto px-4"><SectionHeading eyebrow="Infrastructures" title="Découvrir les espaces de l’établissement." intro="Des informations et photographies détaillées seront ajoutées après validation par l’école." /><div className="mt-10 flex items-start gap-4 border-t border-border py-7"><Check className="mt-1 h-5 w-5 text-primary" /><p className="max-w-2xl leading-7 text-muted-foreground">Cette présentation n’attribue aucun équipement non confirmé à l’établissement. Les futurs contenus seront publiés à partir de documents réels.</p></div></div>
    </section>

    <section className="section-shell bg-background">
      <div className="container mx-auto px-4"><SectionHeading eyebrow="À la une" title="Actualités et événements." /><div className="mt-12 grid gap-px bg-border md:grid-cols-2">{editorialItems.map((item, index) => <article key={item.type} className="bg-background p-8 md:p-10"><div className="flex items-center gap-3 text-primary">{index === 0 ? <BookOpen /> : <CalendarDays />}<span className="section-label">{item.type}</span></div><h3 className="mt-10 font-display text-3xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{item.text}</p><Link to={index === 0 ? "/actualites" : "/evenements"} className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">Consulter <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div>
    </section>

    <section className="bg-primary py-20 text-primary-foreground md:py-28"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-8"><p className="section-label text-primary-foreground/65">Admissions</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">Construisons la prochaine étape de son parcours.</h2></div><div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"><Button asChild variant="secondary" size="lg"><Link to="/admissions">Inscrire mon enfant</Link></Button><Button asChild size="lg" className="border border-primary-foreground/40"><Link to="/contact">Nous contacter</Link></Button></div></div></section>

    <section className="section-shell bg-background"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-12"><div className="lg:col-span-7"><SectionHeading eyebrow="Contact" title="Parlons de votre projet scolaire." /></div><div className="space-y-5 lg:col-span-5"><p className="flex gap-3 text-lg"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />{school.address}</p><p className="text-lg">{school.phones.join(" · ")}</p><p className="text-lg"><a href={`mailto:${school.email}`} className="text-primary underline underline-offset-4">{school.email}</a></p><Button asChild className="mt-4"><Link to="/contact">Toutes les coordonnées</Link></Button></div></div></section>
  </main>
);

export default HomeExperience;