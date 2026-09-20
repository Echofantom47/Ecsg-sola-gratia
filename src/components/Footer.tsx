import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoEcsg from "@/assets/logo-ecsg.jpg";
import { school } from "@/data/siteContent";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-foreground pb-8 pt-16 text-background md:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 border-b border-background/20 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="flex items-center gap-4 lg:col-span-4"><img src={logoEcsg} alt="Logo de l’École Chrétienne Sola Gratia" className="h-16 w-16 object-contain" /><div><p className="font-display text-xl font-semibold">École Chrétienne<br />Sola Gratia</p><p className="mt-2 text-xs font-semibold uppercase text-background/55">{school.motto}</p></div></div>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl lg:col-span-8">Éduquer pour la gloire de Dieu. Former pour la vie.</h2>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="section-label mb-4 text-background/50">L'institution</p><p className="text-base leading-7 text-background/75">Fondée le {school.founded} à Lomé, l’école accueille les élèves de la maternelle au lycée.</p>
          </div>

          <div>
            <p className="section-label mb-4 text-background/50">Programmes</p>
            <ul className="space-y-2.5 text-base">
              {[
                ["École Maternelle", "/programmes/maternelle"], ["École Primaire", "/programmes/primaire"], ["Collège", "/programmes/college"], ["Lycée", "/programmes/lycee"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs font-semibold uppercase text-background/50">Sections A4, C et D</li>
            </ul>
          </div>

          <div>
            <p className="section-label mb-4 text-background/50">Contact</p>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>{school.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" /><span>{school.phones[0]}<br />{school.phones[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" /><span className="break-all">{school.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label mb-4 text-background/50">Navigation</p><ul className="space-y-2 text-base text-background/70"><li><Link to="/admissions">Admissions</Link></li><li><Link to="/actualites">Actualités</Link></li><li><Link to="/evenements">Événements</Link></li><li><Link to="/galerie">Galerie</Link></li><li><Link to="/versets">Bible</Link></li></ul><p className="section-label mb-3 mt-6 text-background/50">Suivez-nous</p>
            <a
              href="https://www.tiktok.com/@ecolechretiennesolagrat6"
              target="_blank"
              rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
            >
              TikTok
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-background/20 pt-6 text-xs text-background/50 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/mentions-legales">Mentions légales</Link><Link to="/confidentialite">Confidentialité</Link></div><div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://echofantom47.github.io/solagratia/"
              target="_blank"
              rel="noopener noreferrer"
               className="transition-colors hover:text-background"
            >
              Voir l'ancien site →
            </a>
            <span>© 2026 ECSG</span><span>Développé avec excellence par FNT Fantom Network Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
