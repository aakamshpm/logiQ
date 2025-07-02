const WhatWeProvide = () => {
  const services = [
    {
      title: "Web App Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
    },

    {
      title: "E-commerce Applications",
      description:
        "Full-featured online stores with payment integration and inventory management",
      icon: "🛒",
    },

    {
      title: "API Development",
      description:
        "RESTful APIs and microservices for seamless data integration",
      icon: "🔌",
    },

    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance user experience",
      icon: "🎨",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        What We Provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl cursor-pointer shadow-2xl p-6 border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-violet-500/10"
          >
            <div className="text-4xl mb-4 text-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhatWeProvide;
