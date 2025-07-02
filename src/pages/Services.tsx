import Button from "../components/Button";
import StudentMentorShipCard from "../components/StudentMentorShipCard";
import TechStacks from "../components/TechStacks";
import WhatWeProvide from "../components/WhatWeProvide";

const Services = () => {
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
          <WhatWeProvide />
        </div>

        {/* Tech Stack Section */}
        <TechStacks />

        {/* Mentoring Section */}
        <StudentMentorShipCard />

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
