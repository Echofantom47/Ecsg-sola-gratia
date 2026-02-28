import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galerie" className="py-24 bg-gradient-navy relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">Vie Scolaire</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Galerie
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Revivez les moments forts de notre semaine culturelle
          </p>
        </motion.div>

        {/* 2 vidéos aperçu */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            { src: "/videos/cultural-video-1.mp4", title: "Semaine Culturelle - Moment 1" },
            { src: "/videos/cultural-video-2.mp4", title: "Semaine Culturelle - Moment 2" },
          ].map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden bg-navy-light/50"
            >
              <video
                src={video.src}
                className="w-full h-48 sm:h-64 object-cover"
                controls
                preload="metadata"
                playsInline
              />
              <div className="p-3">
                <p className="text-primary-foreground/70 text-sm font-medium">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
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
