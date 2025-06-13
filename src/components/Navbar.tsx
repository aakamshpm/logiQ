import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      {/* Mobile Navigation Bar */}
      <div className="flex flex-row justify-between items-center md:hidden p-4">
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
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
            Logi
          </h3>
          <img
            className="w-8 mt-1 object-cover"
            src="/images/logo.png"
            alt="LogiQ"
          />
        </Link>

        {toggle && (
          <div className="absolute top-16 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/10 p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-cyan-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-cyan-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-cyan-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-cyan-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navigation Bar */}
      <div className="hidden md:flex justify-between items-center p-4 px-8">
        <Link to="/" className="flex flex-row items-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
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
                className="text-white hover:text-cyan-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:text-cyan-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-cyan-300 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
