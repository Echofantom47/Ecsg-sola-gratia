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
    <section
      id="galerie"
      className="py-32 md:py-40 bg-gradient-navy relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative blobs + grid */}
      <div className="absolute inset-0 bg-grid-gold opacity-30 mask-fade-b pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-gold blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-dark blur-3xl" />
      </div>

      {/* Big background word */}
      <span className="absolute -top-10 left-0 right-0 text-center font-serif-display italic text-[24vw] leading-none text-primary-foreground/[0.04] select-none pointer-events-none">
        Galerie
      </span>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid lg:grid-cols-12 gap-8 mb-16 items-end"
        >
          <div className="lg:col-span-8">
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6 flex items-center gap-3">
              <Sparkles className="w-4 h-4" /> Vie Scolaire
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] tracking-tight">
              Les moments
              <span className="block font-serif-display italic font-light text-gradient-gold">
                qui marquent.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-primary-foreground/60 mb-6">
              Photographies de la vie quotidienne, des temps forts culturels et de l'engagement de nos élèves.
            </p>
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary font-semibold px-6 py-3 rounded-full hover:shadow-glow-gold transition-all"
            >
              Galerie complète
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Asymmetric photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[640px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
              className={`group relative rounded-3xl overflow-hidden ring-1 ring-gold/20 ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full min-h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-2">
                  {photo.tag}
                </p>
                <p className="text-primary-foreground font-display text-2xl md:text-3xl font-bold leading-tight">
                  {photo.label}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
