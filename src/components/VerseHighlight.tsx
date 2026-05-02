import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";

const VERSE_OF_DAY = {
  ref: "Proverbes 22:6",
  text:
    "Instruis l'enfant selon la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas.",
};

const VerseHighlight = () => {
  return (
    <section className="relative py-28 md:py-36 bg-cream text-foreground overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold-dark">— Chapitre 05</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
              La Parole
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-9 text-display-xl text-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            Verset
            <span className="italic font-light text-gold-dark"> du jour.</span>
          </motion.h2>
        </div>

        <div className="editorial-rule mb-12" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left — verse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="number-tag text-gold-dark mb-6">§ Sagesse — 01</p>
            <blockquote className="font-fraunces italic text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground first-letter:text-7xl md:first-letter:text-8xl first-letter:font-medium first-letter:text-gold-dark first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              «&nbsp;{VERSE_OF_DAY.text}&nbsp;»
            </blockquote>
            <p className="mt-8 font-mono-tag text-[11px] uppercase tracking-[0.3em] text-gold-dark">
              — {VERSE_OF_DAY.ref}
            </p>
          </motion.div>

          {/* Right — Bible CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 bg-navy text-primary-foreground p-8 md:p-10 relative overflow-hidden"
          >
            <div className="grain-overlay" />
            <div className="relative">
              <p className="number-tag text-gold mb-4">— Bible Louis Segond</p>
              <h3 className="font-fraunces text-3xl md:text-4xl leading-tight">
                Toute la <span className="italic text-gradient-gold">Parole</span><br />
                à portée de clic<span className="text-gold">.</span>
              </h3>
              <p className="mt-5 text-primary-foreground/70 leading-relaxed">
                Explorez plus de <strong className="text-gold">26 000 versets</strong>. Tapez un mot, une référence ou un thème — la Parole vous répond instantanément.
              </p>

              <div className="mt-8 grid grid-cols-3 divide-x divide-primary-foreground/15 border-y border-primary-foreground/15 py-5">
                {[
                  { n: "66", l: "Livres" },
                  { n: "1 189", l: "Chapitres" },
                  { n: "26 K+", l: "Versets" },
                ].map((s, i) => (
                  <div key={s.l} className={i === 0 ? "pr-3" : "px-3"}>
                    <p className="font-fraunces text-3xl md:text-4xl text-gradient-gold tabular-nums">
                      {s.n}
                    </p>
                    <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/55 mt-1">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/versets"
                className="group mt-8 inline-flex items-center justify-between gap-3 w-full bg-gold text-primary px-5 py-4 font-mono-tag text-[11px] uppercase tracking-[0.25em] hover:bg-gold-light transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Rechercher un verset
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default VerseHighlight;
