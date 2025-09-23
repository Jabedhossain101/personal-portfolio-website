import React from 'react';
import { useParams, Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { RiLiveLine } from 'react-icons/ri';
import projects from '../Data/projectsData.json';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-10">Project not found.</p>;

  return (
    <section className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
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
    </section>
  );
};

export default ProjectDetails;
