import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSectionLite from "@/components/ProjectsSectionLite";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const IndexRestored = () => (
  <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header><Navbar /></header>
    <main id="main-content" tabIndex={-1}>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSectionLite />
    <CertificationsSection />
    <SkillsSection />
    <ContactSection />
    </main>
    <Footer />
  </>
);

export default IndexRestored;
