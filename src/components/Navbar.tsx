import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logoEcsg from "@/assets/logo-ecsg.jpg";

const navLinks = [
  { num: "01", label: "Accueil", href: "/" },
  { num: "02", label: "À Propos", href: "/a-propos" },
  { num: "03", label: "Programmes", href: "/programmes" },
  { num: "04", label: "Versets", href: "/versets" },
  { num: "05", label: "Galerie", href: "/galerie" },
  { num: "06", label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-foreground/10 shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-foreground/5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoEcsg}
            alt="Logo ECSG"
            className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover ring-1 ring-gold/40"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-mono-tag text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Est. 2002 — Lomé
            </span>
            <span className="font-fraunces text-lg font-medium tracking-tight mt-1 text-foreground">
              Sola Gratia<span className="text-gold">.</span>
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`group px-3 py-2 text-sm transition-colors flex items-baseline gap-1.5 ${
                  active
                    ? "text-gold"
                    : scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                <span className="font-mono-tag text-[9px] opacity-50">{link.num}</span>
                <span className="hover-underline">{link.label}</span>
              </Link>
            );
          })}
          <a
            href="tel:+22890071065"
            className="ml-4 inline-flex items-center gap-2 border border-gold text-gold font-mono-tag text-[11px] uppercase tracking-[0.18em] px-4 py-2.5 rounded-none hover:bg-gold hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Inscription →
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
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
            className="lg:hidden bg-background border-t border-foreground/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 border-b border-foreground/10 flex items-baseline justify-between ${
                    location.pathname === link.href ? "text-gold" : "text-foreground"
                  }`}
                >
                  <span className="font-fraunces text-2xl">{link.label}</span>
                  <span className="font-mono-tag text-xs opacity-50">{link.num}</span>
                </Link>
              ))}
              <a
                href="tel:+22890071065"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-foreground text-background font-mono-tag uppercase tracking-[0.2em] text-xs py-4"
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
