import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-main font-bold text-center mb-8 text-3xl">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-background-light p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-secondary font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-main-light rounded mb-4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-main-light rounded mb-4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-main-light rounded mb-4"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-main text-white py-3 rounded font-semibold hover:bg-main-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;