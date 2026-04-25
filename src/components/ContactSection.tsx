import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, User, GraduationCap } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, label: "Adresse Principale", value: "Quartier Yokoé, Lomé — République Togolaise" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Niveaux d'Enseignement", value: "Maternelle, Primaire, Collège et Lycée" },
    { icon: <Phone className="w-5 h-5" />, label: "Contact Téléphonique", value: "+228 90 07 70 54 / +228 91 47 74 56" },
    { icon: <Mail className="w-5 h-5" />, label: "Adresse Électronique", value: "Ecolesolagratia2002@gmail.com" },
  ];

  const practicalInfo = [
    { icon: <Clock className="w-5 h-5" />, label: "Horaires d'Ouverture", lines: ["Lundi à Vendredi : 7h00 - 14h30", "Samedi : 8h00 - 12h00", "Dimanche : Fermé"] },
    { icon: <User className="w-5 h-5" />, label: "Fondateur", lines: ["Monsieur DOSSEH Kokou Beaugars"] },
  ];

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold-dark uppercase tracking-[0.3em] text-sm font-semibold mb-4">Nous Rejoindre</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Contactez Notre Institution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Notre équipe administrative demeure à votre entière disposition pour toutes les informations concernant nos programmes et les modalités d'inscription
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 lg:col-span-1"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">École Chrétienne Sola Gratia</h3>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-card rounded-xl shadow-sm border border-border hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gradient-navy flex items-center justify-center text-gold shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-foreground font-medium text-sm">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 pt-4">
              <a
                href="tel:+22890077054"
                className="flex-1 bg-gradient-gold text-primary font-semibold py-3 rounded-full text-center text-sm hover:shadow-gold transition-all"
              >
                Nous Appeler
              </a>
              <a
                href="mailto:Ecolesolagratia2002@gmail.com"
                className="flex-1 bg-gradient-navy text-primary-foreground font-semibold py-3 rounded-full text-center text-sm hover:opacity-90 transition-all"
              >
                Nous Écrire
              </a>
            </div>
          </motion.div>

          {/* Practical Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {practicalInfo.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-cream rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map embed */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm h-[300px] sm:h-[360px]">
              <iframe
                title="Localisation École Chrétienne Sola Gratia"
                src="https://www.google.com/maps?q=%C3%89cole+Chr%C3%A9tienne+Sola+Gratia+Yokoe+Lom%C3%A9+Togo&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=%C3%89cole+Chr%C3%A9tienne+Sola+Gratia+Yokoe+Lom%C3%A9+Togo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-navy text-primary-foreground font-semibold py-3 rounded-full text-sm hover:opacity-90 transition-all"
              >
                <MapPin className="w-4 h-4 text-gold" />
                Itinéraire Google Maps
              </a>
              <div className="p-4 bg-gradient-navy rounded-full text-center flex items-center justify-center gap-3">
                <p className="text-gold font-display font-semibold text-sm">23+ Années</p>
                <span className="text-primary-foreground/40">•</span>
                <p className="text-primary-foreground/70 text-xs">Depuis 2002</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
