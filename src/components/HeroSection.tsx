import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Editorial top meta bar */}
      <div className="absolute top-20 md:top-24 left-0 right-0 z-20 px-4">
        <div className="container mx-auto flex items-center justify-between text-foreground/60 font-mono-tag text-[10px] uppercase tracking-[0.3em]">
          <span>N° 001 — Édition 2025</span>
          <span className="hidden md:inline">06°08′N · 01°13′E</span>
          <span>Volume XXIII</span>
        </div>
        <div className="container mx-auto editorial-rule mt-3" />
      </div>

      <div className="container mx-auto px-4 pt-36 md:pt-44 pb-12 grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[100svh]">
        {/* LEFT — Type column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 flex flex-col justify-between relative"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="number-tag text-gold-dark">— Chapitre 01</span>
              <span className="number-tag text-foreground/40">L'Institution</span>
            </div>

            <h1 className="text-display-xl text-foreground text-[16vw] md:text-[11vw] lg:text-[9.5vw]">
              École
              <br />
              <span className="italic font-light text-gold-dark">Chrétienne</span>
              <br />
              Sola Gratia<span className="text-gold">.</span>
            </h1>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-2xl">
              <p className="font-fraunces italic text-xl md:text-2xl text-foreground/85 leading-snug">
                «&nbsp;Je puis tout par celui qui me fortifie.&nbsp;»
                <span className="block font-mono-tag not-italic text-[10px] tracking-[0.3em] uppercase mt-2 text-foreground/50">
                  — Philippiens 4 : 13
                </span>
              </p>
              <p className="text-foreground/65 text-sm md:text-base leading-relaxed">
                Depuis plus de deux décennies, notre institution forge l'élite de demain. Excellence académique, rigueur morale, ancrage spirituel — chaque élève accompagné vers son plein potentiel.
              </p>
            </div>
          </div>

          {/* Bottom CTA row */}
          <div className="mt-14 lg:mt-0">
            <div className="editorial-rule mb-6" />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#resultats"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 font-mono-tag text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-primary transition-colors"
              >
                Découvrir l'excellence
                <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-mono-tag text-[11px] tracking-[0.25em] uppercase text-foreground/80 hover:text-gold-dark"
              >
                <span className="hover-underline">Inscription 2025-2026</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Image + meta panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative h-[60vh] lg:h-full lg:min-h-[600px] overflow-hidden corner-frame">
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <img
                src={heroCampus}
                alt="Campus de l'École Chrétienne Sola Gratia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            </motion.div>

            {/* image label */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-primary-foreground/80 font-mono-tag text-[10px] uppercase tracking-[0.3em]">
              <span>Fig. 01</span>
              <span>Campus · Yokoé</span>
            </div>

            {/* bottom info ledger */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-navy via-navy/85 to-transparent">
              <div className="space-y-1.5">
                {[
                  ["23+", "Années d'excellence"],
                  ["98%", "Réussite au CEPD"],
                  ["04", "Cycles complets"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="flex items-baseline justify-between border-b border-primary-foreground/15 pb-1.5"
                  >
                    <span className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                      {l}
                    </span>
                    <span className="font-fraunces text-2xl md:text-3xl text-gold tabular-nums">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* bottom marquee — kept */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-foreground/10 bg-background/80 backdrop-blur py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div
              key={k}
              className="flex items-center gap-10 px-6 text-foreground/60 font-mono-tag text-[11px] uppercase tracking-[0.3em]"
            >
              {[
                "Maternelle",
                "—",
                "Primaire",
                "—",
                "Collège",
                "—",
                "Lycée",
                "—",
                "Sections A4 · C · D",
                "—",
                "Quartier Yokoé · Lomé",
                "—",
                "Inscription 2025-2026",
                "—",
              ].map((t, i) => (
                <span key={i} className={t === "—" ? "text-gold" : ""}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
