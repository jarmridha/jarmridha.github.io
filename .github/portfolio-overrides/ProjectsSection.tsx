import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import hsiaImg from "@/assets/project-hsia.jpg";
import mrtImg from "@/assets/project-mrt.jpg";
import doorImg from "@/assets/project-door.jpg";

const projects = [
  {
    title: "HSIA Terminal 03 Expansion",
    image: hsiaImg,
    role: "Quality Control Engineer",
    employer: "Aridod Tech Serve Limited · Aviation Dhaka Consortium (ADC)",
    period: "Jul 2023 – Jun 2025",
    description: "QA/QC delivery for Terminal 03 works, coordinating inspections and documentation with client QC, consultants, and project stakeholders.",
    highlights: [
      "WIR, MIR, MAR, RIW, IPA/IPC and as-built documentation",
      "Site inspections and consultant/client coordination",
      "Part of 1,100+ QA/QC records with 98% consultant approval",
    ],
    tags: ["QA/QC", "Inspection", "Documentation", "Aviation"],
  },
  {
    title: "Dhaka Mass Rapid Transit Project",
    image: mrtImg,
    role: "Quality Control Engineer",
    employer: "SMCC-ITD JV",
    period: "Oct 2021 – Jun 2023",
    description: "Quality-control support across major civil and structural works for Bangladesh's first metro-rail programme.",
    highlights: [
      "Civil, structural and finishing inspections",
      "Inspection records, layout demarcation and survey coordination",
      "Contributed to 700+ QA/QC inspections across infrastructure works",
    ],
    tags: ["Quality Control", "Civil Works", "Transit", "Surveying"],
  },
  {
    title: "dormakaba New Installation Projects",
    image: doorImg,
    role: "Project Engineer – New Installation",
    employer: "Ingress Solutions Ltd.",
    period: "Nov 2025 – Present",
    description: "Installation and commissioning coordination for dormakaba access, entrance and automatic-door solutions across client sites.",
    highlights: [
      "Site readiness checks, installation planning and execution",
      "Vendor, consultant and client coordination",
      "Scheduling, quality checkpoints, commissioning and handover",
    ],
    tags: ["Installation", "Access Control", "Automation", "Project Execution"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="Featured Projects" subtitle="Selected infrastructure and engineering experience with role, scope and outcomes" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card-hover rounded-xl overflow-hidden group flex flex-col">
            <div className="h-48 overflow-hidden"><img src={p.image} alt={`${p.title} project`} loading="lazy" width={800} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-primary text-xs font-body mt-1">{p.role}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">{p.employer}</p>
              <p className="text-[11px] text-muted-foreground font-body mt-0.5">{p.period}</p>
              <p className="text-sm text-muted-foreground font-body mt-3 leading-relaxed">{p.description}</p>
              <ul className="mt-3 space-y-1.5">
                {p.highlights.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground font-body flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full bg-primary shrink-0" />{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{t}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
