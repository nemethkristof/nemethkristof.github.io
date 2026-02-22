import { motion } from 'framer-motion';

function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Example',
      year: '2020 - 2024',
    },
    {
      degree: 'High School Diploma',
      institution: 'Example High School',
      year: '2016 - 2020',
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-main font-bold text-center mb-8 text-3xl">Education</h2>
        <div className="space-y-4">
          {educationData.map((item, index) => (
            <div key={index} className="bg-background-light p-6 rounded-lg shadow-md">
              <h3 className="text-main-dark font-bold text-xl">{item.degree}</h3>
              <p className="text-secondary-light">{item.institution}</p>
              <p className="text-secondary-dark">{item.year}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;