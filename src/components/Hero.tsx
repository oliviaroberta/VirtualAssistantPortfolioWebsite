import { Button } from "@/components/ui/button";
import heroImage from "@/public/ekow.jpg";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-cyan-50 to-white pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Hello, I'm</h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-coral mb-4 animate-fade-in">
              JONATHAN EKOW EDUBAAFO
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-600">Your Dedicated Virtual Assistant</p>
            <Button 
              onClick={handleContactClick}
              className="bg-coral hover:bg-coral/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="flex-1 max-w-md lg:max-w-lg order-1 lg:order-2">
            <img
              src="/Ekow.jpg"
              alt="Jonathan Ekow Edubaafo"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
