import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Container } from "../index";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-2">
                <img
                  src="/Logo-Light.png"
                  alt="Scroll"
                  className="h-6 w-auto filter brightness-0 invert"
                />
              </div>
            </div>

            <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex space-x-3">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"
              title="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"
              title="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"
              title="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">Scroll</span>. Crafted
          with care for sharing stories.
        </div>
      </Container>
    </footer>
  );
}
