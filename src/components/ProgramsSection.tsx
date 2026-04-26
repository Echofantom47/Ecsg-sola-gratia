import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import maternelleImg from "@/assets/maternelle.jpg";
import primaireImg from "@/assets/primaire.jpg";
import collegeImg from "@/assets/college.jpg";
import lyceeImg from "@/assets/lycee.jpg";

const programs = [
  {
    num: "I",
    title: "Maternelle",
    age: "3 — 5 ans",
    image: maternelleImg,
    description: "Cadre d'éveil chaleureux où nos tout-petits cultivent curiosité, créativité et premiers apprentissages fondamentaux.",
  },
  {
    num: "II",
    title: "Primaire",
    age: "6 — 11 ans",
    image: primaireImg,
    description: "Le socle de toute réussite. Lecture, écriture, mathématiques et découverte scientifique acquis avec assurance.",
  },
  {
    num: "III",
    title: "Collège",
    age: "12 — 15 ans",
    image: collegeImg,
    description: "Consolidation des savoirs et préparation méthodique au BEPC. Esprit critique, autonomie, discipline.",
  },
  {
    num: "IV",
    title: "Lycée",
    age: "16 — 19 ans",
    image: lyceeImg,
    description: "Parcours abouti en séries A4, C & D. Encadrement rigoureux conduisant à l'excellence au Baccalauréat.",
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programmes" className="py-32 md:py-40 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 mb-20 items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-gold-dark uppercase tracking-[0.4em] text-xs font-semibold mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-dark" /> Formation Complète
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight">
              De la maternelle
              <span className="block font-serif-display italic font-light text-gold-dark">
                au Baccalauréat.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Un cursus éducatif complet et progressif, structuré pour accompagner chaque élève à chaque étape de sa croissance.
            </p>
          </div>
        </motion.div>

        {/* Big stacked rows */}
        <div className="space-y-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch rounded-3xl overflow-hidden bg-card border border-border hover:border-gold/40 hover:shadow-mega transition-all duration-500 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
                <span className="absolute top-6 left-6 font-serif-display italic text-5xl md:text-6xl text-gold">
                  {p.num}
                </span>
              </div>
              <div className="lg:col-span-7 p-8 md:p-10 lg:p-14 flex flex-col justify-center">
                <p className="text-gold-dark uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                  {p.age}
                </p>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl mb-6">
                  {p.description}
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-gold-dark transition-colors">
                  En savoir plus
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
