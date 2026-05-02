import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Shield, Users, Lightbulb, Globe } from "lucide-react";

const values = [
  { num: "01", icon: <Heart className="w-5 h-5" />, title: "Foi & Spiritualité", description: "La foi chrétienne authentique constitue le fondement inébranlable de notre philosophie éducative." },
  { num: "02", icon: <Award className="w-5 h-5" />, title: "Excellence & Rigueur", description: "L'excellence académique demeure notre standard incontournable, cultivant l'esprit de dépassement." },
  { num: "03", icon: <Shield className="w-5 h-5" />, title: "Intégrité & Caractère", description: "Nous formons des individus d'une intégrité exemplaire, capables de décisions éthiques." },
  { num: "04", icon: <Users className="w-5 h-5" />, title: "Leadership & Service", description: "Nous développons les qualités de leadership authentique et l'esprit de service." },
  { num: "05", icon: <Lightbulb className="w-5 h-5" />, title: "Innovation Pédagogique", description: "Méthodes traditionnelles éprouvées et innovations éducatives contemporaines." },
  { num: "06", icon: <Globe className="w-5 h-5" />, title: "Vision Globale", description: "Préparer nos élèves à évoluer avec succès dans un monde globalisé." },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valeurs" className="py-28 md:py-36 bg-cream relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold-dark">— Chapitre 03</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
              Nos Principes
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-display-xl text-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            Six valeurs.
            <span className="italic font-light text-gold-dark"> Une vision.</span>
          </motion.h2>
          <p className="lg:col-span-2 text-foreground/60 text-sm leading-relaxed">
            Les principes directeurs façonnant l'identité distinctive de notre institution.
          </p>
        </div>

        <div className="editorial-rule mb-0" />

        {/* Numbered ledger rows */}
        <div className="divide-y divide-foreground/10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 hover:bg-background/60 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <span className="col-span-2 md:col-span-1 font-mono-tag text-[11px] tracking-[0.2em] text-gold-dark pt-2">
                {v.num}
              </span>
              <div className="col-span-10 md:col-span-3 flex items-center gap-3">
                <span className="w-9 h-9 border border-foreground/20 flex items-center justify-center text-gold-dark group-hover:bg-foreground group-hover:text-gold group-hover:border-foreground transition-colors">
                  {v.icon}
                </span>
                <h3 className="font-fraunces text-2xl md:text-3xl text-foreground leading-tight">
                  {v.title}
                </h3>
              </div>
              <p className="col-span-12 md:col-span-7 md:col-start-6 text-foreground/65 text-base md:text-lg leading-relaxed font-fraunces">
                {v.description}
              </p>
            </motion.div>
          ))}
          <div className="editorial-rule" />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
