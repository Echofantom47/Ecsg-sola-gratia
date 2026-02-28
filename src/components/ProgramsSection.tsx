import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import maternelleImg from "@/assets/maternelle.jpg";
import primaireImg from "@/assets/primaire.jpg";
import collegeImg from "@/assets/college.jpg";
import lyceeImg from "@/assets/lycee.jpg";

const programs = [
  {
    title: "École Maternelle",
    image: maternelleImg,
    description: "Un environnement sécurisant et stimulant où les tout-petits développent leurs capacités cognitives, sociales et spirituelles dans un cadre bienveillant.",
  },
  {
    title: "École Primaire",
    image: primaireImg,
    description: "La base fondamentale de la formation académique. Nos élèves acquièrent solidement les compétences en lecture, écriture, mathématiques et sciences.",
  },
  {
    title: "Collège d'Excellence",
    image: collegeImg,
    description: "Approfondissement des connaissances et préparation méthodique au Brevet. L'accent est mis sur le développement de l'esprit critique et l'autonomie intellectuelle.",
  },
  {
    title: "Lycée Sola Gratia",
    image: lyceeImg,
    description: "Formation complète en sections littéraires (A4) et scientifiques (C et D), préparant rigoureusement nos élèves au baccalauréat avec des taux de réussite exceptionnels.",
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programmes" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold-dark uppercase tracking-[0.3em] text-sm font-semibold mb-4">Formation Complète</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nos Programmes Académiques
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un cursus éducatif complet et progressif, de la petite enfance jusqu'à l'obtention du baccalauréat
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden shadow-elegant hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-lg font-bold text-primary-foreground">
                  {p.title}
                </h3>
              </div>
              <div className="p-5 bg-card">
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
