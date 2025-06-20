import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollProgress className="h-1"/>
      <main>
        <div id="home">
          <Hero />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
