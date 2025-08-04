import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="about-title"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="about-content"
        >
          <p>
            Hello! I'm <span className="highlight">MD Jabed Hossain</span>, a
            passionate <b>MERN Stack Developer</b> with a love for building
            modern, scalable web applications. My journey in web development
            started with curiosity and quickly grew into a professional pursuit.
            I enjoy crafting beautiful user interfaces and seamless user
            experiences.
          </p>
          <ul className="about-list">
            <li>🌟 2+ years experience in web development</li>
            <li>💻 Expert in React, Node.js, Express & MongoDB</li>
            <li>🎨 Strong eye for UI/UX design</li>
            <li>🚀 Always learning new technologies</li>
            <li>🤝 Collaborative & team-oriented</li>
          </ul>
        </motion.div>
      </div>
      <style>{`
        .about {
          background: linear-gradient(120deg, #232526 0%, #2c5364 100%);
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
        }
        .about-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .about-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
          color: #00c6ff;
        }
        .about-content p {
          font-size: 1.15rem;
          color: #e0e0e0;
          margin-bottom: 2rem;
        }
        .highlight {
          color: #00c6ff;
          font-weight: bold;
        }
        .about-list {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 1.05rem;
          color: #cfd8dc;
        }
        @media (max-width: 600px) {
          .about-title {
            font-size: 1.5rem;
          }
          .about-content p {
            font-size: 1rem;
          }
          .about-list {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
