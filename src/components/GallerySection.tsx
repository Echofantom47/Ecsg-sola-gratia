import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import culturalDay1 from "@/assets/cultural-day-1.jpg";
import promoFlyer from "@/assets/promo-flyer.jpeg";
import classroom from "@/assets/classroom.jpg";

const photos = [
  { src: culturalDay1, label: "Journée Traditionnelle", tag: "Semaine Culturelle", num: "01" },
  { src: promoFlyer, label: "Affiche Officielle", tag: "Communication", num: "02" },
  { src: classroom, label: "Vie de Classe", tag: "Quotidien", num: "03" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="galerie"
      className="py-28 md:py-36 bg-cream relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold-dark">— Chapitre 06</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
              Vie Scolaire
            </p>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-display-xl text-foreground text-[12vw] md:text-[7vw] lg:text-[5.5vw]"
          >
            Les moments
            <span className="italic font-light text-gold-dark"> qui marquent.</span>
          </motion.h2>
          <div className="lg:col-span-2 flex lg:justify-end">
            <Link
              to="/galerie"
              className="group inline-flex items-center gap-2 font-mono-tag text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-gold-dark"
            >
              <span className="hover-underline">Galerie complète</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="editorial-rule mb-8" />

        {/* Asymmetric magazine grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {/* Big left */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 group relative overflow-hidden aspect-[4/5] md:aspect-[5/6]"
          >
            <img
              src={photos[0].src}
              alt={photos[0].label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-primary-foreground/90 font-mono-tag text-[10px] uppercase tracking-[0.25em]">
              <span>Fig. {photos[0].num}</span>
              <span>{photos[0].tag}</span>
            </div>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent p-6 md:p-8">
              <p className="font-fraunces text-3xl md:text-5xl text-primary-foreground leading-tight">
                {photos[0].label}<span className="text-gold">.</span>
              </p>
            </figcaption>
          </motion.figure>

          {/* Right column */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-5">
            {photos.slice(1).map((p, i) => (
              <motion.figure
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="group relative overflow-hidden aspect-[4/3] flex-1"
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-primary-foreground/90 font-mono-tag text-[10px] uppercase tracking-[0.25em]">
                  <span>Fig. {p.num}</span>
                  <span>{p.tag}</span>
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent p-5">
                  <p className="font-fraunces text-2xl md:text-3xl text-primary-foreground leading-tight">
                    {p.label}<span className="text-gold">.</span>
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
