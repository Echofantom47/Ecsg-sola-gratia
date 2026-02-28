import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Shield, Users, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Foi et Spiritualité",
    description: "La foi chrétienne authentique constitue le fondement inébranlable de notre philosophie éducative. Nous cultivons chez nos élèves une spiritualité profonde et une relation personnelle avec Dieu.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Excellence et Rigueur",
    description: "L'excellence académique demeure notre standard incontournable. Nous exigeons de nos élèves le meilleur d'eux-mêmes, cultivant l'esprit de dépassement et la recherche constante de la perfection.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Intégrité et Caractère",
    description: "Nous formons des individus d'une intégrité exemplaire, capables de prendre des décisions éthiques et de maintenir des standards moraux élevés dans toutes les circonstances.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Leadership et Service",
    description: "Nous développons chez nos élèves les qualités de leadership authentique et l'esprit de service pour exercer une influence positive dans leur communauté.",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Innovation Pédagogique",
    description: "Notre approche combine les méthodes d'enseignement traditionnelles éprouvées et les innovations éducatives contemporaines pour un environnement d'apprentissage dynamique.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Vision Globale",
    description: "Nous préparons nos élèves à évoluer avec succès dans un monde globalisé, en développant leur ouverture d'esprit et leur capacité à relever les défis du XXIe siècle.",
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="valeurs" className="py-24 bg-cream relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold-dark uppercase tracking-[0.3em] text-sm font-semibold mb-4">Nos Principes</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Les principes directeurs qui orientent notre action éducative et façonnent l'identité distinctive de notre institution
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-navy flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
