import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const RESUME_URL =
  'https://drive.google.com/file/d/1OPRaHdaUoOj0tnkC3ABylq8LZ2uDsRUy/view?usp=sharing';

const Banner = () => {
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
    <section className="banner" id="home">
      <div className="banner-wrapper">
        <div className="banner-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="banner-title"
          >
            Hi, I'm <span className="highlight">MD Jabed Hossain</span>
          </motion.h1>
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="banner-subtitle"
          >
            MERN Stack Developer & Web Enthusiast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="banner-desc"
          >
            I build modern, responsive web applications with beautiful UI and
            smooth user experience.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="https://github.com/Jabedhossain101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjabedhossain12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/mdjabedhossain27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </motion.div>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              href="#contact"
              className="banner-btn"
              whileHover={{
                scale: 1.08,
                backgroundColor: '#00c6ff',
                color: '#fff',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact Me
            </motion.a>

            <motion.button
              onClick={handleResumeClick}
              className="resume-btn"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="View and download resume"
            >
              View / Download Resume
            </motion.button>
          </div>
        </div>

        {/* Image */}
        <motion.div
          className="banner-image"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, type: 'spring' }}
        >
          <img
            src="https://i.ibb.co/ynJsq455/image.png"
            alt="MD Jabed Hossain"
          />
        </motion.div>
      </div>

      <style>{`
        .banner {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(120deg, #0f2027 0%, #2c5364 100%);
          color: #fff;
          padding: 3rem 1rem;
        }
        .banner-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .banner-content {
          flex: 1 1 500px;
          text-align: left;
        }
        .banner-title {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
        }
        .highlight {
          color: #00c6ff;
          background: linear-gradient(90deg, #00c6ff 40%, #0072ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .banner-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          color: #e0e0e0;
        }
        .banner-desc {
          font-size: 1.1rem;
          color: #cfd8dc;
          margin-bottom: 1.5rem;
        }

        /* Social Icons */
        .social-links {
          display: flex;
          gap: 15px;
          margin-bottom: 2rem;
        }
        .social-links a {
          color: #00c6ff;
          font-size: 1.6rem;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .social-links a:hover {
          color: #fff;
          transform: scale(1.1);
        }

        .banner-btn {
          display: inline-block;
          padding: 0.8rem 2.2rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #00c6ff;
          background: #fff;
          border-radius: 30px;
          box-shadow: 0 4px 16px rgba(44,83,100,0.10);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .banner-btn:hover { background: #00c6ff; color: #fff; }

        .resume-btn {
          padding: 0.8rem 1.6rem;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(90deg,#00c6ff 0%, #0072ff 100%);
          border: none;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0,198,255,0.18);
        }
        .resume-btn:focus { outline: 3px solid rgba(0,198,255,0.25); }

        .banner-image {
          flex: 1 1 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .banner-image img {
          max-width: 400px;
          width: 100%;
          border-radius: 50%;
          border: 5px solid #00c6ff;
          box-shadow: 0 10px 25px rgba(0, 198, 255, 0.3);
          transition: transform 0.4s ease-in-out;
        }
        .banner-image img:hover { transform: scale(1.05) rotate(2deg); }

        @media (max-width: 768px) {
          .banner-wrapper { flex-direction: column-reverse; text-align: center; }
          .banner-content { text-align: center; }
          .banner-title { font-size: 2rem; }
          .banner-subtitle { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default Banner;
