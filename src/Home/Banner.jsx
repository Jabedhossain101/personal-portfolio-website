import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown } from 'react-icons/fa';

const RESUME_URL =
  'https://drive.google.com/file/d/1Q7bIqfgZn0-L44a7ZS4i7FaFMo_6OvFX/view';

const Banner = () => {
  const handleResumeClick = async e => {
    e.preventDefault();
    const newTab = window.open(RESUME_URL, '_blank', 'noopener,noreferrer');

    try {
      const res = await fetch(RESUME_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'MD_Jabed_Hossain_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      if (newTab)
        console.warn(
          'Automatic download failed — resume opened in a new tab.',
          err
        );
      else window.location.href = RESUME_URL;
    }
  };

  const starsArray = Array.from({ length: 120 });

  return (
    <section className="banner" id="home">
      <div className="banner-bg">
        {starsArray.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}

        {/* Sun */}
        <div className="sun"></div>

        {/* Orbits */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className={`orbit orbit${i}`}>
            <div className={`planet planet${i}`}></div>
          </div>
        ))}

        {/* Alien spaceship */}
        <div className="alien-spaceship">
          <img
            src="https://i.ibb.co.com/hF1qjXC5/istockphoto-1473516483-612x612-removebg-preview.png"
            alt="Alien Spaceship"
          />
        </div>
      </div>

      <div className="banner-wrapper">
        <div className="banner-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="banner-title"
          >
            Hi, I'm <span className="highlight">MD Jabed Hossain</span>
          </motion.h1>
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="banner-subtitle"
          >
            MERN Stack Developer & Web Enthusiast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="banner-desc"
          >
            I build modern, responsive web applications with beautiful UI and
            smooth user experience.
          </motion.p>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="https://github.com/Jabedhossain101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjabedhossain12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/mdjabedhossain27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </motion.div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              href="#contact"
              className="banner-btn"
              whileHover={{
                scale: 1.08,
                backgroundColor: '#00c6ff',
                color: '#fff',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact Me
            </motion.a>

            <motion.button
              onClick={handleResumeClick}
              className="resume-btn"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center gap-2">
                <FaArrowDown className="text-2xl" />{' '}
                <span>Download Resume</span>
              </div>
            </motion.button>
          </div>
        </div>
        <div className="alien-spaceship">
          <img
            src="https://i.ibb.co.com/hF1qjXC5/istockphoto-1473516483-612x612-removebg-preview.png"
            alt="Alien Spaceship"
          />
        </div>

        <motion.div
          className="banner-image"
          initial={{ scale: 0, rotate: -100, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, type: 'spring' }}
        >
          <img
            src="https://i.ibb.co.com/R4HTggDd/photo-2025-08-23-16-30-51.jpg"
            alt="MD Jabed Hossain"
          />
        </motion.div>
      </div>

      <style>{`
        .banner { min-height: 90vh; display: flex; align-items: center; justify-content: center; background: #000; color: #fff; padding: 3rem 1rem; position: relative; overflow: hidden; }
        .banner-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }

        /* Stars */
        .star { position: absolute; background: #fff; border-radius: 50%; opacity: 0.3; animation: twinkle 2s infinite alternate; }
        @keyframes twinkle { 0% { opacity: 0.1; } 50% { opacity: 1; } 100% { opacity: 0.1; } }

        /* Sun */
        .sun {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, red, #ff8c00);
          border-radius: 50%;
          box-shadow: 0 0 50px 20px rgba(255, 215, 0, 0.7);
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        /* Orbits */
        .orbit { position: absolute; border: 1px dashed rgba(255,255,255,0.2); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: rotate 25s linear infinite; }
        .orbit1 { width: 120px; height: 120px; animation-duration: 10s; }
        .orbit2 { width: 180px; height: 180px; animation-duration: 15s; }
        .orbit3 { width: 240px; height: 240px; animation-duration: 20s; }
        .orbit4 { width: 300px; height: 300px; animation-duration: 25s; }
        .orbit5 { width: 380px; height: 380px; animation-duration: 30s; }
        .orbit6 { width: 460px; height: 460px; animation-duration: 35s; }
        .orbit7 { width: 540px; height: 540px; animation-duration: 40s; }
        .orbit8 { width: 640px; height: 640px; animation-duration: 45s; }

        /* Planets realistic colors */
        .planet { width: 24px; height: 24px; border-radius: 50%; position: absolute; top: 0; left: 50%; transform: translateX(-50%); }
        .planet1 { background: #b0b0b0; } /* Mercury */
        .planet2 { background: #e6c28b; } /* Venus */
        .planet3 { background: #2e86de; border: 1px solid #fff; } /* Earth */
        .planet4 { background: #d14b3d; } /* Mars */
        .planet5 { background: #f4d03f; } /* Jupiter */
        .planet6 { background: #f5e1a4; border: 1px solid #d4af37; } /* Saturn */
        .planet7 { background: #7fdbff; } /* Uranus */
        .planet8 { background: #4169e1; } /* Neptune */

        @keyframes rotate { 100% { transform: translate(-50%, -50%) rotate(360deg); } }

        /* Alien spaceship animation */
        .alien-spaceship {
          position: absolute;
          top: 20%;
          left: -100px;
          z-index: 2;
          animation: flySpaceship 15s linear infinite;
        }
        .alien-spaceship img { width: 60px; transform: rotate(-20deg); }
        @keyframes flySpaceship { 0% { left: -100px; top: 20%; } 50% { left: 110%; top: 40%; } 100% { left: -100px; top: 20%; } }

        /* Banner wrapper content styling */
        .banner-wrapper { display: flex; flex-direction: row; align-items: center; justify-content: space-between; max-width: 1200px; width: 100%; gap: 2rem; flex-wrap: wrap; position: relative; z-index: 3; }
        .banner-content { flex: 1 1 500px; text-align: left; }
        .banner-title { font-size: 2.8rem; font-weight: 800; margin-bottom: 1rem; }
        .highlight { color: #00c6ff; background: linear-gradient(90deg, #00c6ff 40%, #0072ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .banner-subtitle { font-size: 1.5rem; font-weight: 600; margin-bottom: 1.2rem; color: #e0e0e0; }
        .banner-desc { font-size: 1.1rem; color: #cfd8dc; margin-bottom: 1.5rem; }

        .social-links { display: flex; gap: 15px; margin-bottom: 2rem; }
        .social-links a { color: #00c6ff; font-size: 1.6rem; transition: 0.3s; }
        .social-links a:hover { color: #fff; transform: scale(1.1); }

        .banner-btn { padding: 0.8rem 2.2rem; font-size: 1.1rem; font-weight: 600; color: #00c6ff; background: #fff; border-radius: 30px; text-decoration: none; }
        .resume-btn { padding: 0.8rem 1.6rem; font-size: 1rem; font-weight: 700; color: #fff; background: linear-gradient(90deg,#00c6ff 0%, #0072ff 100%); border: none; border-radius: 30px; cursor: pointer; }

        .banner-image img { max-width: 400px; width: 100%; border-radius: 20%; border: 5px solid #00c6ff; box-shadow: 0 10px 25px rgba(0,198,255,0.3); }
      `}</style>
    </section>
  );
};

export default Banner;
