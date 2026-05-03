import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import affichePoster from "@/assets/affiche-ecsg.png";

const PosterFeature = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-navy text-primary-foreground relative overflow-hidden"
    >
      <div className="grain-overlay" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <p className="number-tag text-gold mb-6">— Édition Spéciale</p>
            <h2 className="text-display-xl text-primary-foreground text-5xl md:text-6xl mb-8">
              Éduquer pour la
              <span className="italic font-light text-gradient-gold"> gloire de Dieu.</span>
            </h2>
            <p className="font-fraunces italic text-lg md:text-xl text-primary-foreground/80 border-l-2 border-gold pl-5 leading-snug mb-8">
              «&nbsp;Former pour la vie. Une éducation d'excellence fondée sur la Parole de Dieu.&nbsp;»
            </p>
            <div className="space-y-3 font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary-foreground/70">
              <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                <span>Volonté</span>
                <span className="text-gold">·</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                <span>Courage</span>
                <span className="text-gold">·</span>
              </div>
              <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                <span>Succès</span>
                <span className="text-gold">·</span>
              </div>
            </div>
          </motion.div>

          {/* Affiche */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            <div className="relative shadow-2xl ring-1 ring-gold/30">
              <img
                src={affichePoster}
                alt="Affiche officielle École Chrétienne Sola Gratia"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono-tag text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
              <span>Fig. 03 — Affiche Institutionnelle</span>
              <span>ECSG · 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PosterFeature;
