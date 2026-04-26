import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const navLinks = [
  { label: "Accueil", href: "/", isRoute: true },
  { label: "À Propos", href: "/a-propos", isRoute: true },
  { label: "Programmes", href: "/programmes", isRoute: true },
  { label: "Versets", href: "/versets", isRoute: true },
  { label: "Galerie", href: "/galerie", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="flex items-center gap-3">
          <img src={logoEcsg} alt="Logo ECSG" className="h-12 w-12 rounded-full object-cover border-2 border-gold" />
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold text-primary-foreground leading-tight">École Chrétienne</p>
            <p className="text-gradient-gold font-display text-base font-bold">Sola Gratia</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary-foreground/5 ${
                location.pathname === link.href
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
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
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md transition-colors font-medium ${
                    location.pathname === link.href
                      ? "text-gold bg-primary-foreground/5"
                      : "text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/5"
                  }`}
                >
                  {link.label}
                </Link>
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
