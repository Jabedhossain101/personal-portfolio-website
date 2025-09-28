import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about" id="about">
      {/* Galaxy Background */}
      <div className="galaxy-bg">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        {/* Solar System */}
        <div className="solar-system">
          <div className="orbit orbit1">
            <div className="planet planet1"></div>
          </div>
          <div className="orbit orbit2">
            <div className="planet planet2"></div>
          </div>
          <div className="orbit orbit3">
            <div className="planet planet3"></div>
          </div>
          <div className="orbit orbit4">
            <div className="planet planet4"></div>
          </div>
          <div className="orbit orbit5">
            <div className="planet planet5"></div>
          </div>
          <div className="orbit orbit6">
            <div className="planet planet6"></div>
          </div>
          <div className="orbit orbit7">
            <div className="planet planet7"></div>
          </div>
          <div className="orbit orbit8">
            <div className="planet planet8"></div>
          </div>
        </div>
      </div>

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
          position: relative;
          background: black;
          overflow: hidden;
          color: #fff;
          padding: 5rem 2rem;
        }

        /* Star background layers */
        .stars, .stars2, .stars3 {
          position: absolute;
          width: 200%;
          height: 200%;
          background: transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
          animation: move-stars 60s linear infinite;
        }
        .stars2 { animation-duration: 120s; opacity: 0.6; }
        .stars3 { animation-duration: 180s; opacity: 0.3; }

        @keyframes move-stars {
          from { transform: translateY(0px); }
          to { transform: translateY(-1000px); }
        }

        /* Solar System */
        .solar-system {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          transform: translate(-50%, -50%);
        }

        .orbit {
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: rotate 20s linear infinite;
        }

        .orbit1 { width: 80px; height: 80px; animation-duration: 6s; }
        .orbit2 { width: 120px; height: 120px; animation-duration: 10s; }
        .orbit3 { width: 160px; height: 160px; animation-duration: 14s; }
        .orbit4 { width: 200px; height: 200px; animation-duration: 18s; }
        .orbit5 { width: 250px; height: 250px; animation-duration: 22s; }
        .orbit6 { width: 300px; height: 300px; animation-duration: 26s; }
        .orbit7 { width: 360px; height: 360px; animation-duration: 30s; }
        .orbit8 { width: 420px; height: 420px; animation-duration: 34s; }

        .planet {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00c6ff;
          position: absolute;
          top: -7px;
          left: 50%;
          transform: translateX(-50%);
        }
        .planet2 { background: #ff9800; }
        .planet3 { background: #4caf50; }
        .planet4 { background: #9c27b0; }
        .planet5 { background: #f44336; }
        .planet6 { background: #03a9f4; }
        .planet7 { background: #cddc39; }
        .planet8 { background: #e91e63; }

        @keyframes rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .about-container {
          position: relative;
          z-index: 2;
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
        .highlight { color: #00c6ff; font-weight: 700; }

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
      `}</style>
    </section>
  );
};

export default About;
