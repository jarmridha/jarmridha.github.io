import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, X, ExternalLink } from "lucide-react";
import certPmpUnit3 from "@/assets/cert-pmp-unit-3.jpg";
import certHighImpactWriting from "@/assets/cert-high-impact-writing.jpg";
import certInitiatingPlanning from "@/assets/cert-initiating-planning.jpg";
import certManagingRisks from "@/assets/cert-managing-risks.jpg";
import certConstructionPM from "@/assets/cert-construction-pm.jpg";
import certHseEngineering from "@/assets/cert-hse-engineering.jpg";
import certIso45001 from "@/assets/cert-iso-45001.jpg";
import certIso14001 from "@/assets/cert-iso-14001.jpg";

type Certificate = { title: string; image: string; pdf: string; issuer?: string; date: string };

const certs: Certificate[] = [
  { title: "PMP Certification: Unit 3", image: certPmpUnit3, pdf: "/certificates/pmp-unit-3.pdf", issuer: "Pearson · Coursera", date: "28 Aug 2025" },
  { title: "Health, Safety & Environmental (HSE) Engineering", image: certHseEngineering, pdf: "/certificates/hse-engineering.pdf", issuer: "Khalifa University · Coursera", date: "27 Aug 2025" },
  { title: "Construction Project Management", image: certConstructionPM, pdf: "/certificates/construction-project-management.pdf", issuer: "Columbia University · Coursera", date: "28 Aug 2025" },
  { title: "ISO 45001:2018 Awareness", image: certIso45001, pdf: "/certificates/iso-45001-2018.pdf", date: "25 Sep 2024" },
  { title: "ISO 14001:2015 Awareness", image: certIso14001, pdf: "/certificates/iso-14001-2015.pdf", date: "23 Sep 2024" },
  { title: "Managing Project Risks and Changes", image: certManagingRisks, pdf: "/certificates/managing-project-risks-and-changes.pdf", issuer: "University of California, Irvine · Coursera", date: "24 Aug 2025" },
  { title: "Initiating and Planning Projects", image: certInitiatingPlanning, pdf: "/certificates/initiating-and-planning-projects.pdf", issuer: "University of California, Irvine · Coursera", date: "22 Aug 2025" },
  { title: "High-Impact Business Writing", image: certHighImpactWriting, pdf: "/certificates/high-impact-business-writing.pdf", issuer: "University of California, Irvine · Coursera", date: "24 Aug 2025" },
];

const CertificationsSection = () => {
  const [previewIdx, setPreviewIdx] = useState<number | null>(null);
  const [modalCert, setModalCert] = useState<Certificate | null>(null);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setModalCert(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="certifications" className="section-padding bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Certifications & Trainings" subtitle="Verified credentials with source PDF and issue date" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => {
            const colMod3 = i % 3;
            const colMod2 = i % 2;
            const previewAlign = "left-1/2 -translate-x-1/2 " + (colMod2 === 0 ? "sm:left-0 sm:translate-x-0 " : "sm:left-auto sm:right-0 sm:translate-x-0 ") + (colMod3 === 0 ? "lg:left-0 lg:right-auto lg:translate-x-0" : colMod3 === 2 ? "lg:left-auto lg:right-0 lg:translate-x-0" : "lg:left-1/2 lg:right-auto lg:-translate-x-1/2");
            return (
              <motion.button type="button" key={c.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="glass-card-hover rounded-lg p-4 text-left flex items-start gap-3 cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-primary/60" onMouseEnter={() => setPreviewIdx(i)} onMouseLeave={() => setPreviewIdx(null)} onFocus={() => setPreviewIdx(i)} onBlur={() => setPreviewIdx(null)} onClick={() => setModalCert(c)} aria-label={`Open certificate: ${c.title}`}>
                <Award size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span><span className="block text-sm font-body text-foreground">{c.title}</span>{c.issuer && <span className="block mt-1 text-xs text-muted-foreground font-body">{c.issuer}</span>}<span className="block mt-0.5 text-[11px] text-muted-foreground font-body">Issued: {c.date}</span></span>
                <AnimatePresence>{previewIdx === i && <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }} className={`hidden sm:block absolute bottom-full mb-3 z-50 pointer-events-none w-[280px] max-w-[calc(100vw-2rem)] ${previewAlign}`}><div className="glass-card rounded-xl overflow-hidden border border-primary/20 shadow-lg"><img src={c.image} alt="" className="w-full h-auto object-cover" loading="lazy" /><div className="px-3 py-2 text-xs text-muted-foreground text-center font-body">{c.title}</div></div></motion.div>}</AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
      <AnimatePresence>{modalCert && <motion.div role="dialog" aria-modal="true" aria-label={modalCert.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md" onClick={() => setModalCert(null)}><motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }} className="glass-card rounded-2xl overflow-hidden border border-primary/20 max-w-md w-full" onClick={(e) => e.stopPropagation()}><div className="relative"><img src={modalCert.image} alt={`${modalCert.title} certificate preview`} className="w-full h-auto object-cover" /><button type="button" onClick={() => setModalCert(null)} aria-label="Close certificate preview" className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/60"><X size={16} aria-hidden="true" /></button></div><div className="px-5 py-4 space-y-3"><div><h3 className="text-sm font-body font-medium text-foreground">{modalCert.title}</h3>{modalCert.issuer && <p className="mt-1 text-xs text-muted-foreground font-body">Issuer: {modalCert.issuer}</p>}<p className="mt-0.5 text-xs text-muted-foreground font-body">Issued: {modalCert.date}</p></div><a href={modalCert.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-body text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">View full certificate (PDF) <ExternalLink size={12} aria-hidden="true" /></a></div></motion.div></motion.div>}</AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
