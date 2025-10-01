import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const starsArray = Array.from({ length: 120 });

  useEffect(() => {
    const moveCursor = e => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <section className="about" id="about">
      {/* Cursor Effect */}
      <div
        className="cursor-glow"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Starry Background */}
      <div className="about-bg">
        {starsArray.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Solar System */}
      <div className="solar-system">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className={`orbit orbit${i}`}>
            <div className={`planet planet${i}`}></div>
          </div>
        ))}
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

        /* Cursor Glow */
        .cursor-glow {
          position: fixed;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 198, 255, 0.2);
          box-shadow: 0 0 30px 15px rgba(0, 198, 255, 0.15);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.15s ease-out;
          z-index: 9999;
        }

        /* Stars (twinkling like Banner) */
        .about-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .star {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          opacity: 0.3;
          animation: twinkle 2s infinite alternate;
        }
        @keyframes twinkle { 0% { opacity: 0.1; } 50% { opacity: 1; } 100% { opacity: 0.1; } }

        /* Solar System */
        .solar-system {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        .orbit { border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: rotate 20s linear infinite; }
        .orbit1 { width: 80px; height: 80px; animation-duration: 6s; }
        .orbit2 { width: 120px; height: 120px; animation-duration: 10s; }
        .orbit3 { width: 160px; height: 160px; animation-duration: 14s; }
        .orbit4 { width: 200px; height: 200px; animation-duration: 18s; }
        .orbit5 { width: 250px; height: 250px; animation-duration: 22s; }
        .orbit6 { width: 300px; height: 300px; animation-duration: 26s; }
        .orbit7 { width: 360px; height: 360px; animation-duration: 30s; }
        .orbit8 { width: 420px; height: 420px; animation-duration: 34s; }

        .planet { width: 14px; height: 14px; border-radius: 50%; position: absolute; top: -7px; left: 50%; transform: translateX(-50%); }
        .planet1 { background: #00c6ff; }
        .planet2 { background: #ff9800; }
        .planet3 { background: #4caf50; }
        .planet4 { background: #9c27b0; }
        .planet5 { background: #f44336; }
        .planet6 { background: #03a9f4; }
        .planet7 { background: #cddc39; }
        .planet8 { background: #e91e63; }

        @keyframes rotate { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }

        .about-container { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; text-align: left; font-family: 'Montserrat', sans-serif; }
        .about-title { font-size: 2.8rem; font-weight: 700; margin-bottom: 2rem; letter-spacing: 2px; color: #00c6ff; text-align: center; }
        .about-content p { font-size: 1.2rem; color: #e0e0e0; line-height: 1.7; margin-bottom: 1.5rem; }
        .highlight { color: #00c6ff; font-weight: 700; }
        h3 { color: #00c6ff; margin-top: 2.5rem; margin-bottom: 1rem; font-weight: 600; font-size: 1.5rem; letter-spacing: 1px; }
        .about-list { list-style: none; padding-left: 1rem; margin-bottom: 2rem; color: #cfd8dc; font-size: 1.1rem; line-height: 1.5; }
        .about-list li { margin-bottom: 0.7rem; position: relative; padding-left: 1.8rem; }
        .about-list li::before { content: '•'; position: absolute; left: 0; color: #00c6ff; font-weight: bold; font-size: 1.3rem; line-height: 1; top: 2px; }
      `}</style>
    </section>
  );
};

export default About;
