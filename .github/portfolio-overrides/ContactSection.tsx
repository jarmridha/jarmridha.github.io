import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Link2, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:jarakibmridha@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Open to QA/QC, civil engineering and project execution opportunities" />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="glass-card rounded-xl p-6 space-y-5">
            <h3 className="font-display text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4 text-sm font-body">
              <div className="flex items-center gap-3 text-muted-foreground"><Mail size={16} className="text-primary shrink-0" /><a href="mailto:jarakibmridha@gmail.com" className="hover:text-foreground transition-colors">jarakibmridha@gmail.com</a></div>
              <div className="flex items-start gap-3 text-muted-foreground"><Phone size={16} className="text-primary shrink-0 mt-0.5" /><div><a href="tel:+8801676080995" className="block hover:text-foreground transition-colors">Primary: +880 1676-080995</a><a href="tel:+8801735027724" className="block mt-1 hover:text-foreground transition-colors">Alternate: +880 1735-027724</a></div></div>
              <div className="flex items-center gap-3 text-muted-foreground"><Link2 size={16} className="text-primary shrink-0" /><a href="https://linkedin.com/in/jahangiralamrakib" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">linkedin.com/in/jahangiralamrakib</a></div>
              <div className="flex items-center gap-3 text-muted-foreground"><MapPin size={16} className="text-primary shrink-0" /><span>Dhaka, Bangladesh</span></div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="glass-card rounded-xl p-6 space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
            <div><label htmlFor="contact-name" className="block mb-1.5 text-xs font-body font-medium text-foreground">Your Name</label><input required id="contact-name" name="name" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition" /></div>
            <div><label htmlFor="contact-email" className="block mb-1.5 text-xs font-body font-medium text-foreground">Your Email</label><input required id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition" /></div>
            <div><label htmlFor="contact-message" className="block mb-1.5 text-xs font-body font-medium text-foreground">Your Message</label><textarea required id="contact-message" name="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition resize-none" /></div>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"><Send size={14} /> Send via Email</button>
            <p className="text-[11px] text-muted-foreground font-body">Submitting opens your default email app with the message pre-filled.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
