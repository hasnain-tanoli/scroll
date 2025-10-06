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
    <header className="bg-primary text-white py-4 shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2">
            <Link to="/">
              <img
                src="/Logo-Light.png"
                alt="Logo"
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium cursor-pointer">
            {navItems.map(
              (item) =>
                item.active && (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.slug)}
                    className="hover:text-gray-200 transition-colors"
                  >
                    {item.name}
                  </button>
                )
            )}
            {authStatus ? <LogoutBtn /> : <LogInBtn />}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 text-white text-center font-medium">
            {navItems
              .filter((item) => item.active)
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.slug}
                  className="hover:text-gray-200 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            {authStatus ? <LogoutBtn /> : <LogInBtn />}
          </nav>
        )}
      </Container>
    </header>
  );
}
