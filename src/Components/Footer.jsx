import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-cyan-400">MD Jabed Hossain</h1>

        <nav className="flex justify-center gap-6 text-white text-sm font-medium">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-cyan-400 transition" />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © 2025 MD Jabed Hossain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
