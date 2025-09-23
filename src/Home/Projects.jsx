import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import projects from '../Data/projectsData'; // Assuming you have a projectsData.js file with project details
import { RiLiveLine } from 'react-icons/ri';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const ProjectsLink = [
  {
    link: 'https://service-review-system-51389.web.app/',
  },
  {
    link: 'https://mango-store-app.web.app/',
  },
  {
    link: 'https://metrimony-auth.web.app/',
  },
];


const Projects = () => {
  return (
    <section
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4"
      id="projects"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="text-3xl font-bold text-center text-cyan-400 mb-10"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
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
                <div className='flex justify-between'>
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
  );
};

export default Projects;
