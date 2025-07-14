import { Brain, Monitor } from "lucide-react";

const Skills = () => {
  const softSkills = [
    "Time Management",
    "Communication",
    "Adaptability",
    "Problem Solving",
    "Confidentiality",
    "Attention to Detail",
  ];

  const technicalSkills = [
    "Data Entry & Formatting",
    "CRM Management",
    "Online Research",
    "Report Drafting",
    "Email & Calendar Rules Setup",
    "Task & Workflow Automation",
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-coral text-center mb-12">
          Skills
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-coral mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              {softSkills.map((skill, index) => (
                <li key={index} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Monitor className="w-8 h-8 text-coral mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Technical Skills</h3>
            </div>
            <ul className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
