import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Description of project two.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Description of project three.',
      link: '#',
    },
    {
      title: 'Project Four',
      description: 'Description of project four.',
      link: '#',
    },
    {
      title: 'Project Five',
      description: 'Description of project five.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-background py-20">
      <motion.h2
        className="text-main font-bold text-center mb-10 text-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg border border-main-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-main-dark font-bold text-xl">{project.title}</h3>
            <p className="mt-2 text-secondary">{project.description}</p>
            <a href={project.link} className="text-main hover:underline mt-4 inline-block">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;