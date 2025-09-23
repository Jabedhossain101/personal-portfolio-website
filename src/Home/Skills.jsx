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
import { SiExpress, SiFirebase, SiJsonwebtokens, SiRedux } from 'react-icons/si';
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
    { name: 'Tailwind css', color: '#a259ff', icon: <RiTailwindCssFill /> },
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
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 10 },
  },
};

// Floating animation loop for cards
const floatingAnimation = {
  animate: {
    y: [0, -10, 0], // up and down
    transition: {
      yoyo: Infinity,
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
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
                    boxShadow: '0 15px 35px rgba(0, 198, 255, 0.5)',
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  {...floatingAnimation}
                >
                  <span
                    className="skill-icon"
                    style={{ color: skill.color }}
                    aria-label={skill.name}
                  >
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
          background: linear-gradient(120deg, #232526 0%, #2c5364 100%);
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
        }
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }
        .skills-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
          color: #00c6ff;
        }
        .category-section {
          margin-bottom: 3rem;
        }
        .category-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.8rem;
          color: #58d7ff;
          font-family: 'Montserrat', sans-serif;
          text-align: left;
          border-left: 4px solid #00c6ff;
          padding-left: 12px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
          justify-items: center;
        }
        .skill-card {
          background: #222a36;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0, 198, 255, 0.15);
          width: 140px;
          height: 160px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: default;
          user-select: none;
        }
        .skill-icon {
          font-size: 4.5rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 5px rgba(0,198,255,0.8));
        }
        .skill-name {
          font-size: 1.15rem;
          font-weight: 600;
          color: #e0e0e0;
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          .category-title {
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          .skills-title {
            font-size: 1.8rem;
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .skill-card {
            width: 120px;
            height: 140px;
            padding: 0.8rem;
          }
          .skill-icon {
            font-size: 3.8rem;
            margin-bottom: 0.8rem;
          }
          .category-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
