import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-14"
  >
    <h2 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text inline-block">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground font-body text-sm max-w-xl mx-auto">{subtitle}</p>
    )}
    <div className="gold-line w-20 mx-auto mt-4" />
  </motion.div>
);

export default SectionHeading;
