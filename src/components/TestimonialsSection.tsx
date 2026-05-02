import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    num: "T.01",
    quote: "L'École Chrétienne Sola Gratia a transformé la vie de mon enfant. La rigueur académique alliée aux valeurs chrétiennes en fait une institution véritablement exceptionnelle.",
    author: "Mme AKOU",
    role: "Parent d'élève — Lycée",
  },
  {
    num: "T.02",
    quote: "Grâce à la formation solide reçue à Sola Gratia, j'ai obtenu mon baccalauréat avec mention et intégré l'université de mon choix. Je leur serai éternellement reconnaissant.",
    author: "Kofi M.",
    role: "Ancien élève — Promotion 2023",
  },
  {
    num: "T.03",
    quote: "L'encadrement personnalisé et l'attention portée à chaque enfant font de cette école un lieu unique. Mes deux enfants s'y épanouissent pleinement.",
    author: "M. AGBEKO",
    role: "Parent d'élève — Primaire & Collège",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold-dark">— Chapitre 07</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
              Témoignages
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-9 text-display-xl text-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            Ils nous
            <span className="italic font-light text-gold-dark"> font confiance.</span>
          </motion.h2>
        </div>

        <div className="editorial-rule" />

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="p-8 md:p-10 flex flex-col justify-between min-h-[420px] group hover:bg-cream/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tag text-[11px] tracking-[0.25em] uppercase text-gold-dark">
                    {t.num}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                <p className="font-fraunces text-xl md:text-2xl leading-snug text-foreground/90 first-letter:text-5xl first-letter:font-medium first-letter:text-gold-dark first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                  «&nbsp;{t.quote}&nbsp;»
                </p>
              </div>

              <figcaption className="mt-10 pt-6 border-t border-foreground/10">
                <p className="font-fraunces text-2xl text-foreground">{t.author}</p>
                <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-foreground/50 mt-1">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <div className="editorial-rule" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
