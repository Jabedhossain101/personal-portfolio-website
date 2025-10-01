import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaReact,
} from 'react-icons/fa';
import { RiNodejsLine, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiRedux,
} from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { TbBrandCpp, TbBrandJavascript } from 'react-icons/tb';
import { LuFigma } from 'react-icons/lu';
import { VscVscode } from 'react-icons/vsc';

const categories = {
  Frontend: [
    { name: 'React', color: '#61dafb', icon: <FaReact /> },
    { name: 'JavaScript', color: '#f7df1e', icon: <TbBrandJavascript /> },
    { name: 'HTML5', color: '#e34c26', icon: <FaHtml5 /> },
    { name: 'CSS3', color: '#2965f1', icon: <FaCss3Alt /> },
    { name: 'Redux', color: '#764abc', icon: <SiRedux /> },
    { name: 'Figma', color: '#a259ff', icon: <LuFigma /> },
    { name: 'Tailwind css', color: '#38bdf8', icon: <RiTailwindCssFill /> },
  ],
  Backend: [
    { name: 'Node.js', color: '#68a063', icon: <RiNodejsLine /> },
    { name: 'Express', color: '#fff', icon: <SiExpress /> },
    { name: 'MongoDB', color: '#4db33d', icon: <BiLogoMongodb /> },
    { name: 'Firebase', color: '#ffa611', icon: <SiFirebase /> },
    { name: 'JWT', color: '#f0db4f', icon: <SiJsonwebtokens /> },
  ],
  Tools: [
    { name: 'Git', color: '#f34f29', icon: <FaGitAlt /> },
    { name: 'GitHub', color: '#181717', icon: <FaGithub /> },
    { name: 'VS Code', color: '#007acc', icon: <VscVscode /> },
  ],
  Programming_Language: [
    { name: 'Java', color: '#5382a1', icon: <FaJava /> },
    { name: 'C++', color: '#00599c', icon: <TbBrandCpp /> },
  ],
};

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70 } },
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { yoyo: Infinity, duration: 4, ease: 'easeInOut' },
  },
};

const Skills = () => {
  const starsArray = Array.from({ length: 250 }); // more stars
  const blackHoles = Array.from({ length: 10 }); // 10 black holes

  return (
    <section className="skills" id="skills">
      <div className="skills-bg">
        {/* Stars */}
        {starsArray.map((_, i) => (
          <span
            key={i}
            className={`star star${i % 3}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Planets */}
        <div className="planet planet1"></div>
        <div className="planet planet2"></div>
        <div className="planet planet3"></div>

        {/* Black Holes */}
        {blackHoles.map((_, i) => (
          <div
            key={i}
            className="blackhole"
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              width: `${50 + Math.random() * 50}px`,
              height: `${50 + Math.random() * 50}px`,
              animationDuration: `${8 + Math.random() * 7}s`,
            }}
          />
        ))}

        {/* Comet */}
        <div className="comet"></div>
      </div>

      <div className="skills-container">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="skills-title"
        >
          My Skills
        </motion.h2>

        {Object.entries(categories).map(([categoryName, skills]) => (
          <div key={categoryName} className="category-section">
            <h3 className="category-title">{categoryName}</h3>
            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map(skill => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 15px 35px rgba(0,198,255,0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  {...floatingAnimation}
                >
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <style>{`
        .skills {
          position: relative;
          background: #000; 
          color: #fff;
          padding: 4rem 1rem;
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        /* Stars */
        .skills-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .star { position: absolute; background: #fff; border-radius: 50%; opacity: 0.3; animation: twinkle 2s infinite alternate; }
        .star0 { width: 1px; height: 1px; }
        .star1 { width: 2px; height: 2px; }
        .star2 { width: 3px; height: 3px; }
        @keyframes twinkle { 0% { opacity: 0.1; } 50% { opacity: 1; } 100% { opacity: 0.1; } }

        /* Planets */
        .planet { position: absolute; border-radius: 50%; animation: rotatePlanet 60s linear infinite; box-shadow: 0 0 20px rgba(255,255,255,0.3); }
        .planet1 { top: 25%; left: 15%; width: 60px; height: 60px; background: radial-gradient(circle, #6ab7ff, #2e86de); }
        .planet2 { top: 65%; left: 70%; width: 70px; height: 70px; background: radial-gradient(circle, #f9e79f, #f4d03f); }
        .planet3 { top: 35%; left: 50%; width: 50px; height: 50px; background: radial-gradient(circle, #7d3cff, #c39bd3); }
        @keyframes rotatePlanet { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        /* Black Holes */
        .blackhole { position: absolute; border-radius: 50%; background: radial-gradient(circle, #000 0%, #111 70%, #222 100%); box-shadow: 0 0 60px rgba(0,0,0,0.8); animation: spinBlackhole linear infinite; }
        @keyframes spinBlackhole { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        /* Comet */
        .comet { position: absolute; top: 10%; left: -50px; width: 4px; height: 20px; background: linear-gradient(45deg, #fff, #00c6ff); border-radius: 50%; box-shadow: 0 0 10px rgba(0,198,255,0.6); animation: flyComet 5s linear infinite; }
        @keyframes flyComet { 0% { left: -50px; top: 10%; opacity: 0; } 50% { left: 110%; top: 40%; opacity: 1; } 100% { left: -50px; top: 10%; opacity: 0; } }

        /* Content */
        .skills-container { position: relative; z-index: 2; max-width: 1200px; width: 100%; text-align: center; }
        .skills-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 3rem; color: #00c6ff; letter-spacing: 2px; }
        .category-section { margin-bottom: 3rem; }
        .category-title { font-size: 1.8rem; font-weight: 700; margin-bottom: 1.8rem; text-align: left; border-left: 4px solid #00c6ff; padding-left: 12px; color: #58d7ff; }
        .skills-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2rem; justify-items: center; }
        .skill-card { background: #222a36; border-radius: 20px; box-shadow: 0 6px 20px rgba(0,198,255,0.15); width: 140px; height: 160px; padding: 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: default; user-select: none; }
        .skill-icon { font-size: 4.5rem; margin-bottom: 1rem; filter: drop-shadow(0 0 5px rgba(0,198,255,0.8)); }
        .skill-name { font-size: 1.15rem; font-weight: 600; color: #e0e0e0; }

        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(3, 1fr); } .category-title { text-align: center; } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; } .skill-card { width: 120px; height: 140px; } .skill-icon { font-size: 3.8rem; } .category-title { font-size: 1.3rem; } }
      `}</style>
    </section>
  );
};

export default Skills;
