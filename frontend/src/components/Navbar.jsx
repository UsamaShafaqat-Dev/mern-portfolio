import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  // 👇 Mobile menu ko open/close karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  // Active link check karne ke liye
  const isActive = (path) => location.pathname === path;

  // Jab koi link click ho toh menu khud band ho jaye
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-900 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold text-white flex items-center gap-2 group z-50"
        >
          <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-lg border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
            U
          </span>
          <span className="tracking-wider group-hover:text-primary transition-colors">
            USAMA
          </span>
        </Link>

        {/* Desktop Navigation (Bari screens par show hoga) */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={`text-sm font-medium transition-colors ${isActive("/skills") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium transition-colors ${isActive("/projects") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side: CV Button & Hamburger Icon */}
        <div className="flex items-center gap-4 z-50">
          {/* Download CV Button (Desktop ke liye) */}
          <a
            href="/Usama_Shafaqat_CV.pdf"
            download="Usama_Shafaqat_CV.pdf"
            className="hidden sm:flex border border-gray-800 bg-cardBg hover:bg-primary hover:border-primary text-white text-sm px-4 py-2 rounded-xl font-medium transition-all duration-300 items-center gap-2 shadow-md hover:shadow-primary/20"
          >
            Download CV
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </a>

          {/* Hamburger Menu Toggle Icon (Sirf Mobile ke liye) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary focus:outline-none transition-colors"
          >
            {isOpen ? (
              // Close (X) Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger (3 Lines) Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Smooth Slide Animation) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-cardBg/95 backdrop-blur-xl border-b border-gray-800 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          <Link
            to="/"
            onClick={closeMenu}
            className={`text-base font-medium transition-colors ${isActive("/") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`text-base font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            About
          </Link>
          <Link
            to="/skills"
            onClick={closeMenu}
            className={`text-base font-medium transition-colors ${isActive("/skills") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className={`text-base font-medium transition-colors ${isActive("/projects") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`text-base font-medium transition-colors ${isActive("/contact") ? "text-primary" : "text-gray-400 hover:text-white"}`}
          >
            Contact
          </Link>

          {/* Mobile CV Button (Mobile menu ke andar) */}
          <a
            href="/Usama_Shafaqat_CV.pdf"
            download="Usama_Shafaqat_CV.pdf"
            onClick={closeMenu}
            className="sm:hidden mt-2 border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white text-sm px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
          >
            Download CV
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
