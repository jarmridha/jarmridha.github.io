import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Link2, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next engineering project" />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="glass-card rounded-xl p-6 space-y-5">
            <h3 className="font-display text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4 text-sm font-body">
              {[
                { icon: Mail, label: "jarakibmridha@gmail.com", href: "mailto:jarakibmridha@gmail.com" },
                { icon: Phone, label: "+880 1676080995, +8801735027724", href: "tel:+8801676080995" },
                { icon: Link2, label: "linkedin.com/in/jahangiralamrakib", href: "https://linkedin.com/in/jahangiralamrakib" },
                { icon: MapPin, label: "Bangladesh" },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-muted-foreground"><Icon size={16} className="text-primary shrink-0" />{href ? <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{label}</a> : <span>{label}</span>}</div>
              ))}
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="glass-card rounded-xl p-6 space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <div><label htmlFor="contact-name" className="block mb-1.5 text-xs font-body font-medium text-foreground">Your Name</label><input id="contact-name" name="name" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition" /></div>
            <div><label htmlFor="contact-email" className="block mb-1.5 text-xs font-body font-medium text-foreground">Your Email</label><input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition" /></div>
            <div><label htmlFor="contact-message" className="block mb-1.5 text-xs font-body font-medium text-foreground">Your Message</label><textarea id="contact-message" name="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition resize-none" /></div>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"><Send size={14} /> Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
