import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Search, ArrowRight, Quote } from "lucide-react";

const VERSE_OF_DAY = {
  ref: "Proverbes 22:6",
  text:
    "Instruis l'enfant selon la voie qu'il doit suivre; et quand il sera vieux, il ne s'en détournera pas.",
};

const VerseHighlight = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-navy text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-gold opacity-20" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-royal-blue/30 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Verse */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold">
              <BookOpen className="w-4 h-4" /> Verset du jour
            </span>

            <Quote className="w-16 h-16 text-gold/40 mt-6 mb-4" />

            <p className="font-serif-display italic text-3xl md:text-4xl lg:text-5xl leading-tight font-light">
              « {VERSE_OF_DAY.text} »
            </p>

            <p className="mt-6 text-gold font-bold tracking-widest uppercase text-sm">
              — {VERSE_OF_DAY.ref}
            </p>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-dark rounded-3xl p-8 md:p-10 shadow-mega"
          >
            <h3 className="font-serif-display text-3xl md:text-4xl font-bold leading-tight">
              Toute la <span className="text-gradient-gold italic">Bible</span>
              <br />
              à portée de clic
            </h3>

            <p className="mt-4 text-primary-foreground/80 text-lg leading-relaxed">
              Explorez plus de <strong className="text-gold">26 000 versets</strong> de la
              traduction Louis Segond. Tapez un mot, une référence ou un thème — la Parole vous
              répond instantanément.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
              {[
                { n: "66", l: "Livres" },
                { n: "1 189", l: "Chapitres" },
                { n: "26 000+", l: "Versets" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-serif-display text-3xl md:text-4xl font-bold text-gold">
                    {s.n}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/versets"
              className="group inline-flex items-center justify-center gap-3 w-full bg-gradient-gold text-primary font-bold px-6 py-4 rounded-full text-base hover:shadow-glow-gold transition-all"
            >
              <Search className="w-5 h-5" />
              Rechercher un verset
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerseHighlight;
