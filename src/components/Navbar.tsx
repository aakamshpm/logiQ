import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-secondary w-full px-3 py-4">
      {/* Mobile Navigation Bar */}
      <div className="flex flex-row justify-between items-center md:hidden">
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
            className="size-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <Link to="/" className="w-10">
          <img
            className="w-full object-cover"
            src="/images/logo.png"
            alt="LogiQ"
          />
        </Link>

        {toggle && (
          <div className="absolute top-16 left-0 w-full bg-secondary shadow-lg p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" className="text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
