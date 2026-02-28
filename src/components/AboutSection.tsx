import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, CheckCircle } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";

const missions = [
  "Dispensation d'un enseignement de qualité conforme aux programmes officiels de la République Togolaise",
  "Intégration harmonieuse des valeurs bibliques dans l'ensemble du processus éducatif",
  "Développement de l'excellence académique et de l'esprit de recherche chez nos apprenants",
  "Formation de citoyens responsables, éthiques et engagés dans le développement communautaire",
  "Accompagnement personnalisé de chaque élève dans la découverte de ses talents",
  "Préparation méthodique et rigoureuse aux examens nationaux et concours d'entrée",
  "Promotion des valeurs de leadership, d'intégrité et de service",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">Notre Histoire</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            À Propos de Notre Institution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une tradition d'excellence éducative ancrée dans les valeurs chrétiennes authentiques, formant des leaders depuis plus de deux décennies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={classroomImg}
                alt="Salle de classe ECSG"
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-primary font-display font-bold px-6 py-4 rounded-xl shadow-gold">
                <p className="text-3xl">23+</p>
                <p className="text-sm font-body font-normal">Années d'Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-foreground/80 leading-relaxed">
              Fondée le 16 septembre 2002, l'École Chrétienne Sola Gratia s'impose aujourd'hui comme une référence incontournable dans le paysage éducatif togolais. Située dans le dynamique quartier de Yokoé à Lomé, notre institution privée confessionnelle s'engage depuis plus de vingt années à dispenser une formation d'excellence.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Notre vision éducative s'articule autour d'une philosophie pédagogique holistique qui intègre harmonieusement l'excellence académique, la formation spirituelle et le développement du caractère.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Les résultats exceptionnels obtenus par nos élèves aux différents examens nationaux témoignent de l'efficacité de notre approche pédagogique et confirment notre engagement indéfectible envers l'excellence éducative.
            </p>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-cream rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-gold-dark" />
            <h3 className="font-display text-xl font-bold text-foreground">Notre Mission Éducative</h3>
          </div>
          <p className="text-accent font-display italic text-lg mb-8 border-l-4 border-gold pl-4">
            «&nbsp;Former une génération d'excellence, intègre et compétente, inspirée par les valeurs chrétiennes authentiques et préparée aux défis du monde contemporain&nbsp;»
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {missions.map((m, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                <p className="text-foreground/70 text-sm leading-relaxed">{m}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
