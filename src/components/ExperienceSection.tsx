import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Ingress Solutions Ltd.",
    role: "Project Engineer (New Installation)",
    period: "Nov 2025 – Present",
    bullets: [
      "Leading new-installation projects for dormakaba access and entrance solutions",
      "Coordinating with vendors, consultants, clients, and site teams for installation and commissioning",
      "Managing project documentation, scheduling, quality checkpoints, and handover activities",
    ],
  },
  {
    company: "Aridod Tech Serve Limited",
    role: "Quality Control Engineer",
    project: "HSIA Terminal 3 Project",
    period: "Jul 2023 – Jun 2025",
    bullets: [
      "Prepared and controlled QA/QC documentation including WIR, MIR, MAR, RIW, IPA/IPC, and as-built records",
      "Performed and coordinated site inspections with client QC and consultant teams across HSIA Terminal 3 works",
      "Contributed to a documented portfolio of 1,100+ QA/QC records with a 98% consultant approval rate",
    ],
  },
  {
    company: "SMCC-ITD JV",
    role: "Quality Control Engineer",
    project: "Dhaka Mass Rapid Transit Project",
    period: "Oct 2021 – Jun 2023",
    bullets: [
      "Executed quality-control inspections across structural, civil, and finishing works",
      "Prepared inspection records, layout demarcation, and coordinated survey-related quality checks",
      "Contributed to 700+ QA/QC inspections across major infrastructure works",
    ],
  },
  {
    company: "Momotaj Engineers Ltd.",
    role: "Assistant Engineer (QS Civil)",
    period: "Nov 2019 – Sep 2021",
    bullets: [
      "Supported quantity surveying, BOQ preparation, tender scheduling, and construction documentation",
      "Handled e-GP procurement activities, vendor quotation follow-up, and material sourcing coordination",
      "Assisted site supervision and quality monitoring for civil construction works",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-surface/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Experience" subtitle="Career timeline & professional journey" />
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div key={exp.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative pl-12 md:pl-16">
              <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <div className="glass-card-hover rounded-xl p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-body text-sm flex items-center gap-1.5"><Briefcase size={13} /> {exp.company}</p>
                    {exp.project && <p className="text-xs text-muted-foreground font-body mt-0.5">{exp.project}</p>}
                  </div>
                  <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-1 rounded">{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="text-primary mt-1.5 block w-1 h-1 rounded-full bg-primary shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
