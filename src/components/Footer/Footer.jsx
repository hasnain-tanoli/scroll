import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Container } from "../index";

export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-primary text-white">
      <Container>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Logo + Links */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center gap-2 bg-white rounded-2xl p-2">
              <img
                src="/Logo-Light.png"
                alt="Logo"
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            </div>

            {/* Navigation */}
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Socials */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary hover:opacity-90 transition shadow-sm"
              title="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary hover:opacity-90 transition shadow-sm"
              title="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary hover:opacity-90 transition shadow-sm"
              title="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center text-sm text-white/80">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Scroll</span>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
