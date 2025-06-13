import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/banner_2.jpeg", "/images/banner_3.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background images with transition effect */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
            Welcome to LogiQ
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
          Transforming your ideas into reality with{" "}
          <span className="font-bold text-cyan-200">innovation</span> and{" "}
          <span className="font-bold text-blue-200">excellence</span>.
        </p>

        <div className="mt-8">
          <Link
            to="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore Our Services →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
