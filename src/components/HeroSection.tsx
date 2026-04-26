import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ArrowRight, Star, Award, GraduationCap } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-[100svh] w-full flex items-end overflow-hidden bg-navy"
    >
      {/* Parallax background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Campus de l'École Chrétienne Sola Gratia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/40 to-transparent" />
      </motion.div>

      {/* Grid + glow accents */}
      <div className="absolute inset-0 bg-grid-gold opacity-30 mask-fade-b pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-royal/20 blur-3xl" />

      {/* Vertical side label */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 z-20 flex-col items-center gap-4">
        <span className="h-20 w-px bg-gold/40" />
        <span className="text-gold/70 text-[10px] tracking-[0.5em] uppercase rotate-180 [writing-mode:vertical-rl]">
          Depuis 2002 — Lomé, Togo
        </span>
        <span className="h-20 w-px bg-gold/40" />
      </div>

      {/* Top bar with logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ opacity }}
        className="absolute top-28 left-0 right-0 z-10"
      >
        <div className="container mx-auto px-4 flex items-center gap-4">
          <img
            src={logoEcsg}
            alt="Logo ECSG"
            className="w-16 h-16 rounded-full border-2 border-gold shadow-glow-gold"
          />
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold/60 to-transparent" />
          <div className="hidden sm:flex items-center gap-2 text-gold/80 text-xs tracking-[0.3em] uppercase">
            <Star className="w-3 h-3 fill-current" />
            Excellence depuis 2002
          </div>
        </div>
      </motion.div>

      {/* Main content - massive type */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10 pb-24 md:pb-32"
      >
        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gold font-body text-xs md:text-sm uppercase tracking-[0.5em] font-semibold mb-6 md:mb-10 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold" />
            Volonté · Courage · Succès
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-bold text-primary-foreground leading-[0.9] tracking-tight mb-8"
          >
            <span className="block text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5vw]">
              École
            </span>
            <span className="block text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5vw] font-serif-display italic font-light text-stroke-gold">
              Chrétienne
            </span>
            <span className="block text-gradient-gold text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[10vw] -mt-2 md:-mt-4 font-serif-display">
              Sola Gratia
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mt-10 md:mt-14"
          >
            <p className="text-primary-foreground/80 italic font-display text-lg md:text-2xl leading-snug border-l-2 border-gold pl-5">
              «&nbsp;Je puis tout par celui qui me fortifie.&nbsp;»
              <span className="block text-gold/70 not-italic font-body text-xs tracking-widest uppercase mt-2">
                Philippiens 4 : 13
              </span>
            </p>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed">
              Depuis plus de deux décennies, notre institution forge l'élite de demain. Excellence académique, rigueur morale, ancrage spirituel — chaque élève accompagné vers son plein potentiel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 mt-10 md:mt-14"
          >
            <a
              href="#resultats"
              className="group bg-gradient-gold text-primary font-semibold px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base hover:shadow-glow-gold transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              Découvrir Notre Excellence
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base hover:border-gold hover:text-gold hover:bg-gold/5 transition-all"
            >
              Inscription 2025-2026
            </a>
          </motion.div>
        </div>

        {/* Floating stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="hidden md:grid grid-cols-3 gap-px max-w-3xl mt-16 glass-dark rounded-2xl overflow-hidden"
        >
          {[
            { icon: <GraduationCap className="w-5 h-5" />, value: "23+", label: "Années d'excellence" },
            { icon: <Award className="w-5 h-5" />, value: "98%", label: "Réussite au CEPD" },
            { icon: <Star className="w-5 h-5" />, value: "4", label: "Cycles complets" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-navy/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-gradient-gold leading-none">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-gold/20 bg-navy/60 backdrop-blur-md py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 text-gold/70 font-display text-sm uppercase tracking-[0.3em]">
              {[
                "Maternelle",
                "★",
                "Primaire",
                "★",
                "Collège",
                "★",
                "Lycée",
                "★",
                "Sections A4 · C · D",
                "★",
                "Quartier Yokoé · Lomé",
                "★",
                "Inscription 2025-2026",
                "★",
              ].map((t, i) => (
                <span key={i} className={t === "★" ? "text-gold" : ""}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-gold/50 text-[10px] tracking-[0.3em] uppercase">Défiler</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
