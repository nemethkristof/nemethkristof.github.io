import React from 'react';
import { motion } from 'framer-motion';

function Work() {
  const workExperience = [
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      duration: '2021 - Present',
      description: 'Developing and maintaining web applications using React and Node.js.'
    },
    {
      title: 'Intern',
      company: 'Another Tech Company',
      duration: '2020 - 2021',
      description: 'Assisted in the development of internal tools and applications.'
    }
  ];

  return (
    <section id="work" style={{ background: 'var(--background)', padding: '5rem 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 style={{ color: 'var(--main)', fontWeight: 'bold', textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.875rem' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {workExperience.map((job, index) => (
            <div key={index} style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ color: 'var(--main-dark)', fontWeight: 'bold', fontSize: '1.25rem' }}>{job.title}</h3>
              <p style={{ color: 'var(--secondary-light)' }}>{job.company}</p>
              <p style={{ color: 'var(--secondary-dark)' }}>{job.duration}</p>
              <p style={{ marginTop: '0.5rem', color: 'var(--secondary)' }}>{job.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;