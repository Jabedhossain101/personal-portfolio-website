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
            passionate <b>MERN Stack Developer</b> with over 2 years of hands-on
            experience in building modern, scalable, and high-performance web
            applications.
          </p>
          <p>
            My journey started with a deep curiosity about how websites work and
            evolved into a full-time career. I thrive in designing clean,
            intuitive user interfaces and crafting seamless user experiences. I
            love working with React, Node.js, Express, and MongoDB to bring
            ideas to life.
          </p>
          <p>
            Apart from coding, I enjoy learning about new technologies,
            improving my skills continuously, and collaborating with teams to
            deliver impactful products.
          </p>

          <h3>Technical Skills:</h3>
          <ul className="about-list">
            <li>🌟 2+ years experience in full-stack web development</li>
            <li>
              💻 Expert in React, Redux, Node.js, Express, MongoDB, REST APIs
            </li>
            <li>
              🎨 Strong eye for UI/UX design with CSS, Tailwind, and Styled
              Components
            </li>
            <li>⚙️ Experience with Git, GitHub, Agile methodologies</li>
            <li>
              🚀 Always learning new technologies like TypeScript, Next.js, and
              GraphQL
            </li>
          </ul>

          <h3>Personal Interests:</h3>
          <ul className="about-list">
            <li>📚 Reading tech blogs and tutorials</li>
            <li>🎮 Gaming and exploring game development</li>
            <li>🎵 Listening to music and podcasts</li>
            <li>✈️ Traveling and exploring new cultures</li>
          </ul>

          <h3>Achievements & Goals:</h3>
          <ul className="about-list">
            <li>
              🏆 Developed and deployed 10+ web applications with live user
              feedback
            </li>
            <li>
              🎯 Goal: To become a lead developer and contribute to open-source
              projects
            </li>
            <li>📢 Active contributor to coding communities and forums</li>
          </ul>
        </motion.div>
      </div>
      <style>{`
        .about {
          background: linear-gradient(120deg, #232526 0%, #2c5364 100%);
          color: #fff;
          padding: 5rem 2rem 4rem 2rem;
          display: flex;
          justify-content: center;
        }
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: left;
          font-family: 'Montserrat', sans-serif;
        }
        .about-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: 2px;
          color: #00c6ff;
          text-align: center;
        }
        .about-content p {
          font-size: 1.2rem;
          color: #e0e0e0;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .highlight {
          color: #00c6ff;
          font-weight: 700;
        }
        h3 {
          color: #00c6ff;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.5rem;
          letter-spacing: 1px;
        }
        .about-list {
          list-style: none;
          padding-left: 1rem;
          margin-bottom: 2rem;
          color: #cfd8dc;
          font-size: 1.1rem;
          line-height: 1.5;
        }
        .about-list li {
          margin-bottom: 0.7rem;
          position: relative;
          padding-left: 1.8rem;
        }
        .about-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #00c6ff;
          font-weight: bold;
          font-size: 1.3rem;
          line-height: 1;
          top: 2px;
        }
        @media (max-width: 768px) {
          .about {
            padding: 4rem 1.5rem 3rem 1.5rem;
          }
          .about-title {
            font-size: 2.2rem;
          }
          .about-content p {
            font-size: 1.1rem;
          }
          .about-list {
            font-size: 1rem;
          }
          h3 {
            font-size: 1.3rem;
          }
        }
        @media (max-width: 480px) {
          .about {
            padding: 3rem 1rem 2rem 1rem;
          }
          .about-title {
            font-size: 1.8rem;
          }
          .about-content p {
            font-size: 1rem;
          }
          .about-list {
            font-size: 0.95rem;
          }
          h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
