import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Container } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { LogoutBtn, LogInBtn } from "../index";
import { useSelector } from "react-redux";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-posts", active: authStatus },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-2">
                <img
                  src="/Logo-Light.png"
                  alt="Scroll"
                  className="h-6 w-auto filter brightness-0 invert"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(
              (item) =>
                item.active && (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                )
            )}
            {authStatus ? <LogoutBtn /> : <LogInBtn />}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-white rounded-xl border border-gray-200 shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems
                .filter((item) => item.active)
                .map((item) => (
                  <Link
                    key={item.name}
                    to={item.slug}
                    className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              <div className="mt-2 pt-2 border-t border-gray-200">
                {authStatus ? <LogoutBtn /> : <LogInBtn />}
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
