import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-12 h-12" />,
      label: "edubaafojonathan@gmail.com",
      href: "mailto:edubaafojonathan@gmail.com",
      type: "email",
    },
    {
      icon: <Phone className="w-12 h-12" />,
      label: "+233 559754391",
      href: "tel:+233559754391",
      type: "phone",
    },
    {
      icon: <Linkedin className="w-12 h-12" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jonathanedubaafo",
      type: "linkedin",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-coral mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Reach out via any of the methods below, I'm happy to connect!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.type === "linkedin" ? "_blank" : undefined}
              rel={method.type === "linkedin" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="text-coral mb-4 group-hover:text-coral/80 transition-colors">
                {method.icon}
              </div>
              <span className="text-gray-800 font-semibold text-lg group-hover:text-coral transition-colors">
                {method.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
