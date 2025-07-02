const StudentMentorShipCard = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-pink-500/20 to-violet-600/20 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-violet-500/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Student Mentoring & Support
        </h2>
        <div className="text-center space-y-4 text-gray-300">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            We provide dedicated mentoring support to students who are
            passionate about technology and want to build their skills in web
            and mobile app development.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you're working on academic projects, preparing for
            internships, or building your portfolio, our experienced developers
            are here to guide you through your learning journey.
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
  );
};

export default StudentMentorShipCard;
