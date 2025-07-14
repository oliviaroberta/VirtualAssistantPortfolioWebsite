import { Briefcase, FolderOpen, Smartphone } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Executive Virtual Assistant",
      period: "March 2025 – June 2025",
      icon: <Briefcase className="text-2xl text-blue-500" />,
      responsibilities: [
        "Managed inboxes with 200+ emails weekly and ensured timely follow-ups.",
        "Scheduled meetings across time zones, reducing missed appointments by 95%.",
        "Handled client communications with professionalism and discretion.",
      ],
    },
    {
      title: "Virtual Operations Assistant",
      period: "September 2024 – December 2024",
      icon: <FolderOpen className="text-2xl text-blue-500" />,
      responsibilities: [
        "Used Trello, Asana, and ClickUp to manage projects and deadlines.",
        "Coordinated remote teams to ensure timely task completion.",
        "Implemented workflows that cut admin time by 25%.",
      ],
    },
    {
      title: "Social Media & Content Support",
      period: "February 2019 – August 2020",
      icon: <Smartphone className="text-2xl text-blue-500" />,
      responsibilities: [
        "Created and scheduled posts on LinkedIn, Instagram, and Facebook.",
        "Managed DMs, comments, and boosted audience reach by 40% in 3 months.",
        "Performed competitor analysis and delivered monthly reports.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-coral text-center mb-12">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{exp.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <span className="text-gray-600 text-sm md:text-base">
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
