import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaCode,
  FaTools,
  FaEnvelope,
  FaGraduationCap,
  FaArrowDown,
  FaBars, // Using FaBars for a cleaner menu icon
  FaTimes, // Using FaTimes for the close icon
} from 'react-icons/fa';

// Google Drive link for the resume
const RESUME_URL =
  'https://drive.google.com/file/d/1E01sAL5TFBq9RRwMgKkd2ObisZkybU0V/view'; // direct download link

const navLinks = [
  { href: '#home', icon: FaHome, text: 'Home' },
  { href: '#about', icon: FaUser, text: 'About' },
  { href: '#projects', icon: FaCode, text: 'Projects' },
  { href: '#skills', icon: FaTools, text: 'Skills' },
  { href: '#education', icon: FaGraduationCap, text: 'Education' },
  { href: '#contact', icon: FaEnvelope, text: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResumeClick = async e => {
    e.preventDefault();

    try {
      const res = await fetch(RESUME_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error('Network response was not ok');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'MD_Jabed_Hossain_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Resume download failed:', err);
      window.open(RESUME_URL, '_blank', 'noopener,noreferrer'); // fallback
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      // Tailwind classes for the modern transparent sticky navbar
      className="sticky top-0 z-50 py-3 backdrop-blur-md shadow-lg shadow-sky-900/10 transition-all duration-300 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80, duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          className="text-2xl font-extrabold tracking-wider text-sky-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          MD Jabed Hossain
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map(link => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={link.href}
                className="flex items-center gap-2 text-white font-medium text-lg hover:text-sky-400 transition duration-300 relative group"
              >
                <link.icon className="text-xl" /> <span>{link.text}</span>
                {/* Modern underline effect */}
                <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <motion.button
          onClick={handleResumeClick}
          className="hidden lg:block py-2 px-4 text-sm font-bold text-white rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg hover:shadow-sky-500/50 transition duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          aria-label="View and download resume"
        >
          <div className="flex items-center gap-2">
            <FaArrowDown className="text-base" /> <span>Download Resume</span>
          </div>
        </motion.button>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Conditionally Rendered) */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden"
      >
        <ul className="flex flex-col items-center py-4 space-y-4 bg-black/80 backdrop-blur-sm">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="flex items-center gap-3 text-white text-xl hover:text-sky-400 transition duration-300"
              >
                <link.icon /> {link.text}
              </a>
            </li>
          ))}
          <motion.button
            onClick={handleResumeClick}
            className="w-full max-w-xs mt-4 py-2 px-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg hover:shadow-sky-500/50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label="View and download resume"
          >
            <div className="flex items-center justify-center gap-2">
              <FaArrowDown className="text-xl" /> <span>Download Resume</span>
            </div>
          </motion.button>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
