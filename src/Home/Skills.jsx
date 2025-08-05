import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', color: '#61dafb', icon: '⚛️' },
  { name: 'Node.js', color: '#68a063', icon: '🟩' },
  { name: 'Express', color: '#fff', icon: '🚂' },
  { name: 'MongoDB', color: '#4db33d', icon: '🍃' },
  { name: 'JavaScript', color: '#f7df1e', icon: '🟨' },
  { name: 'HTML5', color: '#e34c26', icon: '🟧' },
  { name: 'CSS3', color: '#2965f1', icon: '🟦' },
  { name: 'Redux', color: '#764abc', icon: '🔄' },
  { name: 'Git', color: '#f34f29', icon: '🔗' },
  { name: 'Figma', color: '#a259ff', icon: '🎨' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
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
        </div>
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
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }
        .skills-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
          color: #00c6ff;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
          justify-items: center;
        }
        .skill-card {
          background: #222a36;
          border-radius: 16px;
          box-shadow: 0 4px 18px rgba(44,83,100,0.12);
          padding: 1.5rem 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .skill-card:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 8px 32px rgba(0,198,255,0.18);
        }
        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 0.7rem;
        }
        .skill-name {
          font-size: 1.08rem;
          font-weight: 600;
          color: #e0e0e0;
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.2rem;
          }
        }
        @media (max-width: 600px) {
          .skills-title {
            font-size: 1.5rem;
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }
          .skill-card {
            padding: 1rem 0.3rem;
          }
          .skill-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
