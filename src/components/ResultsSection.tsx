import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const examResults = [
    {
      code: "CEPD",
      title: "Certificat d'Études du Premier Degré",
      highlight: "1er, 3ème, 4ème, 5ème, 7ème",
      highlightLabel: "Rangs occupés dans le centre",
      stats: [
        { label: "Présentés", value: 50 },
        { label: "Admis", value: 49 },
        { label: "Réussite", value: 98, suffix: "%" },
      ],
    },
    {
      code: "BEPC",
      title: "Brevet d'Études du Premier Cycle",
      highlight: "54/59",
      highlightLabel: "Performance remarquable",
      stats: [
        { label: "Présentés", value: 59 },
        { label: "Admis", value: 54 },
        { label: "Réussite", value: 91, suffix: ".5%" },
      ],
    },
  ];

  return (
    <section
      id="resultats"
      className="py-28 md:py-36 bg-navy text-primary-foreground relative overflow-hidden"
    >
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-grid-gold opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold">— Bulletin Officiel</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40 mt-2">
              Session 2025
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-9 text-display-xl text-primary-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            Résultats
            <span className="italic font-light text-gradient-gold"> exceptionnels.</span>
          </motion.h2>
        </div>

        <div className="editorial-rule-light" />

        {/* CEPD + BEPC ledger */}
        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10 mt-12">
          {examResults.map((exam, i) => (
            <motion.div
              key={exam.code}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-navy p-8 md:p-12"
            >
              <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-primary-foreground/15">
                <span className="font-fraunces text-5xl md:text-6xl text-gradient-gold">
                  {exam.code}
                </span>
                <span className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
                  N° 0{i + 1}
                </span>
              </div>
              <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50 mb-2">
                {exam.title}
              </p>
              <p className="font-fraunces italic text-2xl md:text-3xl text-gold mt-6 leading-snug">
                {exam.highlight}
              </p>
              <p className="text-primary-foreground/60 text-sm mt-2">{exam.highlightLabel}</p>

              <div className="mt-10 space-y-0">
                {exam.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between border-b border-primary-foreground/10 py-3"
                  >
                    <span className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                      {stat.label}
                    </span>
                    <span className="font-fraunces text-3xl text-primary-foreground tabular-nums">
                      {inView ? <CountUp end={stat.value} suffix={stat.suffix || ""} /> : 0}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BAC ledger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 grid md:grid-cols-12 gap-8 items-end border-t border-primary-foreground/15 pt-12"
        >
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-gold" />
              <p className="number-tag text-gold">— Baccalauréat 2025</p>
            </div>
            <h3 className="font-fraunces text-3xl md:text-4xl text-primary-foreground leading-tight">
              Deuxième session<span className="text-gold">.</span>
            </h3>
            <p className="font-fraunces italic text-primary-foreground/60 text-sm mt-4">
              «&nbsp;Avec Dieu, nous accomplissons des exploits remarquables.&nbsp;»
            </p>
          </div>
          <div className="md:col-span-4 border-l border-primary-foreground/15 md:pl-8">
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              Série A4 — Littéraire
            </p>
            <p className="font-fraunces text-7xl md:text-8xl text-gradient-gold mt-3 tabular-nums">
              12<span className="text-primary-foreground/30">/15</span>
            </p>
          </div>
          <div className="md:col-span-4 border-l border-primary-foreground/15 md:pl-8">
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              Série D — Scientifique
            </p>
            <p className="font-fraunces text-7xl md:text-8xl text-gradient-gold mt-3 tabular-nums">
              29<span className="text-primary-foreground/30">/35</span>
            </p>
          </div>
        </motion.div>

        {/* footer info */}
        <div className="mt-16 editorial-rule-light" />
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-tag text-[11px] uppercase tracking-[0.25em] text-primary-foreground/60">
          <span>Informations & Inscriptions</span>
          <span className="text-gold">+228 90 07 10 65 — 91 47 74 56</span>
          <span>Ecolesolagratia2002@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
