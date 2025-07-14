const WorkSamples = () => {
  const samples = [
    {
      title: "Data Entry Sample",
      description:
        "Accurate and well-formatted spreadsheets showcasing my ability to handle large datasets efficiently and with attention to detail.",
      image: "/data entry.jpg",
    },
    {
      title: "Meeting Minutes Writing",
      description:
        "Clear, concise, and professional meeting minutes prepared from live or recorded sessions, capturing all key points and action items.",
      image: "/Writing meeting minutes 2.jpg",
    },
    {
      title: "Research Work",
      description:
        "Well-organized findings and summaries from in-depth online research, suitable for reports, content creation, or business strategy.",
      image: "/research work2.jpg",
    },
    {
      title: "Travel Itinerary",
      description:
        "Detailed and visually appealing travel plans, complete with timing, destinations, and tips for a seamless journey experience.",
      image: "/travel itinerary 2.jpg",
    },
  ];

  return (
    <section id="work-samples" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-coral text-center mb-12">
          Work Samples
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {samples.map((sample, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {sample.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {sample.description}
                </p>
              </div>
              <div className="flex-1 max-w-md lg:max-w-lg">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSamples;
