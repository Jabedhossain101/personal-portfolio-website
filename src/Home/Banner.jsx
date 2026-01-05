import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown } from 'react-icons/fa';

const RESUME_URL =
  'https://drive.google.com/file/d/1E01sAL5TFBq9RRwMgKkd2ObisZkybU0V/view';

const Banner = () => {
  // Typing animation
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(150);

  const roles = [
    'MERN Stack Developer',
    'Frontend Specialist',
    'Creative Web Engineer',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

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
        console.warn('Automatic download failed — opened in new tab.', err);
      else window.location.href = RESUME_URL;
    }
  };

  const planets = [
    { name: 'Mercury', size: 6, color: '#b1b1b1', orbit: 70, duration: 8 },
    { name: 'Venus', size: 10, color: '#e5c27a', orbit: 100, duration: 12 },
    { name: 'Earth', size: 12, color: '#3fa7d6', orbit: 130, duration: 16 },
    { name: 'Mars', size: 9, color: '#c1440e', orbit: 160, duration: 20 },
    { name: 'Jupiter', size: 25, color: '#d6b67a', orbit: 210, duration: 30 },
    { name: 'Saturn', size: 20, color: '#f7e8a4', orbit: 260, duration: 36 },
    { name: 'Uranus', size: 16, color: '#82eefd', orbit: 310, duration: 42 },
    { name: 'Neptune', size: 15, color: '#4169e1', orbit: 360, duration: 50 },
  ];

  // Fixed stars positions
  const starsArray = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center bg-black text-white py-12 px-4 relative overflow-hidden"
      id="home"
    >
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {starsArray.map((star, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.3,
              animation: `twinkle 3s infinite alternate`,
              animationDelay: `${star.delay}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Solar System */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="relative w-[80px] h-[80px] rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-[0_0_80px_40px_rgba(255,165,0,0.5)]"></div>
        {planets.map((planet, index) => (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 border border-dashed border-white/20 rounded-full"
            style={{
              width: `${planet.orbit * 2}px`,
              height: `${planet.orbit * 2}px`,
              marginLeft: `-${planet.orbit}px`,
              marginTop: `-${planet.orbit}px`,
              animation: `rotatePlanet ${planet.duration}s linear infinite`,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: '50%',
                left: '100%',
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                backgroundColor: planet.color,
                boxShadow: `0 0 20px ${planet.color}`,
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full gap-8 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Hi, I'm{' '}
            <span className="highlight name-animation">
              {'MD Jabed Hossain'.split('').map((letter, i) => (
                <span key={i} className="wave-letter">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-gray-200">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-6">
            I build modern, responsive web applications with smooth UI and
            delightful interactions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mb-8">
            <a
              href="https://github.com/Jabedhossain101"
              target="_blank"
              className="text-sky-400 text-2xl hover:text-white hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjabedhossain12/"
              target="_blank"
              className="text-sky-400 text-2xl hover:text-white hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/mdjabedhossain27"
              target="_blank"
              className="text-sky-400 text-2xl hover:text-white hover:scale-110 transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
            <a
              href="#contact"
              className="py-3 px-6 text-lg font-semibold text-sky-500 bg-white rounded-full shadow-lg hover:shadow-sky-500/50 transition duration-300"
            >
              Contact Me
            </a>

            <button
              onClick={handleResumeClick}
              className="py-3 px-6 text-lg font-bold text-white rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg hover:shadow-blue-600/50 transition duration-300"
            >
              <div className="flex items-center gap-2">
                <FaArrowDown className="text-xl" />
                <span>Download Resume</span>
              </div>
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://i.ibb.co.com/0jPc1ttD/boss.png"
            alt="MD Jabed Hossain"
            className="max-w-[300px] sm:max-w-[400px] w-full rounded-[20%] border-4 border-sky-400 shadow-2xl shadow-sky-400/50"
          />
        </div>
      </motion.div>

      <style global jsx>{`
        .highlight {
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .wave-letter {
          display: inline-block;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .wave-letter:hover {
          transform: translateY(-8px) rotate(5deg);
          color: #ffd700;
        }

        .typing-text {
          color: #00ffb3;
        }
        .cursor {
          display: inline-block;
          animation: blink 0.8s infinite;
          color: #00ffb3;
          margin-left: 3px;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }

        @keyframes rotatePlanet {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
