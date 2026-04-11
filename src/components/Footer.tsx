import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoEcsg} alt="Logo ECSG" className="w-12 h-12 rounded-full border-2 border-gold" />
              <div>
                <p className="font-display text-sm font-bold text-primary-foreground">École Chrétienne</p>
                <p className="text-gradient-gold font-display font-bold">Sola Gratia</p>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-4">
              Institution d'excellence éducative depuis 2002, formant des leaders intègres guidés par les valeurs chrétiennes authentiques.
            </p>
            <p className="text-gold/70 italic text-sm font-display">
              «&nbsp;Par la seule grâce de Dieu, nous accomplissons des exploits remarquables&nbsp;»
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Nos Programmes</h4>
            <ul className="space-y-2 text-primary-foreground/50 text-sm">
              <li><Link to="/programmes" className="hover:text-gold transition-colors">École Maternelle</Link></li>
              <li><Link to="/programmes" className="hover:text-gold transition-colors">École Primaire</Link></li>
              <li><Link to="/programmes" className="hover:text-gold transition-colors">Collège d'Excellence</Link></li>
              <li><Link to="/programmes" className="hover:text-gold transition-colors">Lycée Sola Gratia</Link></li>
              <li className="text-gold/60">Sections A4, C et D</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/50 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
                <span>Quartier Yokoé, Lomé<br />République Togolaise</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
                <span>+228 90 07 10 65<br />+228 91 47 74 56</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
                <span>Ecolesolagratia2002@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Values + Social */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Nos Valeurs</h4>
            <ul className="space-y-2 text-primary-foreground/50 text-sm mb-6">
              <li>Excellence Académique</li>
              <li>Intégrité et Caractère</li>
              <li>Foi et Spiritualité</li>
              <li>Leadership et Service</li>
              <li>Innovation Pédagogique</li>
            </ul>
            <h4 className="font-display font-bold text-primary-foreground mb-3">Suivez-nous</h4>
            <a
              href="https://www.tiktok.com/@ecolechretiennesolagrat6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-gold transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.28a8.26 8.26 0 004.76 1.5v-3.45a4.85 4.85 0 01-1-.64z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-primary-foreground/40 text-sm italic font-display">
              «&nbsp;Je puis tout par celui qui me fortifie&nbsp;» — Philippiens 4:13
            </p>
            <a
              href="https://echofantom47.github.io/solagratia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold text-xs transition-colors"
            >
              Voir l'ancien site
            </a>
          </div>
          <div className="text-right">
            <p className="text-primary-foreground/30 text-xs">
              © 2025 École Chrétienne Sola Gratia. Tous droits réservés.
            </p>
            <p className="text-primary-foreground/30 text-xs mt-1">
              Développé avec excellence par <span className="text-gold/60 font-semibold">FNT Fantom Network Technologies</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
