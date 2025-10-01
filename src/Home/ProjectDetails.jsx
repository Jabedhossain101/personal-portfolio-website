import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { RiLiveLine } from 'react-icons/ri';
import projects from '../Data/projectsData.json';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  const [shootingStars, setShootingStars] = useState([]);

  // Shooting stars effect
  useEffect(() => {
    const interval = setInterval(() => {
      const starId = Date.now();
      const top = Math.random() * 50; // % from top
      const left = Math.random() * 80; // % from left
      const length = Math.random() * 100 + 50; // px
      const duration = Math.random() * 1 + 1; // seconds

      setShootingStars(prev => [
        ...prev,
        { id: starId, top, left, length, duration },
      ]);
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== starId));
      }, duration * 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!project)
    return <p className="text-center mt-10 text-white">Project not found.</p>;

  return (
    <section className="project-details relative text-white min-h-screen py-10 px-4 overflow-hidden">
      {/* Space stars background */}
      <div className="stars"></div>
      <div className="stars stars2"></div>
      <div className="stars stars3"></div>

      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.length}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-cyan-400 mb-4">
          {project.title}
        </h1>
        <p className="text-gray-300 mb-6">{project.desc}</p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-cyan-300 mb-2">
            Main Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-cyan-500 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <RiLiveLine /> Live Demo
          </a>
          <a
            href={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaGithub /> GitHub Code
          </a>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-cyan-300 mb-2">
            Challenges Faced
          </h2>
          <p className="text-gray-300">{project.challenges}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-cyan-300 mb-2">
            Future Plans
          </h2>
          <p className="text-gray-300">{project.futurePlans}</p>
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <style>{`
        /* Star Background Animation */
        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0; left: 0;
          width: 200%; height: 200%;
          background: transparent url('https://www.script-tutorials.com/demos/360/images/stars.png') repeat;
          animation: moveStars 100s linear infinite;
          z-index: 0;
        }
        .stars2 { background-size: contain; animation: moveStars 150s linear infinite; opacity: 0.6; }
        .stars3 { background-size: cover; animation: moveStars 200s linear infinite; opacity: 0.4; }
        @keyframes moveStars { from { transform: translateY(0); } to { transform: translateY(-1000px); } }

        /* Shooting stars */
        .shooting-star {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, #fff, rgba(255,255,255,0));
          transform: rotate(45deg);
          pointer-events: none;
          z-index: 2;
          animation-name: shooting;
          animation-timing-function: linear;
        }
        @keyframes shooting {
          from { transform: translate(0,0) rotate(45deg); opacity: 1; }
          to { transform: translate(500px, 500px) rotate(45deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ProjectDetails;
