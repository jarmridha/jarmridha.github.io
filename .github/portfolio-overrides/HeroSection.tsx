import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const roles = ["Civil Engineer", "Quality Control Engineer", "Project Engineer"];

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-28">
      <div className="absolute inset-0 pointer-events-none overflow-hidden"><div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" /></div>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">Civil Engineering · QA/QC · Project Execution</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">J. A. Rakib <span className="gold-gradient-text">Mridha</span></h1>
          <div className="h-8 mt-3 overflow-hidden"><motion.p key={roleIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-primary font-body text-lg font-medium">{roles[roleIdx]}</motion.p></div>
          <p className="mt-5 text-muted-foreground font-body text-sm leading-relaxed max-w-lg">Results-driven civil engineering professional with 5+ years of hands-on experience in QA/QC, site inspection, technical documentation, project coordination, and execution across major infrastructure projects in Bangladesh.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="/J.%20A.%20Rakib%20Mridha_Cv.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"><Download size={16} /> Download CV</a>
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card-hover font-body text-sm font-medium text-foreground"><ArrowDown size={16} /> View Projects</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card-hover font-body text-sm font-medium text-foreground"><Mail size={16} /> Contact Me</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[["5+", "Years Experience"], ["700+", "QA/QC Inspections"], ["1,100+", "QA/QC Documents"], ["98%", "Consultant Approval"]].map(([val, lbl]) => (
              <div key={lbl} className="glass-card rounded-lg p-3 text-center"><p className="text-xl font-display font-bold gold-gradient-text">{val}</p><p className="text-xs text-muted-foreground font-body mt-1">{lbl}</p></div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_hsl(42_78%_60%/0.12)]"><img src={profileImg} alt="J. A. Rakib Mridha" width={512} height={512} className="w-full h-full object-cover object-top" /></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
