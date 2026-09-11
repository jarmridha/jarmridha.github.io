import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, X } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const roles = ["Civil Engineer", "Quality Control Engineer", "Project Engineer"];

const jobPeriods = [
  { company: "Momotaj Engineers Ltd.", role: "Assistant Engineer (QS Civil)", period: "Nov 2019 – Sep 2021", start: new Date(2019, 10, 1), end: new Date(2021, 9, 1) },
  { company: "SMCC-ITD JV", role: "Quality Control Engineer", period: "Oct 2021 – Jun 2023", start: new Date(2021, 9, 1), end: new Date(2023, 6, 1) },
  { company: "Aridod Tech Serve Limited", role: "Quality Control Engineer", period: "Jul 2023 – Jun 2025", start: new Date(2023, 6, 1), end: new Date(2025, 6, 1) },
  { company: "Ingress Solutions Ltd.", role: "Project Engineer – New Installation", period: "Nov 2025 – Present", start: new Date(2025, 10, 1), end: null },
];

const monthsBetween = (start: Date, end: Date) => {
  let months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
  if (end.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
};

const formatMonths = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years && remainingMonths) return `${years} ${years === 1 ? "Year" : "Years"} ${remainingMonths} ${remainingMonths === 1 ? "Month" : "Months"}`;
  if (years) return `${years} ${years === 1 ? "Year" : "Years"}`;
  return `${remainingMonths} ${remainingMonths === 1 ? "Month" : "Months"}`;
};

const getExperienceData = () => {
  const now = new Date();
  const details = jobPeriods.map((job) => ({ ...job, months: monthsBetween(job.start, job.end ?? now) }));
  const totalMonths = details.reduce((sum, job) => sum + job.months, 0);
  return { details, totalMonths, yearsLabel: `${Math.floor(totalMonths / 12)}+` };
};

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [experience, setExperience] = useState(getExperienceData());
  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    const roleTimer = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    const experienceTimer = setInterval(() => setExperience(getExperienceData()), 24 * 60 * 60 * 1000);
    return () => { clearInterval(roleTimer); clearInterval(experienceTimer); };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setShowExperience(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden"><div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" /></div>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">Civil Engineering · QA/QC · Project Execution</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">Jahangir Alam <span className="gold-gradient-text">( Rakib)</span></h1>
          <div className="h-8 mt-3 overflow-hidden"><motion.p key={roleIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-primary font-body text-lg font-medium">{roles[roleIdx]}</motion.p></div>
          <p className="mt-5 text-muted-foreground font-body text-sm leading-relaxed max-w-lg">Results-driven civil engineering professional with 5+ years of hands-on experience in QA/QC, site inspection, technical documentation, project coordination, and execution across major infrastructure projects in Bangladesh.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="/J.%20A.%20Rakib%20Mridha_Cv.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"><Download size={16} /> Download CV</a>
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card-hover font-body text-sm font-medium text-foreground"><ArrowDown size={16} /> View Projects</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card-hover font-body text-sm font-medium text-foreground"><Mail size={16} /> Contact Me</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            <button type="button" onClick={() => setShowExperience(true)} className="glass-card glass-card-hover rounded-lg p-3 text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/60" aria-label="View detailed job experience"><p className="text-xl font-display font-bold gold-gradient-text">{experience.yearsLabel}</p><p className="text-xs text-muted-foreground font-body mt-1">Years Experience</p><p className="text-[10px] text-primary/80 mt-1">View details</p></button>
            {[["700+", "QA/QC Inspections"], ["1,100+", "QA/QC Documents"], ["98%", "Consultant Approval"]].map(([val, lbl]) => <div key={lbl} className="glass-card rounded-lg p-3 text-center"><p className="text-xl font-display font-bold gold-gradient-text">{val}</p><p className="text-xs text-muted-foreground font-body mt-1">{lbl}</p></div>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center lg:justify-end"><div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_hsl(42_78%_60%/0.12)]"><img src={profileImg} alt="Jahangir Alam ( Rakib)" width={512} height={512} className="w-full h-full object-cover object-top" /></div></motion.div>
      </div>

      {showExperience && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowExperience(false)}><div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-background p-5 sm:p-6 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="experience-title" onClick={(e) => e.stopPropagation()}><div className="flex items-start justify-between gap-4"><div><p className="text-xs uppercase tracking-widest text-primary">Professional Experience</p><h2 id="experience-title" className="text-2xl font-display font-bold mt-1">Experience Breakdown</h2></div><button type="button" onClick={() => setShowExperience(false)} className="p-2 rounded-lg hover:bg-muted" aria-label="Close experience details"><X size={20} /></button></div><div className="mt-5 space-y-3">{experience.details.map((job) => <div key={job.company} className="glass-card rounded-xl p-4"><div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"><div><h3 className="font-display font-semibold text-foreground">{job.company}</h3><p className="text-xs text-muted-foreground mt-1">{job.role}</p><p className="text-xs text-muted-foreground mt-1">{job.period}</p></div><p className="text-sm font-semibold text-primary whitespace-nowrap">{formatMonths(job.months)}</p></div></div>)}</div><div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 flex items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-wider text-muted-foreground">Grand Total</p><p className="text-xs text-muted-foreground mt-1">Employment gaps excluded</p></div><p className="text-lg sm:text-xl font-display font-bold gold-gradient-text text-right">{formatMonths(experience.totalMonths)}</p></div></div></div>}
    </section>
  );
};

export default HeroSection;
