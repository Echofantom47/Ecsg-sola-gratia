import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "L'École Chrétienne Sola Gratia a transformé la vie de mon enfant. La rigueur académique alliée aux valeurs chrétiennes en fait une institution véritablement exceptionnelle.",
    author: "Mme AKOU",
    role: "Parent d'élève — Lycée",
  },
  {
    quote:
      "Grâce à la formation solide reçue à Sola Gratia, j'ai obtenu mon baccalauréat avec mention et intégré l'université de mon choix. Je leur serai éternellement reconnaissant.",
    author: "Kofi M.",
    role: "Ancien élève — Promotion 2023",
  },
  {
    quote:
      "L'encadrement personnalisé et l'attention portée à chaque enfant font de cette école un lieu unique. Mes deux enfants s'y épanouissent pleinement.",
    author: "M. AGBEKO",
    role: "Parent d'élève — Primaire & Collège",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 bg-cream relative overflow-hidden" ref={ref}>
      {/* big quote mark */}
      <Quote className="absolute -top-10 -left-10 w-[400px] h-[400px] text-gold/5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-5xl mb-20"
        >
          <p className="text-gold-dark uppercase tracking-[0.4em] text-xs font-semibold mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-dark" /> Témoignages
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight">
            Ils nous
            <span className="block font-serif-display italic font-light text-gold-dark">
              font confiance.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`bg-card rounded-3xl p-8 lg:p-10 shadow-elegant relative border border-border hover:border-gold/40 hover:shadow-mega transition-all duration-500 ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 font-display italic text-lg lg:text-xl leading-relaxed mb-8">
                «&nbsp;{t.quote}&nbsp;»
              </p>
              <div className="border-t border-border pt-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-navy flex items-center justify-center text-gold font-display font-bold">
                  {t.author.split(" ").pop()?.[0]}
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{t.author}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
