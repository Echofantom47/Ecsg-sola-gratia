import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCampus} alt="Campus ECSG" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-royal/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <img src={logoEcsg} alt="Logo ECSG" className="w-20 h-20 rounded-full border-3 border-gold shadow-gold" />
            <div className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent max-w-[200px]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold font-body text-sm uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Volonté • Courage • Succès
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            École Chrétienne{" "}
            <span className="text-gradient-gold">Sola Gratia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/70 italic font-display text-lg md:text-xl mb-6"
          >
            «&nbsp;Je puis tout par celui qui me fortifie.&nbsp;» — Philippiens 4:13
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Depuis plus de vingt années d'excellence éducative, nous formons une génération de leaders intègres et compétents, alliant formation académique de haut niveau et valeurs chrétiennes authentiques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#resultats"
              className="bg-gradient-gold text-primary font-semibold px-8 py-4 rounded-full text-base hover:shadow-gold transition-all hover:scale-105"
            >
              Découvrir Notre Excellence
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-full text-base hover:border-gold hover:text-gold transition-all"
            >
              Nous Contacter
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
