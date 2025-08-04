import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>MD Jabed Hossain</span>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Inline styles for demo, move to CSS file for production */}
      <style>{`
        .navbar {
          background: linear-gradient(90deg, #0f2027, #2c5364);
          box-shadow: 0 4px 16px rgba(44,83,100,0.15);
          padding: 0.5rem 0;
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
          color: #fff;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
        }
        .navbar-links {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        .navbar-links li a {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
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
    </nav>
  );
};
export default Navbar;
