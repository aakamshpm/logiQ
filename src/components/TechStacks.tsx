const TechStacks = () => {
  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Next.js", category: "Full Stack" },
    { name: "Flutter", category: "Mobile" },
    { name: "React Native", category: "Mobile" },
    { name: ".NET", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
  ];

  return (
    <div className="mb-16">
      <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our Tech Stack
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto">
          We work with modern technologies to deliver robust and scalable
          solutions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-500/10 to-violet-600/10 border border-violet-500/20 rounded-lg p-4 text-center hover:from-pink-500/20 hover:to-violet-600/20 transition-all duration-300"
            >
              <div className="text-white font-semibold mb-1">{tech.name}</div>
              <div className="text-gray-400 text-sm">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
