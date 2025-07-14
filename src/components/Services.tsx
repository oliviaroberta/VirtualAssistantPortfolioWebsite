import { Mail, Calendar, BarChart3, Smartphone, Search, Plane, FileText, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Management",
      description: "Inbox overwhelm? I'll sort, respond, and organize your emails professionally.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar & Schedule Management",
      description: "Stay on top of your day—appointments, deadlines, and meetings, perfectly managed.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Entry",
      description: "Fast, accurate input and formatting for your records, spreadsheets, or systems.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media Assistance",
      description: "From post scheduling to inbox responses—your brand stays active and responsive.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research Skills",
      description: "Thorough and efficient research to help you make informed decisions faster.",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel Planning",
      description: "From flight booking to accommodation, your trips are organized end-to-end.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Meeting Support",
      description: "Get help preparing agendas, taking minutes, and following up with key action items.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Customer Service",
      description: "Professional, friendly communication that keeps your clients satisfied and loyal.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-coral text-center mb-12">
          What I Can Do for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-coral mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
