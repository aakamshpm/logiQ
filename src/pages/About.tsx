import { Link } from "react-router-dom";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dark background with subtle texture */}
      <div className="absolute inset-0 z-0 bg-[#0a0018]" />

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 text-transparent bg-clip-text mb-6 pb-2">
            About LogiQ
          </h1>
          <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Where innovation meets excellence, and your ideas transform into
            reality
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission Section */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              LogiQ is a place where you can transform your ideas into reality.
              From building projects for your academics to launching
              enterprise-level production-ready applications, we've got you
              covered.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Our Team
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed text-center">
                We are a group of passionate and focused developers who love
                building applications and providing mentorship to others. We
                help individuals and businesses build web and native
                applications from scratch.
              </p>
              <p className="text-lg leading-relaxed text-center">
                Our team consists of individuals from multiple technology
                backgrounds. Whether it's a simple HTML page, an advanced React
                application, a native app with Flutter, or sophisticated backend
                solutions with .NET — we've got it covered.
              </p>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
              Ready to bring your vision to life? We make it easy to get
              started.
            </p>
            <div className="text-center text-gray-300">
              <p className="mb-4">
                Send us an email, message us on WhatsApp, or fill out the form
                on our{" "}
                <Link
                  to="/contact"
                  className="text-violet-400 hover:text-violet-300 underline font-medium transition-colors"
                >
                  Contact Us
                </Link>{" "}
                page — we'll get back to you promptly.
              </p>
            </div>
          </div>

          {/* Services CTA Section */}
          <div className="flex flex-col items-center bg-gradient-to-r from-pink-500/20 to-violet-600/20 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-violet-500/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              What We Offer
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center mb-8">
              Discover our comprehensive range of services and the cutting-edge
              technology stack we work with to deliver exceptional results.
            </p>
            <Button path="services" text="View our Services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
