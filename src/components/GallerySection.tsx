import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import culturalDay1 from "@/assets/cultural-day-1.jpg";
import promoFlyer from "@/assets/promo-flyer.jpeg";
import classroom from "@/assets/classroom.jpg";

const photos = [
  { src: culturalDay1, label: "Journée Traditionnelle", tag: "Semaine Culturelle" },
  { src: promoFlyer, label: "Affiche Officielle", tag: "Communication" },
  { src: classroom, label: "Vie de Classe", tag: "Quotidien" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galerie" className="py-24 bg-gradient-navy relative overflow-hidden" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-dark blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header — left aligned for variety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid lg:grid-cols-3 gap-8 mb-14 items-end"
        >
          <div className="lg:col-span-2">
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Vie Scolaire
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Les moments qui marquent <br className="hidden md:block" />
              <span className="text-gradient-gold">notre école</span>
            </h2>
            <p className="text-primary-foreground/60 max-w-xl">
              Photographies de la vie quotidienne, des temps forts culturels et de l'engagement de nos élèves.
            </p>
          </div>
          <div className="hidden lg:flex justify-end">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary font-semibold px-6 py-3 rounded-full hover:shadow-gold transition-all"
            >
              Galerie complète
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Asymmetric photo grid — 3 cols, first one tall */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[520px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
              className={`group relative rounded-2xl overflow-hidden ring-1 ring-gold/20 ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full min-h-[220px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
                  {photo.tag}
                </p>
                <p className="text-primary-foreground font-display text-lg font-bold">
                  {photo.label}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 lg:hidden"
        >
          <Link
            to="/galerie"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary font-semibold px-8 py-3 rounded-full hover:shadow-gold transition-all"
          >
            Voir toute la galerie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
