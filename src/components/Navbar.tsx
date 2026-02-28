import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Résultats 2025", href: "#resultats" },
  { label: "À Propos", href: "#apropos" },
  { label: "Nos Valeurs", href: "#valeurs" },
  { label: "Programmes", href: "#programmes" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-navy shadow-elegant py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#accueil" className="flex items-center gap-3">
          <img src={logoEcsg} alt="Logo ECSG" className="h-12 w-12 rounded-full object-cover border-2 border-gold" />
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold text-primary-foreground leading-tight">École Chrétienne</p>
            <p className="text-gradient-gold font-display text-base font-bold">Sola Gratia</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors rounded-md hover:bg-primary-foreground/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+22890071065"
            className="ml-3 flex items-center gap-2 bg-gradient-gold text-primary font-semibold px-4 py-2 rounded-full text-sm hover:shadow-gold transition-all"
          >
            <Phone className="w-4 h-4" />
            Nous Appeler
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-navy-dark border-t border-primary-foreground/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/5 rounded-md transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+22890071065"
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-gold text-primary font-semibold px-4 py-3 rounded-full text-sm"
              >
                <Phone className="w-4 h-4" />
                +228 90 07 10 65
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
