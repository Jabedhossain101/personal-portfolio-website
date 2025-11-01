import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import projects from '../Data/projectsData';
import { RiLiveLine } from 'react-icons/ri';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const canvasRef = useRef(null);

  // Animated Galaxy Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const numStars = 400;
    const stars = [];

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.size = Math.random() * 1.2 + 0.5;
      }
      update() {
        this.z -= 2;
        if (this.z <= 0) this.reset();
      }
      draw() {
        const fx =
          (this.x - canvas.width / 2) * (canvas.width / this.z) +
          canvas.width / 2;
        const fy =
          (this.y - canvas.height / 2) * (canvas.width / this.z) +
          canvas.height / 2;
        const r = (canvas.width / this.z) * this.size;
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(fx, fy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) stars.push(new Star());

    const animate = () => {
      ctx.fillStyle = '#000010';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => setCanvasSize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Full-page Galaxy Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <section className="projects-section" id="projects">
        <div
          className="projects-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
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
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                  </div>
                  <div className="flex justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="self-start bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
                    >
                      View Details
                    </Link>
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center gap-1 justify-center bg-white hover:bg-cyan-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition">
                        <RiLiveLine />
                        Live Demo
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .projects-section {
          min-height: 100vh;
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .projects-container { max-width: 1200px; margin: 0 auto; width: 100%; }
        .projects-title { font-size: 2.2rem; font-weight: 700; margin-bottom: 2.5rem; letter-spacing: 2px; color: #00c6ff; text-align: center; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .project-card { background: rgba(20, 30, 50, 0.9); border-radius: 18px; padding: 0; box-shadow: 0 4px 24px rgba(0,198,255,0.12); transition: transform 0.2s, box-shadow 0.2s; backdrop-filter: blur(6px); display: flex; flex-direction: column; }
        .project-card:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 8px 32px rgba(0,198,255,0.3); }

        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; } }
        @media (max-width: 600px) { .projects-title { font-size: 1.5rem; } .projects-grid { grid-template-columns: 1fr; gap: 1rem; } }
      `}</style>
    </>
  );
};

export default Projects;
