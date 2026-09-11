import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import hsiaImg from "@/assets/project-hsia.jpg";
import mrtImg from "@/assets/project-mrt.jpg";
import doorImg from "@/assets/project-door.jpg";

type Project = { title: string; image: string; role: string; employer: string; period: string; description: string; scope: string; highlights: string[]; outcomes: string[]; tags: string[] };

const projects: Project[] = [
  { title: "HSIA Terminal 03 Expansion", image: hsiaImg, role: "Quality Control Engineer", employer: "Aridod Tech Serve Limited · Aviation Dhaka Consortium (ADC)", period: "Jul 2023 – Jun 2025", description: "QA/QC delivery for Terminal 03 works, coordinating inspections and documentation with client QC, consultants, and project stakeholders.", scope: "Quality assurance, inspection coordination, technical documentation, layout demarcation and close-out records across Terminal 03 project works.", highlights: ["Prepared and controlled WIR, MIR, MAR, RIW, IPA/IPC and as-built documentation", "Coordinated inspections with client QC, consultant and site teams", "Maintained traceable quality records and supported inspection close-out"], outcomes: ["Contributed to a documented portfolio of 1,100+ QA/QC records", "Supported a 98% consultant approval rate across documented QA/QC submissions"], tags: ["QA/QC", "Inspection", "Documentation", "Aviation"] },
  { title: "Dhaka Mass Rapid Transit Project", image: mrtImg, role: "Quality Control Engineer", employer: "SMCC-ITD JV", period: "Oct 2021 – Jun 2023", description: "Quality-control support across major civil and structural works for Bangladesh's first metro-rail programme.", scope: "Civil, structural and finishing quality-control activities, inspection documentation, layout demarcation and survey-related coordination.", highlights: ["Executed quality-control inspections across civil, structural and finishing works", "Prepared inspection records and supported layout demarcation", "Coordinated survey-related quality checks with project teams"], outcomes: ["Contributed to 700+ QA/QC inspections across major infrastructure works", "Supported consistent inspection documentation and quality traceability"], tags: ["Quality Control", "Civil Works", "Transit", "Surveying"] },
  { title: "dormakaba New Installation Projects", image: doorImg, role: "Project Engineer – New Installation", employer: "Ingress Solutions Ltd.", period: "Nov 2025 – Present", description: "Installation and commissioning coordination for dormakaba access, entrance and automatic-door solutions across client sites.", scope: "Site readiness, installation planning, execution coordination, quality checkpoints, commissioning and project handover for new installations.", highlights: ["Coordinate site readiness checks and installation planning", "Manage vendor, consultant, client and site-team coordination", "Track schedules, quality checkpoints, commissioning and handover activities"], outcomes: ["Supports structured project execution from site readiness through handover", "Maintains clear coordination across installation, quality and client-facing activities"], tags: ["Installation", "Access Control", "Automation", "Project Execution"] },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="Selected infrastructure and engineering experience with role, scope and outcomes" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card-hover rounded-xl overflow-hidden group flex flex-col">
              <div className="h-48 overflow-hidden"><img src={p.image} alt={`${p.title} project`} loading="lazy" width={800} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3><p className="text-primary text-xs font-body mt-1">{p.role}</p><p className="text-xs text-muted-foreground font-body mt-1">{p.employer}</p><p className="text-[11px] text-muted-foreground font-body mt-0.5">{p.period}</p><p className="text-sm text-muted-foreground font-body mt-3 leading-relaxed">{p.description}</p>
                <ul className="mt-3 space-y-1.5">{p.highlights.slice(0, 2).map((item) => <li key={item} className="text-xs text-muted-foreground font-body flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full bg-primary shrink-0" />{item}</li>)}</ul>
                <div className="flex flex-wrap gap-1.5 mt-4">{p.tags.map((t) => <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{t}</span>)}</div>
                <button type="button" onClick={() => setSelectedProject(p)} className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary/25 text-primary text-xs font-body font-medium hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"><Eye size={14} /> View Project Details</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <AnimatePresence>{selectedProject && <motion.div role="dialog" aria-modal="true" aria-label={`${selectedProject.title} project details`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md p-4 overflow-y-auto" onClick={() => setSelectedProject(null)}><div className="min-h-full flex items-center justify-center py-6"><motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} className="glass-card rounded-2xl overflow-hidden border border-primary/20 max-w-3xl w-full" onClick={(e) => e.stopPropagation()}><div className="relative h-56 sm:h-72 overflow-hidden"><img src={selectedProject.image} alt={`${selectedProject.title} project`} className="w-full h-full object-cover" /><button type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details" className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/85 border border-border flex items-center justify-center text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/60"><X size={18} /></button></div><div className="p-6 md:p-8"><p className="text-xs uppercase tracking-[0.16em] text-primary font-body">Project Case Study</p><h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{selectedProject.title}</h3><div className="mt-2 text-sm text-muted-foreground font-body space-y-1"><p><span className="text-foreground font-medium">Role:</span> {selectedProject.role}</p><p><span className="text-foreground font-medium">Employer:</span> {selectedProject.employer}</p><p><span className="text-foreground font-medium">Period:</span> {selectedProject.period}</p></div><div className="grid md:grid-cols-2 gap-6 mt-6"><div><h4 className="font-display font-semibold text-foreground">Scope</h4><p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{selectedProject.scope}</p></div><div><h4 className="font-display font-semibold text-foreground">Key Responsibilities</h4><ul className="mt-2 space-y-2">{selectedProject.highlights.map((item) => <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2"><span className="mt-2 block w-1 h-1 rounded-full bg-primary shrink-0" />{item}</li>)}</ul></div></div><div className="mt-6 rounded-xl bg-muted/50 border border-border p-4"><h4 className="font-display font-semibold text-foreground">Outcomes</h4><ul className="mt-2 space-y-2">{selectedProject.outcomes.map((item) => <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2"><span className="mt-2 block w-1 h-1 rounded-full bg-primary shrink-0" />{item}</li>)}</ul></div></div></motion.div></div></motion.div>}</AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
