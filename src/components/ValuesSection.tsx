import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Shield, Users, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    num: "01",
    icon: <Heart className="w-7 h-7" />,
    title: "Foi & Spiritualité",
    description: "La foi chrétienne authentique constitue le fondement inébranlable de notre philosophie éducative.",
  },
  {
    num: "02",
    icon: <Award className="w-7 h-7" />,
    title: "Excellence & Rigueur",
    description: "L'excellence académique demeure notre standard incontournable, cultivant l'esprit de dépassement.",
  },
  {
    num: "03",
    icon: <Shield className="w-7 h-7" />,
    title: "Intégrité & Caractère",
    description: "Nous formons des individus d'une intégrité exemplaire, capables de décisions éthiques.",
  },
  {
    num: "04",
    icon: <Users className="w-7 h-7" />,
    title: "Leadership & Service",
    description: "Nous développons les qualités de leadership authentique et l'esprit de service.",
  },
  {
    num: "05",
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Innovation Pédagogique",
    description: "Méthodes traditionnelles éprouvées et innovations éducatives contemporaines.",
  },
  {
    num: "06",
    icon: <Globe className="w-7 h-7" />,
    title: "Vision Globale",
    description: "Préparer nos élèves à évoluer avec succès dans un monde globalisé.",
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valeurs" className="py-32 md:py-40 bg-cream relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mb-20"
        >
          <p className="text-gold-dark uppercase tracking-[0.4em] text-xs font-semibold mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-dark" /> Nos Principes
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight">
            Six valeurs.
            <span className="block font-serif-display italic font-light text-gold-dark">
              Une seule vision.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mt-6 text-lg">
            Les principes directeurs qui orientent notre action éducative et façonnent l'identité distinctive de notre institution.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden shadow-mega">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card p-8 md:p-10 lg:p-12 group hover:bg-gradient-navy transition-all duration-500 relative"
            >
              <p className="font-serif-display italic text-6xl text-gold/40 group-hover:text-gold/80 transition-colors absolute top-6 right-6">
                {v.num}
              </p>
              <div className="w-14 h-14 rounded-xl bg-gradient-navy group-hover:bg-gradient-gold flex items-center justify-center text-gold group-hover:text-primary mb-6 transition-all duration-500">
                {v.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                {v.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm leading-relaxed transition-colors">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
