import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
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
        </div>

        {/* Motion Image Section */}
        <motion.div
          className="banner-image"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, type: 'spring' }}
        >
          <img
            src="https://i.ibb.co.com/ynJsq455/image.png" // Replace with your actual image URL if different
          
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
          margin-bottom: 2rem;
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
        .banner-btn:hover {
          background: #00c6ff;
          color: #fff;
        }
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
        .banner-image img:hover {
          transform: scale(1.05) rotate(2deg);
        }
        @media (max-width: 768px) {
          .banner-wrapper {
            flex-direction: column-reverse;
            text-align: center;
          }
          .banner-content {
            text-align: center;
          }
          .banner-title {
            font-size: 2rem;
          }
          .banner-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
