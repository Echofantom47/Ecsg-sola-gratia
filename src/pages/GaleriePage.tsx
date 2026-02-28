import { motion } from "framer-motion";
import { useState } from "react";
import { X, Camera, Film, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import culturalDay1 from "@/assets/cultural-day-1.jpg";
import promoFlyer from "@/assets/promo-flyer.jpeg";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const photos = [
  { src: culturalDay1, alt: "Journée Traditionnelle - Semaine Culturelle", caption: "Journée Traditionnelle" },
  { src: promoFlyer, alt: "Affiche promotionnelle ECSG", caption: "Affiche Officielle" },
];

const videos = [
  { src: "/videos/cultural-video-1.mp4", title: "Semaine Culturelle - Moment 1" },
  { src: "/videos/cultural-video-2.mp4", title: "Semaine Culturelle - Moment 2" },
  { src: "/videos/cultural-video-3.mp4", title: "Semaine Culturelle - Moment 3" },
  { src: "/videos/cultural-video-4.mp4", title: "Semaine Culturelle - Moment 4" },
];

const GaleriePage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-navy">
      {/* Header */}
      <div className="bg-gradient-navy-dark border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
          <div className="ml-auto flex items-center gap-3">
            <img src={logoEcsg} alt="Logo ECSG" className="h-10 w-10 rounded-full object-cover border-2 border-gold" />
            <p className="hidden sm:block text-gradient-gold font-display font-bold">Sola Gratia</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">Vie Scolaire</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Notre Galerie
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Découvrez les moments forts de notre semaine culturelle et la vie quotidienne à l'École Chrétienne Sola Gratia
          </p>
        </motion.div>

        {/* Photos */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-5 h-5 text-gold" />
            <h2 className="font-display text-2xl font-semibold text-primary-foreground">Photos - Journée Traditionnelle</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setLightbox(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-end">
                  <p className="p-4 text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-5 h-5 text-gold" />
            <h2 className="font-display text-2xl font-semibold text-primary-foreground">Vidéos de la Semaine Culturelle</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden bg-navy-light/50"
              >
                <video
                  src={video.src}
                  className="w-full h-48 sm:h-64 object-cover"
                  controls
                  preload="metadata"
                  playsInline
                />
                <div className="p-4">
                  <p className="text-primary-foreground/70 text-sm font-medium">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-navy/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Image agrandie"
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GaleriePage;
