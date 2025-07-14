import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Toolkit from "@/components/Toolkit";
import Services from "@/components/Services";
import WorkSamples from "@/components/WorkSamples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Toolkit />
      <Services />
      <WorkSamples />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
