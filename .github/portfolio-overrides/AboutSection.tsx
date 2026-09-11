import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { CheckCircle } from "lucide-react";

const strengths = [
  "Quality Control & Assurance",
  "Site Inspection & Observation",
  "Technical Documentation (WIR, MIR, MAR, RIW, IPA/IPC)",
  "As-Built Drawing & Document Control",
  "Consultant & Client Coordination",
  "Layout Demarcation & Survey Coordination",
  "Project Planning & Execution",
  "Reporting, Compliance & Communication",
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="About Me" subtitle="Professional profile & core strengths" />
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2 glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-display font-semibold text-foreground mb-4">Professional Summary</h3>
          <div className="space-y-3 text-sm text-muted-foreground font-body leading-relaxed">
            <p>A performance-oriented Civil Engineer with proven experience in quality control, site inspection, technical documentation, project coordination, and execution across large-scale infrastructure developments in Bangladesh.</p>
            <p>Key project exposure includes <span className="text-foreground font-medium">HSIA Terminal 3</span> and the<span className="text-foreground font-medium"> Dhaka Mass Rapid Transit (MRT)</span> project — contributing to WIR, MIR, MAR, RIW, IPA/IPC, as-built documentation, layout demarcation, and consultant/client coordination.</p>
            <p>Skilled in document control, compliance tracking, reporting, BOQ-related coordination, and cross-functional teamwork, with a focus on traceable quality records, timely execution, and practical site coordination.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-display font-semibold text-foreground mb-4">Core Strengths</h3>
          <ul className="space-y-2.5">
            {strengths.map((s) => <li key={s} className="flex items-start gap-2 text-sm font-body text-muted-foreground"><CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />{s}</li>)}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
