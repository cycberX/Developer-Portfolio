import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Skills from "@/components/skills";
import Capabilities from "@/components/capabilities";
import Experience from "@/components/experience";
import Certificates from "@/components/certificates";
import Resume from "@/components/resume";
import Career from "@/components/career";
import Collaborate from "@/components/collaborate";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import ScrollEffects from "@/components/scroll-effects";
import HeroImage from "@/components/hero-image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Scroll effects, Lenis smooth scroll & progress bar */}
      {/* <ScrollEffects /> */}

      {/* Main Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Completely Redesigned Hero Section */}
        <Hero />
        {/* <HeroImage/> */}

        {/* Core Content Container */}
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-28">
          {/* Featured Projects with Filtering & Details Modal */}
          <Projects />

          {/* About Me Section */}
          <About />

          {/* Skills & Technologies with Category Filter */}
          <Skills />

          {/* Scope of Work: What I Can Build */}
          <Capabilities />

          {/* Timeline of Experience & Education */}
          <Experience />

          {/* Verified Certifications & Achievements */}
          {/* <Certificates /> */}

          {/* Resume & Curriculum Vitae */}
          <Resume />

          {/* Career Aspirations & Direction */}
          <Career />

          {/* Dedicated "Collaborate With Me" Section */}
          <Collaborate />
        </div>

        {/* Call to Action Section */}
        <Cta />
      </main>

      {/* Footer with Branding, Contact & Quick Links */}
      <Footer />
    </div>
  );
}
