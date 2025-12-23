import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../Components/Footer';
// 🚀 EmailJS import করা হয়েছে
import emailjs from '@emailjs/browser';

// 🔑 আপনার EmailJS Credentials
const SERVICE_ID = 'service_egnre6s';
const TEMPLATE_ID = 'template_ez96z3d';
const PUBLIC_KEY = 'kUTbONSZ43fSDNYxt';
// 🎯 রিসিভারের ইমেল, যদিও এটি EmailJS টেমপ্লেটে সেট করা উচিত,
// তবুও to_name এর জন্য একটি নাম ব্যবহার করা হয়েছে।
const RECEIVER_NAME = 'Ahmed Rafsan';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // 'submitted' এর পরিবর্তে 'loading' এবং 'success' state ব্যবহার করা হয়েছে।
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [shootingStars, setShootingStars] = useState([]);

  // 🔹 Handle form change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      to_name: RECEIVER_NAME,
      message: form.message,
    };

    try {
      // 🚀 EmailJS দিয়ে ইমেল পাঠানো হচ্ছে
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      console.log('Email sent successfully!');

      // সফল বার্তাটি ৩ সেকেন্ড পর সরিয়ে দেওয়া
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again.');

      // এরর বার্তাটি ৫ সেকেন্ড পর সরিয়ে দেওয়া
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Smooth Fire Cursor Effect (optimized for performance)
  useEffect(() => {
    let lastMove = 0;
    const createParticle = e => {
      const now = Date.now();
      if (now - lastMove < 50) return;
      lastMove = now;

      const particle = document.createElement('span');
      particle.className = 'fire-particle-premium';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 600);
    };

    window.addEventListener('mousemove', createParticle);
    return () => window.removeEventListener('mousemove', createParticle);
  }, []);

  // 🔹 Shooting Stars Effect
  useEffect(() => {
    const timeouts = [];
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * 50;
      const left = Math.random() * 80;
      const length = Math.random() * 100 + 50;
      const duration = Math.random() * 1.5 + 1.5;

      setShootingStars(prev => [...prev, { id, top, left, length, duration }]);
      const timeoutId = setTimeout(() => {
        setShootingStars(prev => prev.filter(s => s.id !== id));
      }, duration * 1000);
      timeouts.push(timeoutId);
    }, 2500);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="contact-premium" id="contact">
      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star-premium"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.length}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Telescope */}
      <motion.div
        className="astro telescope"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      >
        <img
          src="/assets/telescope.png"
          alt="Telescope"
          className="astro-img"
        />
      </motion.div>

      {/* Satellite */}
      <motion.div
        className="astro satellite"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        <img
          src="/assets/satellite.png"
          alt="Satellite"
          className="astro-img"
        />
      </motion.div>

      {/* Main Content */}
      <div className="contact-container-premium">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="contact-title-premium"
        >
          Let’s <strong>Connect</strong>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="contact-desc-premium"
        >
          Ready to launch your next project? Use any of the channels below to
          reach out.
        </motion.p>

        <motion.div
          className="contact-card-premium"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        >
          {/* Info Section */}
          <div className="contact-info-premium">
            <h3 className="info-title">Direct Channels</h3>
            <div className="info-item">
              <FiMail className="info-icon" />
              <a href="mailto:ahmedrafsan101@gmail.com">
                ahmedrafsan101@gmail.com
              </a>
            </div>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <a href="tel:+8801887686535">+880-1887686535</a>
            </div>
            <div className="info-item">
              <FaWhatsapp className="info-icon whatsapp" />
              <a
                href="https://wa.me/8801887686535"
                target="_blank"
                rel="noreferrer"
              >
                +880 18876 865 35
              </a>
            </div>
          </div>

          {/* Form Section */}
          <motion.form className="contact-form-premium" onSubmit={handleSubmit}>
            <div className="form-group">
              <FiUser className="form-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="contact-input-premium"
              />
            </div>

            <div className="form-group">
              <FiMail className="form-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="contact-input-premium"
              />
            </div>

            <div className="form-group textarea-group">
              <FiMessageSquare className="form-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="contact-textarea-premium"
                rows={5}
              />
            </div>

            <motion.button
              type="submit"
              className="contact-btn-premium"
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px #00c6ff' }}
              whileTap={{ scale: 0.97 }}
              disabled={loading} // ইমেল পাঠানো সময় বাটন ডিজেবল থাকবে
            >
              <FiSend className="btn-icon" />
              {loading
                ? 'Sending...'
                : success
                ? 'Message Sent!'
                : 'Send Secure Message'}
            </motion.button>

            {success && (
              <motion.div
                className="contact-success-premium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for reaching out! I’ll be in touch soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                className="contact-error-premium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {error}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>

      {/* --- Internal Styles --- */}
      <style>{`
        html { scroll-behavior: smooth; }

        .contact-premium {
          position: relative;
          background: #000;
          color: #fff;
          padding: 6rem 1rem;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          overflow: hidden;
        }
        .contact-container-premium {
          max-width: 900px;
          width: 100%;
          text-align: center;
          z-index: 10;
        }
        .contact-title-premium {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #58a6ff;
          text-shadow: 0 0 15px rgba(88,166,255,0.5);
        }
        .contact-desc-premium {
          font-size: 1.1rem;
          color: #8b949e;
          margin-bottom: 3rem;
        }
        .contact-card-premium {
          display: flex;
          background: rgba(13,17,23,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(88,166,255,0.2);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }
        .contact-info-premium {
          flex: 1;
          background: rgba(88,166,255,0.1);
          padding: 2.5rem;
          text-align: left;
          border-right: 1px solid rgba(88,166,255,0.2);
        }
        .info-title {
          font-size: 1.5rem;
          color: #58a6ff;
          margin-bottom: 2rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          color: #c9d1d9;
        }
        .info-icon {
          font-size: 1.5rem;
          color: #58a6ff;
          margin-right: 1rem;
        }
        .info-item a {
          color: #c9d1d9;
          text-decoration: none;
          transition: color 0.3s;
        }
        .info-item a:hover { color: #58a6ff; }
        .whatsapp { color: #25d366; }

        .contact-form-premium {
          flex: 1.5;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }
        .form-group {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
        }
        .form-icon {
          position: absolute;
          left: 1rem;
          color: #8b949e;
          font-size: 1.1rem;
        }
        .contact-input-premium, .contact-textarea-premium {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border-radius: 10px;
          border: 1px solid #30363d;
          background: #161b22;
          color: #fff;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .contact-input-premium:focus, .contact-textarea-premium:focus {
          border-color: #58a6ff;
          box-shadow: 0 0 10px rgba(88,166,255,0.5);
        }
        .contact-btn-premium {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #58a6ff;
          color: #0d1117;
          font-weight: 700;
          padding: 0.8rem 2.5rem;
          border-radius: 30px;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          min-width: 200px;
          transition: background 0.3s;
        }
        .contact-btn-premium:disabled {
          background: #30363d;
          color: #8b949e;
          cursor: not-allowed;
        }
        .contact-success-premium {
          margin-top: 0.5rem;
          color: #2e90e8;
          font-weight: 500;
        }
        .contact-error-premium {
          margin-top: 0.5rem;
          color: #f85149; /* Error red color */
          font-weight: 500;
        }
        .fire-particle-premium {
          position: fixed;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, #ff6600, transparent);
          transform: translate(-50%, -50%);
          will-change: transform, opacity;
        }
        .shooting-star-premium {
          position: absolute;
          background: linear-gradient(90deg, #58a6ff, rgba(88,166,255,0));
          height: 1px;
          animation: shoot 1.5s linear forwards;
          will-change: transform, opacity;
        }
        @keyframes shoot {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(200px); opacity: 0; }
        }
        .astro {
          position: absolute;
          opacity: 0.4;
          z-index: 1;
        }
        .telescope { bottom: 5%; left: 5%; width: 180px; }
        .satellite { top: 5%; right: 5%; width: 120px; }
        .astro-img { width: 100%; height: auto; pointer-events: none; }

        @media (max-width: 768px) {
          .contact-card-premium { flex-direction: column; }
          .contact-info-premium {
            border-right: none;
            border-bottom: 1px solid rgba(88,166,255,0.2);
          }
          .astro { display: none; }
          .contact-title-premium { font-size: 2.4rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
