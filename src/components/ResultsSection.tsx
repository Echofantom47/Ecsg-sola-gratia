import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp, BookOpen } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  }),
};

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
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

import { useState, useEffect } from "react";

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const examResults = [
    {
      title: "Certificat d'Études du Premier Degré",
      icon: <BookOpen className="w-6 h-6" />,
      highlight: "1er, 3ème, 4ème, 5ème, 7ème",
      highlightLabel: "Rangs occupés dans le centre",
      stats: [
        { label: "Candidats présentés", value: 50 },
        { label: "Candidats admis", value: 49 },
        { label: "Taux de réussite", value: 98, suffix: "%" },
      ],
    },
    {
      title: "Brevet d'Études du Premier Cycle",
      icon: <Award className="w-6 h-6" />,
      highlight: "54/59",
      highlightLabel: "Performance remarquable",
      stats: [
        { label: "Candidats présentés", value: 59 },
        { label: "Candidats admis", value: 54 },
        { label: "Taux de réussite", value: 91, suffix: ".5%" },
      ],
    },
  ];

  return (
    <section id="resultats" className="py-24 bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-royal blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} custom={0} className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Excellence Académique
          </motion.p>
          <motion.h2 variants={fadeInUp} custom={1} className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Résultats Exceptionnels 2025
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Des performances remarquables qui témoignent de notre engagement envers l'excellence académique
          </motion.p>
        </motion.div>

        {/* Rentrée Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 p-6 md:p-8 rounded-2xl border border-gold/30 bg-gold/5 backdrop-blur-sm text-center"
        >
          <p className="text-gold font-display text-lg font-semibold mb-1">ÉCOLE CHRÉTIENNE SOLA GRATIA</p>
          <p className="text-primary-foreground/60 text-sm uppercase tracking-widest mb-3">Institution d'Excellence Éducative</p>
          <p className="text-primary-foreground/80 text-base">
            Formation complète de la Maternelle au Lycée — Sections Littéraires et Scientifiques
          </p>
          <div className="mt-4 inline-block bg-gradient-gold text-primary font-semibold px-6 py-2 rounded-full text-sm">
            Rentrée Académique 2025-2026
          </div>
        </motion.div>

        {/* Exam result cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {examResults.map((exam, i) => (
            <motion.div
              key={exam.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:border-gold/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gold/10 text-gold">{exam.icon}</div>
                <h3 className="font-display text-lg font-bold text-primary-foreground">{exam.title}</h3>
              </div>
              <div className="text-center my-6">
                <p className="text-5xl font-display font-bold text-gradient-gold">{exam.highlight}</p>
                <p className="text-primary-foreground/50 text-sm mt-2">{exam.highlightLabel}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {exam.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-primary-foreground">
                      {inView ? <CountUp end={stat.value} suffix={stat.suffix || ""} /> : 0}
                    </p>
                    <p className="text-xs text-primary-foreground/50 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BAC Results */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-primary-foreground/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-gold" />
            <h3 className="font-display text-xl font-bold text-primary-foreground">Baccalauréat — Session 2025</h3>
          </div>
          <p className="text-primary-foreground/50 text-sm uppercase tracking-widest mb-6">Deuxième Session</p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-md mx-auto">
            <div>
              <p className="text-primary-foreground/60 text-sm mb-2">Série A4 (Littéraire)</p>
              <p className="text-4xl font-display font-bold text-gradient-gold">12/15</p>
            </div>
            <div>
              <p className="text-primary-foreground/60 text-sm mb-2">Série D (Scientifique)</p>
              <p className="text-4xl font-display font-bold text-gradient-gold">29/35</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 italic font-display">
              «&nbsp;Avec Dieu, nous accomplissons des exploits remarquables&nbsp;»
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-primary-foreground/50 text-sm mb-2">Informations et Inscriptions</p>
          <p className="text-gold font-semibold text-lg">+228 90 07 10 65 / +228 91 47 74 56</p>
          <p className="text-primary-foreground/50 text-sm mt-1">Ecolesolagratia2002@gmail.com</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
