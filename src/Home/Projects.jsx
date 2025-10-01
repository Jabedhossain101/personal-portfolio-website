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

  // Cursor Fire + Falling Stars Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
      constructor(x, y, color, size, vy) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.vy = vy;
        this.alpha = 1;
      }
      update() {
        this.y += this.vy;
        this.alpha -= 0.02;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const addParticles = (x, y) => {
      for (let i = 0; i < 5; i++) {
        const size = Math.random() * 4 + 2;
        const vy = Math.random() * 3 + 1;
        const color =
          Math.random() > 0.5
            ? 'orange'
            : ['#ffffff', '#a5d7ff'][Math.floor(Math.random() * 2)];
        particles.push(new Particle(x, y, color, size, vy));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };
    animate();

    const mouseMove = e => addParticles(e.clientX, e.clientY);
    window.addEventListener('mousemove', mouseMove);

    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const starsArray = Array.from({ length: 100 });

  return (
    <section className="projects-section" id="projects">
      {/* Cursor Fire + Falling Stars Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Animated Background */}
      <div className="projects-bg">
        {/* Stars */}
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

        {/* Sun */}
        <div className="sun"></div>

        {/* Planets in Orbit */}
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`orbit orbit${i}`}>
            <div className={`planet planet${i}`}></div>
          </div>
        ))}

        {/* Spaceship */}
        <div className="spaceship"></div>
      </div>

      {/* Content */}
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

      <style>{`
        .projects-section {
          min-height: 100vh;
          background: #000;
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Stars */
        .star { position: absolute; background: #fff; border-radius: 50%; opacity: 0.3; animation: twinkle 2s infinite alternate; }
        @keyframes twinkle { 0% { opacity: 0.1; } 50% { opacity: 1; } 100% { opacity: 0.1; } }

        /* Sun */
        .sun {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, red, orange, yellow);
          border-radius: 50%;
          box-shadow: 0 0 60px 30px rgba(255,200,0,0.7);
        }

        /* Orbits */
        .orbit { position: absolute; border: 1px dashed rgba(255,255,255,0.2); border-radius: 50%; top: 40%; left: 20%; transform: translate(-50%, -50%); animation: rotate 25s linear infinite; }
        .orbit1 { width: 120px; height: 120px; animation-duration: 12s; }
        .orbit2 { width: 180px; height: 180px; animation-duration: 18s; }
        .orbit3 { width: 240px; height: 240px; animation-duration: 24s; }
        .orbit4 { width: 300px; height: 300px; animation-duration: 28s; }
        .orbit5 { width: 380px; height: 380px; animation-duration: 32s; }
        .planet { width: 25px; height: 25px; border-radius: 50%; position: absolute; top: 0; left: 50%; transform: translateX(-50%); }
        .planet1 { background: #b0b0b0; }
        .planet2 { background: #2e86de; border: 1px solid #fff; }
        .planet3 { background: #d14b3d; }
        .planet4 { background: #f4d03f; }
        .planet5 { background: #7fdbff; }
        @keyframes rotate { 100% { transform: translate(-50%, -50%) rotate(360deg); } }

        /* Spaceship */
        .spaceship {
          position: absolute;
          top: 10%;
          left: -100px;
          width: 70px;
          height: 35px;
          background: linear-gradient(90deg, silver, gray);
          border-radius: 50% 50% 40% 40%;
          box-shadow: 0 0 20px rgba(0,255,200,0.7);
          animation: flyAcross 15s linear infinite;
        }
        .spaceship::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(0,255,200,0.8), transparent);
          border-radius: 50%;
          animation: glow 1s infinite alternate;
        }
        @keyframes flyAcross {
          0% { left: -120px; top: 10%; }
          50% { top: 20%; }
          100% { left: 110%; top: 15%; }
        }
        @keyframes glow {
          from { opacity: 0.5; transform: translateX(-50%) scale(0.8); }
          to { opacity: 1; transform: translateX(-50%) scale(1.2); }
        }

        .projects-container { max-width: 1200px; margin: 0 auto; width: 100%; position: relative; z-index: 3; }
        .projects-title { font-size: 2.2rem; font-weight: 700; margin-bottom: 2.5rem; letter-spacing: 2px; color: #00c6ff; text-align: center; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .project-card { background: rgba(20, 30, 50, 0.9); border-radius: 18px; padding: 0; box-shadow: 0 4px 24px rgba(0,198,255,0.12); transition: transform 0.2s, box-shadow 0.2s; backdrop-filter: blur(6px); display: flex; flex-direction: column; }
        .project-card:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 8px 32px rgba(0,198,255,0.3); }

        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        }
        @media (max-width: 600px) {
          .projects-title { font-size: 1.5rem; }
          .projects-grid { grid-template-columns: 1fr; gap: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
