import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Link2, MessageCircle } from "lucide-react";

const CONTACT_EMAIL = "jarakibmridha@gmail.com";
const WHATSAPP_NUMBER = "8801676080995";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-surface/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Get In Touch" subtitle="Open to QA/QC, civil engineering and project execution opportunities" />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="glass-card rounded-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-5">Contact Information</h3>
            <div className="space-y-4 text-sm font-body">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Mail size={17} className="text-primary" /></span>
                <span><span className="block text-xs text-muted-foreground">Email</span><span className="block font-medium text-foreground group-hover:text-primary transition-colors">{CONTACT_EMAIL}</span></span>
              </a>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I found your engineering portfolio and would like to connect with you.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MessageCircle size={17} className="text-primary" /></span>
                <span><span className="block text-xs text-muted-foreground">WhatsApp</span><span className="block font-medium text-foreground group-hover:text-primary transition-colors">+880 1676-080995</span></span>
              </a>

              <div className="flex items-start gap-3 text-muted-foreground">
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Phone size={17} className="text-primary" /></span>
                <div><a href="tel:+8801676080995" className="block hover:text-primary transition-colors">Primary: +880 1676-080995</a><a href="tel:+8801735027724" className="block mt-1 hover:text-primary transition-colors">Alternate: +880 1735-027724</a></div>
              </div>

              <a href="https://linkedin.com/in/jahangiralamrakib" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Link2 size={17} className="text-primary" /></span>
                <span className="group-hover:text-primary transition-colors">linkedin.com/in/jahangiralamrakib</span>
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><MapPin size={17} className="text-primary" /></span>
                <span>Sreepur, Gazipur, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5 md:p-6 border border-border/70">
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-body mb-2">Direct Contact</p>
            <h3 className="font-display text-xl font-semibold text-foreground">Choose the fastest way to reach me</h3>
            <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">Email opens your default email app. WhatsApp opens a direct chat with a short pre-filled introduction.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Portfolio Inquiry")}`} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"><Mail size={16} /> Email Me</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I found your engineering portfolio and would like to connect with you.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass-card-hover font-body text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 transition"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
