import { Link } from "react-router-dom";
import StudentMentorShipCard from "../components/StudentMentorShipCard";
import { useEffect, useRef, useState } from "react";
import WhatWeProvide from "../components/WhatWeProvide";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Handle scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* First Section - Full Screen */}
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0018] backdrop-blur-sm"></div>

        {/* Content with fade-in animation */}
        <div className="relative z-10 text-center px-4 py-16 max-w-4xl animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="text-white">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 text-transparent bg-clip-text">
                LogiQ
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 font-semibold">
            Transforming your ideas into reality with{" "}
            <span className="font-bold text-pink-400">innovation</span> and{" "}
            <span className="font-bold text-fuchsia-400">excellence</span>
          </p>

          <div className="mt-8">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative min-h-screen px-5 md:px-20 bg-gradient-to-b from-[#0a0018] to-[#1a0030]">
        <div
          ref={cardRef}
          className={`relative pt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <WhatWeProvide />
        </div>
      </div>
    </div>
  );
};

export default Home;
