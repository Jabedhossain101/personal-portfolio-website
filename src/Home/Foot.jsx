import React from 'react';
import './Foot.css';

const Foot = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>My Portfolio</h3>
          <p>Full-stack developer building React and Node.js applications.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>

        <div className="footer-social">
          <h4>Follow</h4>
          <ul>
            <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {year} Your Name. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Foot;