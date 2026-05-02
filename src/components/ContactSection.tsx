import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, User, GraduationCap, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, label: "Adresse", value: "Quartier Yokoé, Lomé — République Togolaise" },
    { icon: <GraduationCap className="w-4 h-4" />, label: "Niveaux", value: "Maternelle, Primaire, Collège, Lycée" },
    { icon: <Phone className="w-4 h-4" />, label: "Téléphone", value: "+228 90 07 70 54 / +228 91 47 74 56" },
    { icon: <Mail className="w-4 h-4" />, label: "E-mail", value: "Ecolesolagratia2002@gmail.com" },
    { icon: <Clock className="w-4 h-4" />, label: "Horaires", value: "Lun-Ven 7h-14h30 · Sam 8h-12h" },
    { icon: <User className="w-4 h-4" />, label: "Fondateur", value: "Monsieur DOSSEH Kokou Beaugars" },
  ];

  return (
    <section
      id="contact"
      className="py-28 md:py-36 bg-background relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold-dark">— Chapitre 08</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
              Nous Rejoindre
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-9 text-display-xl text-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            Contactez
            <span className="italic font-light text-gold-dark"> notre institution.</span>
          </motion.h2>
        </div>

        <div className="editorial-rule mb-12" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT — info ledger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="font-fraunces text-2xl md:text-3xl text-foreground/90 leading-snug mb-8">
              Notre équipe administrative demeure à votre <span className="italic text-gold-dark">entière disposition</span> pour toutes les informations concernant nos programmes et les modalités d'inscription.
            </p>

            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              {contactInfo.map((c, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 py-4 items-baseline">
                  <span className="col-span-1 text-gold-dark mt-1">{c.icon}</span>
                  <span className="col-span-3 font-mono-tag text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    {c.label}
                  </span>
                  <span className="col-span-8 font-fraunces text-base md:text-lg text-foreground">
                    {c.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <a
                href="tel:+22890077054"
                className="group inline-flex items-center justify-between bg-foreground text-background px-5 py-4 font-mono-tag text-[11px] uppercase tracking-[0.25em] hover:bg-gold-dark transition-colors"
              >
                Appeler
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="mailto:Ecolesolagratia2002@gmail.com"
                className="group inline-flex items-center justify-between border border-foreground text-foreground px-5 py-4 font-mono-tag text-[11px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
              >
                Écrire
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden h-[400px] md:h-[560px] corner-frame">
              <iframe
                title="Localisation École Chrétienne Sola Gratia"
                src="https://www.google.com/maps?q=%C3%89cole+Chr%C3%A9tienne+Sola+Gratia+Yokoe+Lom%C3%A9+Togo&output=embed"
                className="absolute inset-0 w-full h-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-foreground font-mono-tag text-[10px] uppercase tracking-[0.3em] bg-background/80 backdrop-blur px-3 py-2">
                <span>Carte 01 — Yokoé, Lomé</span>
                <span className="text-gold-dark">06°08′N · 01°13′E</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=%C3%89cole+Chr%C3%A9tienne+Sola+Gratia+Yokoe+Lom%C3%A9+Togo"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 font-mono-tag text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-gold-dark"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hover-underline">Ouvrir l'itinéraire Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
