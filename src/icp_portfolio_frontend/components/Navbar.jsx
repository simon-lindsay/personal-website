import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#000F17] shadow-md z-50">
      <div className="w-[90%] max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo Image */}
        <a
          href="#top"
          className="flex items-center space-x-2"
          onMouseEnter={(e) =>
            (e.currentTarget.querySelector("img").src = "/images/sdl-logo.png")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.querySelector("img").src = "/images/sdl-logo.png")
          }
        >
          <img
            src="/images/sdl-logo.png"
            alt="Simon Lindsay Logo"
            className="h-12 w-auto max-w-[140px] transition-all duration-300"
          />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-[#4DE5F2]">
          <a
            href="#about"
            className="transition-all hover:font-bold hover:text-[#8BFFFE]"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition-all hover:font-bold hover:text-[#8BFFFE]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="transition-all hover:font-bold hover:text-[#8BFFFE]"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#4DE5F2] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-4xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#000F17] text-[#4DE5F2] py-4 space-y-4">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:font-bold hover:text-[#8BFFFE]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:font-bold hover:text-[#8BFFFE]"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:font-bold hover:text-[#8BFFFE]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
