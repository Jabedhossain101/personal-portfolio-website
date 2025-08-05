import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="contact-title"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="contact-desc"
        >
          Interested in working together or have a question? Fill out the form below and I'll get back to you soon!
        </motion.p>
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="contact-textarea"
            rows={5}
          />
          <motion.button
            type="submit"
            className="contact-btn"
            whileHover={{ scale: 1.05, backgroundColor: '#00c6ff', color: '#fff' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Send Message
          </motion.button>
          {submitted && (
            <motion.div
              className="contact-success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! Your message has been sent.
            </motion.div>
          )}
        </motion.form>
      </div>
      <style>{`
        .contact {
          background: linear-gradient(120deg, #232526 0%, #2c5364 100%);
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
        }
        .contact-container {
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }
        .contact-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
          color: #00c6ff;
        }
        .contact-desc {
          font-size: 1.1rem;
          color: #e0e0e0;
          margin-bottom: 2rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          align-items: center;
        }
        .contact-input, .contact-textarea {
          width: 100%;
          max-width: 400px;
          padding: 0.9rem 1rem;
          border-radius: 12px;
          border: none;
          font-size: 1rem;
          background: #222a36;
          color: #fff;
          box-shadow: 0 2px 8px rgba(44,83,100,0.10);
          outline: none;
          transition: box-shadow 0.2s;
        }
        .contact-input:focus, .contact-textarea:focus {
          box-shadow: 0 4px 16px #00c6ff33;
        }
        .contact-btn {
          background: #fff;
          color: #00c6ff;
          font-weight: 600;
          padding: 0.7rem 2.2rem;
          border-radius: 30px;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(44,83,100,0.10);
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .contact-btn:hover {
          background: #00c6ff;
          color: #fff;
        }
        .contact-success {
          margin-top: 1rem;
          color: #00c6ff;
          font-weight: 600;
        }
        @media (max-width: 600px) {
          .contact-title {
            font-size: 1.5rem;
          }
          .contact-desc {
            font-size: 1rem;
          }
          .contact-input, .contact-textarea {
            font-size: 0.95rem;
            padding: 0.7rem 0.7rem;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;