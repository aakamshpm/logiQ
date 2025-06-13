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
                src="/images/logo.png"
                alt="LogiQ Logo"
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold text-primary text-glow">
                LogiQ
              </h3>
            </div>
            <p className="text-secondary mb-6 max-w-md">
              Transform your ideas into reality with LogiQ, where innovation
              meets excellence.
            </p>
          </div>

          {/* Location Section */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4 accent-secondary">
              Location
            </h4>
            <div className="space-y-3">
              <div className="flex items-start text-secondary">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 accent-primary flex-shrink-0" />
                <div>
                  <p>Kannur, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4 accent-secondary">
              Connect
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919847584237"
                className="flex items-center text-secondary hover:text-hover transition-colors group"
              >
                <PhoneIcon className="h-5 w-5 mr-2 group-hover:accent-primary" />
                <span>+91 9847584237</span>
              </a>
              <a
                href="mailto:info@logiq.com"
                className="flex items-center text-secondary hover:text-hover transition-colors group"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2 group-hover:accent-primary" />
                <span>info@logiq.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h5 className="text-base font-medium text-primary mt-2 mb-3 text-center">
            Follow Us
          </h5>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://instagram.com/logiq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-glass border border-accent p-2 rounded-lg transition-all hover:glow-effect group"
            >
              <svg
                className="h-5 w-5 text-secondary group-hover:accent-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" />
              </svg>
            </a>

            <a
              href="https://wa.me/+919847584237"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-glass border border-accent p-2 rounded-lg transition-all hover:glow-effect group"
            >
              <svg
                className="h-5 w-5 text-secondary group-hover:accent-success"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/company/logiq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-glass border border-accent p-2 rounded-lg transition-all hover:glow-effect group"
            >
              <svg
                className="h-5 w-5 text-secondary group-hover:accent-secondary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
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
                className="text-muted hover:text-secondary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted hover:text-secondary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              {/* <a
                href="/cookies"
                className="text-muted hover:text-secondary text-sm transition-colors"
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
