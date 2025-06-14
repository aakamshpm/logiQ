import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Mobile Navigation Bar */}
      <div className="relative flex flex-row bg-[#0a0018] justify-between items-center md:hidden p-4">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 
                    bg-gradient-to-b from-fuchsia-500/40 via-violet-600/30 to-transparent 
                    rounded-full blur-[100px] z-10 pointer-events-none
                    mix-blend-screen opacity-90"
        />
        <div
          className="cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <Link to="/" className="flex flex-row items-center w-max">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
            Logi
          </h3>
          <img
            className="w-8 mt-1 object-cover"
            src="/images/logo.png"
            alt="LogiQ"
          />
        </Link>

        {toggle && (
          <div className="absolute top-16 left-0 w-full bg-white/10 backdrop-blur-sm border-b border-white/20 p-4 z-[60]">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setToggle(false)}
                  className="text-white font-semibold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(false)}
                  to="/about"
                  className="text-white font-semibold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(false)}
                  to="/services"
                  className="text-white font-semibold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(false)}
                  to="/contact"
                  className="text-white font-semibold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navigation Bar */}
      <div className="hidden md:relative md:flex p-4 px-8">
        {/* Dark blurred base backdrop */}
        <div className="absolute inset-0 bg-[#0a0018] backdrop-blur-sm z-0" />

        {/* Ultra-vibrant violet gradient overlay */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 
                    bg-gradient-to-b from-fuchsia-500/40 via-violet-600/30 to-transparent 
                    rounded-full blur-[100px] z-10 pointer-events-none
                    mix-blend-screen opacity-90"
        />

        {/* Main content */}
        <div className="relative z-20 flex flex-row justify-between w-full items-center">
          <Link to="/" className="flex flex-row items-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              Logi
            </h3>
            <img
              className="w-8 mt-1 object-cover"
              src="/images/logo.png"
              alt="LogiQ"
            />
          </Link>

          <div className="flex items-center gap-x-12">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <Button path="contact" text="Contact Us" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
