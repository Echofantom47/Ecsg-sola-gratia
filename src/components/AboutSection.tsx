import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, CheckCircle, Quote } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";

const missions = [
  "Enseignement de qualité conforme aux programmes officiels du Togo",
  "Intégration des valeurs bibliques dans le processus éducatif",
  "Développement de l'excellence académique et de l'esprit de recherche",
  "Formation de citoyens responsables et engagés",
  "Accompagnement personnalisé de chaque élève",
  "Préparation rigoureuse aux examens nationaux",
  "Promotion du leadership, de l'intégrité et du service",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-32 md:py-40 bg-background relative overflow-hidden" ref={ref}>
      {/* HUGE background number */}
      <div className="absolute -top-10 right-0 pointer-events-none select-none opacity-[0.04]">
        <span className="font-serif-display italic text-[40vw] md:text-[28vw] leading-none text-primary font-bold">
          23
        </span>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Big eyebrow header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 mb-20"
        >
          <div className="lg:col-span-4">
            <p className="text-gold-dark uppercase tracking-[0.4em] text-xs font-semibold mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-dark" />
              Notre Histoire
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight">
              Une institution
              <span className="block font-serif-display italic font-light text-gold-dark">
                d'exception.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Image + text large */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              <img
                src={classroomImg}
                alt="Salle de classe ECSG"
                className="rounded-3xl shadow-mega w-full object-cover aspect-[4/3]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-4 md:-right-12 bg-gradient-gold text-primary font-display font-bold p-6 md:p-8 rounded-2xl shadow-glow-gold rotate-[-3deg]">
                <p className="text-5xl md:text-6xl leading-none">23+</p>
                <p className="text-xs md:text-sm font-body font-medium uppercase tracking-widest mt-2">
                  Années d'Excellence
                </p>
              </div>
              {/* Decorative quote card */}
              <div className="absolute -top-6 -left-6 md:-left-10 hidden md:block bg-card border border-border shadow-elegant p-5 rounded-xl max-w-[220px]">
                <Quote className="w-5 h-5 text-gold mb-2" />
                <p className="text-foreground/80 text-xs italic font-display leading-relaxed">
                  Fondée le 16 septembre 2002 par M. DOSSEH Kokou Beaugars.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-foreground text-xl md:text-2xl font-display leading-relaxed">
              Au cœur de Yokoé, à Lomé, l'École Chrétienne Sola Gratia s'impose comme un phare d'excellence dans le paysage éducatif togolais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre philosophie pédagogique repose sur une approche holistique où rigueur intellectuelle, épanouissement spirituel et développement du caractère se conjuguent harmonieusement pour forger des personnalités d'exception.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Les performances remarquables obtenues par nos apprenants aux examens nationaux — CEPD, BEPC et Baccalauréat — constituent la preuve tangible de la qualité de notre encadrement.
            </p>
          </motion.div>
        </div>

        {/* Mission - massive card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-gradient-navy rounded-3xl p-10 md:p-16 lg:p-20 overflow-hidden shadow-mega"
        >
          <div className="absolute inset-0 bg-grid-gold opacity-30 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
                  Notre Mission
                </p>
              </div>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                Former une génération
                <span className="block font-serif-display italic font-light text-gradient-gold">
                  d'excellence.
                </span>
              </h3>
              <p className="text-primary-foreground/70 italic font-display text-base md:text-lg leading-relaxed border-l-2 border-gold pl-5">
                «&nbsp;Intègre, compétente, inspirée par les valeurs chrétiennes authentiques et préparée aux défis du monde contemporain.&nbsp;»
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {missions.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-primary-foreground/75 text-sm leading-relaxed">{m}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
