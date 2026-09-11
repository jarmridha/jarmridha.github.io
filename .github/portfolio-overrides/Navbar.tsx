import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      const marker = 150;
      let current = "#hero";
      for (const link of navLinks) {
        const section = document.getElementById(link.href.slice(1));
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom > marker) {
          current = link.href;
          break;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card py-3" : "py-5 bg-transparent"}`} aria-label="Primary navigation">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg font-semibold gold-gradient-text" aria-label="J. A. Rakib Mridha — Home">JARM</a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => <a key={l.href} href={l.href} aria-current={active === l.href ? "page" : undefined} className={`text-sm font-body transition-colors duration-200 ${active === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>{l.label}</a>)}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden glass-card mt-2 mx-4 rounded-lg p-4 flex flex-col gap-3">{navLinks.map((l) => <a key={l.href} href={l.href} aria-current={active === l.href ? "page" : undefined} onClick={() => setOpen(false)} className={`text-sm font-body transition-colors py-1 ${active === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>{l.label}</a>)}</motion.div>}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
