import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCode,
} from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">
            Md <span className="text-cyan-400">Jabed</span> Hossain
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Full Stack Web Developer | React Specialist | Problem Solver
          </p>
          <p className="text-xs text-gray-500">
            © 2025 Md Jabed Hossain. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-cyan-400 mb-3 border-b border-gray-700 pb-1">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {['Home', 'About', 'Projects', 'Skill', 'Education', 'Contact'].map(
              link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-cyan-400 flex items-center gap-2 transition"
                  >
                    <span className="text-cyan-400">›</span> {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-pink-400 mb-3 border-b border-gray-700 pb-1">
            Contact
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MdEmail className="text-cyan-400 text-xl" />
              <span>ahmedrafsan101@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-cyan-400 text-xl" />
              <span>01887686535</span>
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-cyan-400 text-xl" />
              <span> Bashundhara R/A, Dhaka</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-lg font-semibold text-pink-400 mb-3 border-b border-gray-700 pb-1">
            Legal
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-cyan-400 transition flex items-center gap-2"
              >
                <span className="text-cyan-400">›</span> Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-400 transition flex items-center gap-2"
              >
                <span className="text-cyan-400">›</span> Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-400 transition flex items-center gap-2"
              >
                <span className="text-cyan-400">›</span> Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Social Icons */}
      <div className="flex justify-center gap-5 mt-10 text-2xl text-gray-400">
        <a
          href="https://github.com/Jabedhossain101"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mdjabedhossain12"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/mdjabedhossain27/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
