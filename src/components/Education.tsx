import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      title: "BEng In Electrical and Electronic Engineering",
      institution: "Accra Institute Of Technology",
      period: "2021 - 2024",
      icon: <GraduationCap className="w-12 h-12 text-coral mb-4" />,
    },
    {
      title: "Diploma In Networking",
      institution: "OpenLabs Ghana",
      period: "2018 - 2020",
      icon: <GraduationCap className="w-12 h-12 text-coral mb-4" />,
    },
    {
      title: "Certified Virtual Assistant",
      institution: "Virtual Assistant Academy",
      period: "2025",
      icon: <Award className="w-12 h-12 text-coral mb-4" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-coral mb-4">
          Education & Background
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          A journey of learning and professional growth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">{edu.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {edu.title}
              </h3>
              <p className="text-gray-600">
                {edu.institution} – {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
