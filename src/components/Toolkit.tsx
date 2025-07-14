const Toolkit = () => {
  const tools = [
    { name: "Google Workspace", top: "10%", left: "20%", image: "/google_space-removebg-preview.png" },
    { name: "Notion", top: "40%", left: "10%", image: "/icons8-notion-50.png" },
    { name: "Microsoft Office Suite", top: "60%", left: "25%", image: "/icons8-microsoft-office-2019-480.png" },
    { name: "Canva", top: "30%", left: "45%", image: "/icons8-canva-48.png" },
    { name: "Trello", top: "70%", left: "60%", image: "/icons8-trello-480.png" },
    { name: "Asana", top: "20%", left: "75%", image: "/icons8-asana-50.png" },
    { name: "Slack", top: "50%", left: "88%", image: "/icons8-slack-new-480.png" },
    { name: "Zoom", top: "80%", left: "40%", image: "/icons8-zoom-480.png" },
  ];

  return (
    <section id="toolkit" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-coral mb-4">Toolkit</h2>
        <p className="text-lg text-gray-600 mb-12">Tools & Platforms I Use</p>

        {/* Mobile/Tablet Grid View */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:hidden">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <img src={tool.image} alt={tool.name} className="w-10 h-10 object-contain" />
              </div>
              <p className="text-sm font-medium text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>

        {/* Desktop Cloud View */}
        <div className="hidden lg:block relative h-[32rem] w-full">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="absolute text-center transition-transform duration-300 hover:scale-110 floating"
              style={{
                top: tool.top,
                left: tool.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg mx-auto mb-2 flex items-center justify-center">
           <img src={tool.image} alt={tool.name} className="w-16 h-16 object-contain" />
              </div>

              <p className="text-sm font-medium text-gray-700 whitespace-nowrap">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
