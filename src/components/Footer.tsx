import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-subtle mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Company Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/base_white.png"
                alt="LogiQ Logo"
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold text-primary">LogiQ</h3>
            </div>
            <p className="text-primary mb-6 max-w-md">
              Transform your ideas into reality with LogiQ, where innovation
              meets excellence.
            </p>

            {/* Social Links */}
            <div className="flex flex-col items-start">
              <h5 className="text-base font-medium text-primary mt-2 mb-3 text-center">
                Follow Us
              </h5>
              <div className="flex space-x-4 justify-center">
                <Link to="https://instagram.com">
                  <img
                    className="w-10 rounded-full"
                    src="/images/socials/instagram.jpg"
                  />
                </Link>

                <Link to="https://linkedin.com">
                  <img
                    className="w-10 rounded-full"
                    src="/images/socials/linkedin.jpg"
                  />
                </Link>

                <Link to="https://x.com">
                  <img
                    className="w-10 rounded-full"
                    src="/images/socials/twitter.jpg"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-violet-500">
              Location
            </h4>
            <div className="space-y-3">
              <div className="flex items-start text-primary">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 accent-primary flex-shrink-0" />
                <div>
                  <p>Kannur, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-violet-500">
              Connect
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919847584237"
                className="flex items-center text-primary hover:text-blue-400 transition-colors group"
              >
                <PhoneIcon className="h-5 w-5 mr-2 group-hover:accent-primary" />
                <span>+91 9847584237</span>
              </a>
              <a
                href="mailto:info@logiq.com"
                className="flex items-center text-primary hover:text-blue-400 transition-colors group"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2 group-hover:accent-primary" />
                <span>logiqtech2025@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-subtle mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} LogiQ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-muted hover:text-blue-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted hover:text-blue-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              {/* <a
                href="/cookies"
                className="text-muted hover:text-blue-400 text-sm transition-colors"
              >
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
