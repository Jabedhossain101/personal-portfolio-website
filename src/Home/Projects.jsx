import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { RiLiveLine } from 'react-icons/ri';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A modern personal portfolio built with React and Node.js, featuring animations and responsive design.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    gitLink: '',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Plant care App',
    desc: 'Full-featured MERN stack e-commerce app with payment integration and admin dashboard.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    link: 'https://mango-store-app.web.app/',
    gitLink: 'https://github.com/Jabedhossain101/Mango-client',
    img: 'https://i.ibb.co.com/v4Ds8Htq/image.png',
  },
  {
    title: 'Metrimony App',
    desc: 'A responsive blog platform with authentication, CRUD features, and rich text editor.',
    tech: ['React', 'Express', 'MongoDB', 'tailwindcss'],
    link: 'https://metrimony-auth.web.app/',
    gitLink: 'https://github.com/Jabedhossain101/Metrimony-web-client',
    img: 'https://i.ibb.co.com/5XV4G5rN/image.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="projects-title"
        >
          My Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full">
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='flex items-center gap-1'>
                      <RiLiveLine />
                      Live Demo
                    </div>
                  </a>
                  <a
                    href={project.gitLink}
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-1">
                      {' '}
                      <FaGithub className="text-2xl" />
                       CODE
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .projects {
          background: linear-gradient(120deg, #232526 0%, #2c5364 100%);
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
        }
        .projects-container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }
        .projects-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
          color: #00c6ff;
          text-align: center;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .project-card {
          background: #222a36;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(44,83,100,0.12);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .project-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(0,198,255,0.18);
        }
        .project-img img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-bottom: 2px solid #00c6ff;
        }
        .project-info {
          padding: 1.3rem 1rem 1rem 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .project-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.7rem;
          color: #00c6ff;
        }
        .project-info p {
          font-size: 1rem;
          color: #e0e0e0;
          margin-bottom: 1rem;
        }
        .project-tech {
          display: flex;
          gap: 0.7rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .project-tech span {
          background: #00c6ff;
          color: #fff;
          font-size: 0.85rem;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-weight: 500;
        }
        .project-link {
          margin-top: auto;
          background: #fff;
          color: #00c6ff;
          font-weight: 600;
          padding: 0.5rem 1.3rem;
          border-radius: 20px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          box-shadow: 0 2px 8px rgba(44,83,100,0.10);
        }
          .github-link {
          background:  #00c6ff;
          color: #fff;
          font-weight: 600;
          padding: 0.5rem 1.3rem;
          border-radius: 20px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          box-shadow: 0 2px 8px rgba(44,83,100,0.10);
        } 
        .project-link:hover {
          background: #00c6ff;
          color: #fff;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .project-img img {
            height: 140px;
          }
        }
        @media (max-width: 600px) {
          .projects-title {
            font-size: 1.5rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .project-img img {
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
