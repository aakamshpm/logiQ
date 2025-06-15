import Button from "../components/Button";

const Services = () => {
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
      title: "Admin Dashboards",
      description:
        "Comprehensive admin panels and dashboards for business management",
      icon: "📊",
    },
    {
      title: "E-commerce Applications",
      description:
        "Full-featured online stores with payment integration and inventory management",
      icon: "🛒",
    },
    {
      title: "Content Management Systems",
      description:
        "Custom CMS solutions for easy content creation and management",
      icon: "📝",
    },
    {
      title: "API Development",
      description:
        "RESTful APIs and microservices for seamless data integration",
      icon: "🔌",
    },
    {
      title: "Database Design",
      description:
        "Efficient database architecture and optimization for your applications",
      icon: "🗄️",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance user experience",
      icon: "🎨",
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Next.js", category: "Full Stack" },
    { name: "Flutter", category: "Mobile" },
    { name: "React Native", category: "Mobile" },
    { name: ".NET", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Nest.js", category: "Backend" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dark background with subtle texture */}
      <div className="absolute inset-0 z-0 bg-[#0a0018]" />

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 text-transparent bg-clip-text mb-6 pb-2">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to transform your ideas into powerful
            digital experiences
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-violet-500/10"
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
        </div>

        {/* Tech Stack Section */}
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
                  <div className="text-white font-semibold mb-1">
                    {tech.name}
                  </div>
                  <div className="text-gray-400 text-sm">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mentoring Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pink-500/20 to-violet-600/20 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-violet-500/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Student Mentoring & Support
            </h2>
            <div className="text-center space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                We provide dedicated mentoring support to students who are
                passionate about technology and want to build their skills in
                web and mobile app development.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Whether you're working on academic projects, preparing for
                internships, or building your portfolio, our experienced
                developers are here to guide you through your learning journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  Code Reviews
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  Project Guidance
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  Career Advice
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  Technical Interviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col items-center bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and turn your vision into reality.
              Get in touch with us today!
            </p>
            <Button path="contact" text="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
