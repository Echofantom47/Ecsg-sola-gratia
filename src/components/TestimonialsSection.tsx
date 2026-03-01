import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "L'École Chrétienne Sola Gratia a transformé la vie de mon enfant. La rigueur académique alliée aux valeurs chrétiennes en fait une institution véritablement exceptionnelle.",
    author: "Mme AKOU",
    role: "Parent d'élève — Lycée",
  },
  {
    quote: "Grâce à la formation solide reçue à Sola Gratia, j'ai obtenu mon baccalauréat avec mention et intégré l'université de mon choix. Je leur serai éternellement reconnaissant.",
    author: "Kofi M.",
    role: "Ancien élève — Promotion 2023",
  },
  {
    quote: "L'encadrement personnalisé et l'attention portée à chaque enfant font de cette école un lieu unique. Mes deux enfants s'y épanouissent pleinement.",
    author: "M. AGBEKO",
    role: "Parent d'élève — Primaire & Collège",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-cream relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold-dark uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Témoignages
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ils Nous Font Confiance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Les voix de notre communauté scolaire témoignent de l'impact transformateur de notre institution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-elegant relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <p className="text-foreground/70 text-sm leading-relaxed italic mb-6">
                «&nbsp;{t.quote}&nbsp;»
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
