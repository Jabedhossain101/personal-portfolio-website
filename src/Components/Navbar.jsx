import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaTools, FaEnvelope, FaGraduationCap, FaArrowDown } from 'react-icons/fa';

const Navbar = () => {
  const handleResumeClick = async e => {
    e.preventDefault();
    const newTab = window.open(RESUME_URL, '_blank', 'noopener,noreferrer');

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
      if (newTab) {
        console.warn(
          'Automatic download failed — resume opened in a new tab.',
          err
        );
      } else {
        window.location.href = RESUME_URL;
      }
    }
  };
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 60, duration: 0.6 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className='mr-12'>Jabed Hossain</span>
        </motion.div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="navbar-links">
          <li>
            <a href="#home">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FaUser /> About
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaCode /> Projects
            </a>
          </li>
          <li>
            <a href="#skills">
              <FaTools /> Skills
            </a>
          </li>
          <li>
            <a href="#education">
              <FaGraduationCap /> Education
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope /> Contact
            </a>
          </li>
          <motion.button
            onClick={handleResumeClick}
            className="btn bg-[#00c6ff]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label="View and download resume"
          >
            <div className="flex items-center">
              <FaArrowDown className="text-lg" /> <span>Download Resume</span>
            </div>
          </motion.button>
        </ul>
      </div>

      <style>{`
        .navbar {
          background: linear-gradient(90deg, #0f2027, #2c5364);
          box-shadow: 0 4px 16px rgba(44,83,100,0.15);
          padding: 0.6rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
        }
        .navbar-logo span {
          font-size: 1.7rem;
          font-weight: bold;
          color: #00c6ff;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
        }
        .navbar-links {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .navbar-links li a {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          position: relative;
          transition: color 0.3s;
        }
        .navbar-links li a::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #00c6ff;
          transition: width 0.3s;
          position: absolute;
          left: 0;
          bottom: -4px;
        }
        .navbar-links li a:hover::after {
          width: 100%;
        }
        .navbar-links li a:hover {
          color: #00c6ff;
        }

        .menu-icon {
          display: none;
          flex-direction: column;
          cursor: pointer;
          width: 30px;
          height: 25px;
          justify-content: space-between;
        }
        .menu-icon span {
          display: block;
          height: 4px;
          background: #fff;
          border-radius: 2px;
          transition: 0.3s;
        }
        .menu-toggle {
          display: none;
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 1rem;
          }
          .navbar-links {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, #0f2027, #2c5364);
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem 0;
            align-items: center;
            display: none;
          }
          .menu-icon {
            display: flex;
          }
          .menu-toggle:checked ~ .navbar-links {
            display: flex;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
