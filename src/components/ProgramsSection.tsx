import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import maternelleImg from "@/assets/maternelle.jpg";
import primaireImg from "@/assets/primaire.jpg";
import collegeImg from "@/assets/college.jpg";
import lyceeImg from "@/assets/lycee.jpg";

const programs = [
  { num: "I", title: "Maternelle", age: "3 — 5 ans", image: maternelleImg, description: "Cadre d'éveil chaleureux où nos tout-petits cultivent curiosité, créativité et premiers apprentissages fondamentaux." },
  { num: "II", title: "Primaire", age: "6 — 11 ans", image: primaireImg, description: "Le socle de toute réussite. Lecture, écriture, mathématiques et découverte scientifique acquis avec assurance." },
  { num: "III", title: "Collège", age: "12 — 15 ans", image: collegeImg, description: "Consolidation des savoirs et préparation méthodique au BEPC. Esprit critique, autonomie, discipline." },
  { num: "IV", title: "Lycée", age: "16 — 19 ans", image: lyceeImg, description: "Parcours abouti en séries A4, C & D. Encadrement rigoureux conduisant à l'excellence au Baccalauréat." },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programmes" className="py-28 md:py-36 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold-dark">— Chapitre 04</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
              Formation Complète
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-9 text-display-xl text-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            De la maternelle
            <span className="italic font-light text-gold-dark"> au Baccalauréat.</span>
          </motion.h2>
        </div>

        <div className="editorial-rule" />

        {/* Editorial program rows */}
        <div className="divide-y divide-foreground/10">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-12 md:py-16 items-start hover:bg-cream/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-fraunces italic text-4xl md:text-5xl text-gold-dark leading-none">
                  {p.num}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <p className="number-tag text-foreground/50 mb-3">{p.age}</p>
                <h3 className="text-display-xl text-foreground text-5xl md:text-6xl">
                  {p.title}<span className="text-gold-dark">.</span>
                </h3>
                <a
                  href="/programmes"
                  className="mt-6 inline-flex items-center gap-2 font-mono-tag text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-gold-dark"
                >
                  <span className="hover-underline">En savoir plus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              <div className="col-span-12 md:col-span-3 order-last md:order-none">
                <p className="text-foreground/65 font-fraunces text-base md:text-lg leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 relative overflow-hidden aspect-[5/4] md:aspect-[4/5]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-primary-foreground/90 font-mono-tag text-[10px] uppercase tracking-[0.25em]">
                  <span>Fig. 0{i + 3}</span>
                  <span>{p.title}</span>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="editorial-rule" />
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
