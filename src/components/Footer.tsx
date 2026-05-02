import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden pt-20 pb-8">
      <div className="grain-overlay" />
      <div className="container mx-auto px-4 relative">
        {/* Mega title */}
        <div className="grid lg:grid-cols-12 gap-6 items-end pb-12 border-b border-primary-foreground/15">
          <div className="lg:col-span-3">
            <p className="number-tag text-gold">— Colophon</p>
            <p className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40 mt-2">
              Édition 2025
            </p>
          </div>
          <h2 className="lg:col-span-9 text-display-xl text-primary-foreground text-[14vw] md:text-[9vw] lg:text-[7vw]">
            Sola
            <span className="italic font-light text-gradient-gold"> Gratia.</span>
          </h2>
        </div>

        {/* Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div>
            <p className="number-tag text-gold mb-4">— L'Institution</p>
            <p className="font-fraunces text-lg leading-snug text-primary-foreground/85 mb-4">
              Institution d'excellence éducative depuis 2002, formant des leaders intègres guidés par les valeurs chrétiennes authentiques.
            </p>
            <p className="font-fraunces italic text-sm text-gold/80">
              «&nbsp;Par la seule grâce de Dieu, nous accomplissons des exploits remarquables.&nbsp;»
            </p>
          </div>

          <div>
            <p className="number-tag text-gold mb-4">— Programmes</p>
            <ul className="space-y-2.5 font-fraunces text-base">
              {[
                ["École Maternelle", "/programmes"],
                ["École Primaire", "/programmes"],
                ["Collège d'Excellence", "/programmes"],
                ["Lycée Sola Gratia", "/programmes"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors hover-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="text-gold/70 font-mono-tag text-[11px] uppercase tracking-[0.25em] pt-2">
                Sections A4, C et D
              </li>
            </ul>
          </div>

          <div>
            <p className="number-tag text-gold mb-4">— Contact</p>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
                <span className="font-fraunces">Quartier Yokoé, Lomé<br />République Togolaise</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
                <span className="font-fraunces tabular-nums">+228 90 07 10 65<br />+228 91 47 74 56</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
                <span className="font-fraunces break-all">Ecolesolagratia2002@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="number-tag text-gold mb-4">— Valeurs</p>
            <ul className="space-y-2 font-fraunces text-base text-primary-foreground/70">
              <li>Excellence Académique</li>
              <li>Intégrité & Caractère</li>
              <li>Foi & Spiritualité</li>
              <li>Leadership & Service</li>
              <li>Innovation Pédagogique</li>
            </ul>
            <p className="number-tag text-gold mt-6 mb-3">— Suivez-nous</p>
            <a
              href="https://www.tiktok.com/@ecolechretiennesolagrat6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold font-mono-tag text-[11px] uppercase tracking-[0.25em] transition-colors"
            >
              TikTok
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/15 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-tag text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
          <p className="not-italic">
            «&nbsp;Je puis tout par celui qui me fortifie.&nbsp;» — Philippiens 4:13
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="https://echofantom47.github.io/solagratia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              Voir l'ancien site →
            </a>
            <span>© 2025 ECSG</span>
            <span className="text-primary-foreground/35">
              Développé avec excellence par <span className="text-gold/70">FNT Fantom Network Technologies</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
