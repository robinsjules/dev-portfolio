import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import ExperienceSection from "./components/ExperienceSection"
import TechSection from "./components/TechSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#051014]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection /> 
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechSection />
      </div>
    </main>
  );
}
