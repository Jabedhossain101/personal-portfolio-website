import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [particles, setParticles] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  // Fire cursor effect
  useEffect(() => {
    const createParticle = e => {
      const x = e.clientX;
      const y = e.clientY;
      const newParticle = { x, y, id: Date.now() };
      setParticles(prev => [...prev, newParticle]);
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 600);
    };

    window.addEventListener('mousemove', createParticle);
    return () => window.removeEventListener('mousemove', createParticle);
  }, []);

  // Shooting stars effect
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * 50; // % from top
      const left = Math.random() * 80; // % from left
      const length = Math.random() * 100 + 50; // px
      const duration = Math.random() * 1 + 1; // seconds

      setShootingStars(prev => [...prev, { id, top, left, length, duration }]);
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== id));
      }, duration * 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact" id="contact">
      {/* Fire cursor particles */}
      {particles.map(p => (
        <span
          key={p.id}
          className="fire-particle"
          style={{ left: p.x, top: p.y }}
        />
      ))}

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

      {/* Astronomical Instruments */}
      <motion.img
        src="https://pngimg.com/uploads/telescope/telescope_PNG30.png"
        alt="Telescope"
        className="astro telescope"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.img
        src="https://pngimg.com/uploads/satellite/satellite_PNG40.png"
        alt="Satellite"
        className="astro satellite"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      {/* <motion.img
        src="https://pngimg.com/uploads/antenna_dish/antenna_dish_PNG9.png"
        alt="Dish Antenna"
        className="astro dish"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      /> */}

      {/* Main content */}
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
          Interested in working together or have a question? Fill out the form
          below or reach me directly.
        </motion.p>

        {/* Contact Info Section */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:ahmedrafsan101@gmail.com">
              ahmedrafsan101@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+8801887686535">+880-1887686535</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/8801887686535"
              target="_blank"
              rel="noreferrer"
            >
              +880 18876 865 35
            </a>
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
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
            whileHover={{
              scale: 1.05,
              backgroundColor: '#00c6ff',
              color: '#fff',
            }}
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
          position: relative;
          background: #000;
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          overflow: hidden;
        }
        .contact-container {
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          z-index: 10;
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
          margin-bottom: 1.5rem;
        }
        .contact-info {
          background: rgba(0, 198, 255, 0.08);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 2rem;
          font-size: 1rem;
          text-align: left;
        }
        .contact-info a {
          color: #00c6ff;
          text-decoration: none;
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
        }
        .contact-success {
          margin-top: 1rem;
          color: #00c6ff;
          font-weight: 600;
        }

        /* Astronomical elements */
        .astro {
          position: absolute;
          z-index: 1;
          opacity: 0.8;
        }
        .telescope { bottom: 20px; left: 10%; width: 200px; }
        .satellite { top: 10%; right: 15%; width: 150px; }
        .dish { bottom: 10%; right: 5%; width: 180px; }

        /* Fire cursor effect */
        .fire-particle {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: radial-gradient(circle, #ff6600, transparent);
          pointer-events: none;
          animation: fire 0.6s forwards;
        }
        @keyframes fire {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.2) translateY(-20px); opacity: 0; }
        }

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

export default Contact;
