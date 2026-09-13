import { useState } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
 { title: "HSIA Terminal 03", role: "Quality Control Engineer", folder: "hsia", description: "QA/QC inspection and technical documentation for the HSIA Terminal 3 project.", photos: ["hsia-main", ...Array.from({length:8},(_,i)=>`hsia-thumb-${i+1}`)] },
 { title: "Dhaka MRT Project", role: "Quality Control Engineer", folder: "mrt", description: "Civil and structural inspections, documentation and survey coordination for the Dhaka MRT project.", photos: ["mrt-main", ...Array.from({length:7},(_,i)=>`mrt-thumb-${i+1}`)] },
 { title: "dormakaba New Installations", role: "Project Engineer — Ingress Solutions Ltd.", folder: "projects", description: "Installation, testing, commissioning and handover coordination for automatic doors and access control systems.", photos: ["dormakaba"] },
];
function ProjectCard({project}: {project: typeof projects[number]}) {
 const [active,setActive]=useState(0);
 const [failed,setFailed]=useState(false);
 const select=(i:number)=>{setActive(i);setFailed(false);};
 return <article className="glass-card rounded-xl overflow-hidden">
  <div className="h-56 bg-card">
   {failed ? <p className="p-6">Project photo unavailable.</p> : <img src={`/${project.folder}/${project.photos[active]}.webp`} alt={`${project.title} — project photograph ${active+1} of ${project.photos.length}`} width={800} height={512} loading="lazy" decoding="async" onError={()=>setFailed(true)} className="h-full w-full object-cover" />}
  </div>
  <div className="p-5"><h3 className="font-display text-xl">{project.title}</h3><p className="text-primary text-sm mt-2">{project.role}</p><p className="text-muted-foreground text-sm leading-relaxed mt-3">{project.description}</p>
  {project.photos.length>1 && <div className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} photos`}>{project.photos.map((name,i)=><button key={name} type="button" onClick={()=>select(i)} aria-label={`Show ${project.title} photo ${i+1}`} aria-pressed={active===i} className={`h-11 w-11 rounded-lg border ${active===i?'border-primary bg-primary text-primary-foreground':'border-border text-foreground'}`}>{i+1}</button>)}</div>}
  </div></article>;
}
export default function ProjectsSectionLite(){return <section id="projects" className="section-padding"><div className="max-w-7xl mx-auto"><SectionHeading title="Featured Projects" subtitle="Infrastructure, quality inspection and installation experience"/><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map(project=><ProjectCard key={project.title} project={project}/>)}</div></div></section>;}
