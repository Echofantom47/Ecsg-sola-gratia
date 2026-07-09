import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import classroomImg from "@/assets/affiche-eduquer.png";

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
    <section
      id="apropos"
      className="py-28 md:py-36 bg-background relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative">
        {/* Chapter header */}
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold-dark">— Chapitre 02</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
              Notre Histoire
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-9 text-display-xl text-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            Une institution
            <span className="italic font-light text-gold-dark"> d'exception.</span>
          </motion.h2>
        </div>

        <div className="editorial-rule mb-16" />

        {/* Editorial body — 3 columns */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <img
                src={classroomImg}
                alt="Affiche officielle - Éduquer pour la gloire de Dieu"
                className="w-full object-cover aspect-[3/4] hover:scale-[1.02] transition-all duration-700"
              />
              <div className="mt-3 flex items-center justify-between px-1 text-foreground/60 font-mono-tag text-[10px] uppercase tracking-[0.25em]">
                <span>Fig. 02 — Affiche Officielle</span>
                <span>Yokoé, Lomé</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 lg:pl-8 lg:border-l border-foreground/10"
          >
            <p className="number-tag text-gold-dark mb-4">§ 01 — Préambule</p>
            <p className="font-fraunces text-2xl md:text-3xl leading-snug text-foreground first-letter:font-fraunces first-letter:text-7xl first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-gold-dark">
              Au cœur de Yokoé, à Lomé, l'École Chrétienne Sola Gratia s'impose comme un phare d'excellence dans le paysage éducatif togolais.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div>
                <p className="number-tag text-gold-dark mb-3">§ 02</p>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  Notre philosophie pédagogique repose sur une approche holistique où rigueur intellectuelle, épanouissement spirituel et développement du caractère se conjuguent harmonieusement pour forger des personnalités d'exception.
                </p>
              </div>
              <div>
                <p className="number-tag text-gold-dark mb-3">§ 03</p>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  Les performances remarquables obtenues par nos apprenants aux examens nationaux — CEPD, BEPC et Baccalauréat — constituent la preuve tangible de la qualité de notre encadrement.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-foreground/10 pt-6">
              <span className="font-fraunces italic text-5xl text-gold-dark leading-none">23+</span>
              <p className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-foreground/60 leading-relaxed">
                Années d'excellence<br />
                <span className="text-foreground/40">Fondée le 16 sept. 2002 par M. DOSSEH Kokou Beaugars</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission ledger — full bleed dark */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-navy text-primary-foreground relative overflow-hidden"
        >
          <div className="grain-overlay" />
          <div className="relative grid lg:grid-cols-12 gap-10 p-10 md:p-16 lg:p-20">
            <div className="lg:col-span-5">
              <p className="number-tag text-gold mb-6">— Notre Mission</p>
              <h3 className="text-display-xl text-primary-foreground text-5xl md:text-6xl">
                Former une génération
                <span className="italic font-light text-gradient-gold"> d'excellence.</span>
              </h3>
              <p className="mt-8 font-fraunces italic text-lg text-primary-foreground/70 border-l border-gold pl-5 leading-snug">
                «&nbsp;Intègre, compétente, inspirée par les valeurs chrétiennes authentiques et préparée aux défis du monde contemporain.&nbsp;»
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-8 lg:border-l border-primary-foreground/15">
              <ol className="space-y-0">
                {missions.map((m, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                    className="ticker-row-dark group"
                  >
                    <span className="font-mono-tag text-[10px] tracking-[0.2em] text-gold w-8 shrink-0">
                      M.{String(i + 1).padStart(2, "0")}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-gold/70 shrink-0" />
                    <p className="text-primary-foreground/80 text-sm md:text-base font-fraunces group-hover:text-gold transition-colors">
                      {m}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
