import { motion } from "framer-motion";
import { useState } from "react";
import { X, Camera, Film, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import culturalDay1 from "@/assets/cultural-day-1.jpg";
import promoFlyer from "@/assets/promo-flyer.jpeg";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const photos = [
  { src: culturalDay1, alt: "Journée Traditionnelle - Semaine Culturelle", caption: "Journée Traditionnelle" },
  { src: promoFlyer, alt: "Affiche promotionnelle ECSG", caption: "Affiche Officielle" },
];

const videos2025 = [
  { src: "/videos/cultural-2025-1.mp4", title: "Semaine Culturelle 2025 - Moment fort" },
];

const videosPrevious = [
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
          <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-6">
            Découvrez les moments forts de notre semaine culturelle et la vie quotidienne à l'École Chrétienne Sola Gratia
          </p>
          <a
            href="https://www.tiktok.com/@ecolechretiennesolagrat6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-full transition-colors text-sm font-medium"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.28a8.26 8.26 0 004.76 1.5v-3.45a4.85 4.85 0 01-1-.64z"/>
            </svg>
            Suivez-nous sur TikTok
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Semaine Culturelle 2025 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-5 h-5 text-gold" />
            <h2 className="font-display text-2xl font-semibold text-primary-foreground">
              Semaine Culturelle 2025
              <span className="text-primary-foreground/40 text-base ml-3 font-normal">30 mars — 1er avril</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {videos2025.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden bg-navy-light/50 ring-2 ring-gold/30"
              >
                <div className="absolute top-3 left-3 z-10 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                  NOUVEAU 2025
                </div>
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

        {/* Vidéos années précédentes */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-5 h-5 text-gold" />
            <h2 className="font-display text-2xl font-semibold text-primary-foreground">Vidéos — Années Précédentes</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {videosPrevious.map((video, i) => (
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
