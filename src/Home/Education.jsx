import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'American Interantional University-Bangladesh (AIUB)',
    year: '2023 - Present',
    details:
      'Focused on software engineering, full-stack development, and participated in competitive programming contests.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Principal Kazi Farukey College',
    year: '2020 - 2022',
    details:
      'Studied Science with emphasis on Physics, Chemistry, and Mathematics. Achieved GPA 5.00 out of 5.00.',
  },

  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Lakshmipur Adarsha Samad Govt. High School',
    year: '2018 - 2020',
    details:
      'Major in Science. Achieved GPA 5.00 with distinction in Mathematics and ICT.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="education-title"
        >
          My Education
        </motion.h2>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              className="education-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="edu-year">{edu.year}</p>
              <p className="edu-detail">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education {
          background: linear-gradient(120deg, #1e2a38 0%, #283e51 100%);
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
        }
        .education-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .education-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
          color: #00c6ff;
          text-align: center;
        }
        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .education-card {
          background: #222a36;
          border-radius: 18px;
          padding: 1.5rem;
          box-shadow: 0 4px 24px rgba(44,83,100,0.12);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .education-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(0,198,255,0.18);
        }
        .education-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #00c6ff;
          margin-bottom: 0.5rem;
        }
        .education-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #e0e0e0;
          margin-bottom: 0.3rem;
        }
        .edu-year {
          font-size: 0.95rem;
          color: #b0bec5;
          margin-bottom: 0.7rem;
        }
        .edu-detail {
          font-size: 0.95rem;
          color: #cfd8dc;
        }

        @media (max-width: 900px) {
          .education-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (max-width: 600px) {
          .education-title {
            font-size: 1.5rem;
          }
          .education-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
