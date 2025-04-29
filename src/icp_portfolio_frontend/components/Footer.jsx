import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001017] text-center px-6 py-8 mt-auto">
      <div className="flex flex-col items-center gap-4">
        {/* Simon Lindsay Copyright */}
        <p className="text-sm text-[#8BFFFE]">
          © {new Date().getFullYear()} Simon Lindsay.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="mailto:simon@simondlindsay.co.uk"
            className="text-[#8BFFFE] hover:text-[#4DE5F2] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/simon-lindsay-46b27552/"
            className="text-[#8BFFFE] hover:text-[#4DE5F2] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/simon-lindsay"
            className="text-[#8BFFFE] hover:text-[#4DE5F2] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
