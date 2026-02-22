import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center h-screen bg-gradient-to-r from-main to-main-light text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-main">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-secondary">I am a passionate developer with experience in building dynamic web applications.</p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-background text-main rounded-full font-semibold hover:bg-background-dark transition">
          View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;