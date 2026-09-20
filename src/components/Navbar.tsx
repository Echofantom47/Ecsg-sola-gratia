import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logoEcsg from "@/assets/logo-ecsg.jpg";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "L’École", href: "/ecole", children: [{ label: "À propos", href: "/a-propos" }, { label: "La Bible", href: "/versets" }] },
  { label: "Programmes", href: "/programmes", children: [{ label: "Maternelle", href: "/programmes/maternelle" }, { label: "Primaire", href: "/programmes/primaire" }, { label: "Collège", href: "/programmes/college" }, { label: "Lycée", href: "/programmes/lycee" }] },
  { label: "Vie scolaire", href: "/galerie" },
  { label: "Actualités", href: "/actualites" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? "border-border bg-background/95 shadow-sm backdrop-blur-xl" : "border-border/70 bg-background/90 backdrop-blur-md"}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:h-24">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoEcsg}
            alt="Logo ECSG"
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-base font-semibold text-foreground md:text-lg">École Chrétienne</span>
            <span className="mt-1 text-xs font-semibold uppercase text-primary">Sola Gratia · Lomé</span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href));
            return (
              <div key={link.href} className="group relative">
                <Link to={link.href} className={`flex items-center gap-1 px-3 py-3 text-sm font-semibold transition-colors ${active ? "text-primary" : "text-foreground hover:text-primary"}`}>{link.label}{link.children && <ChevronDown className="h-3.5 w-3.5" />}</Link>
                {link.children && <div className="invisible absolute left-0 top-full min-w-56 translate-y-2 border border-border bg-background p-2 opacity-0 shadow-editorial transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">{link.children.map((child) => <Link key={child.href} to={child.href} className="block px-4 py-3 text-sm font-medium hover:bg-muted hover:text-primary">{child.label}</Link>)}</div>}
              </div>
            );
          })}
          <Button asChild className="ml-3"><Link to="/admissions">Inscrire mon enfant</Link></Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background xl:hidden"
          >
            <div className="container mx-auto flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto px-4 py-5">
              {navLinks.map((link) => (
                <div key={link.href} className="border-b border-border"><Link to={link.href} onClick={() => setMobileOpen(false)} className={`flex items-center justify-between py-4 font-display text-xl font-semibold ${location.pathname.startsWith(link.href) ? "text-primary" : "text-foreground"}`}>{link.label}<ArrowRight className="h-4 w-4" /></Link>{link.children && <div className="grid grid-cols-2 gap-2 pb-4">{link.children.map((child) => <Link key={child.href} to={child.href} onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-primary">{child.label}</Link>)}</div>}</div>
              ))}
              <Button asChild size="lg" className="mt-6"><Link to="/admissions" onClick={() => setMobileOpen(false)}>Inscrire mon enfant</Link></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
