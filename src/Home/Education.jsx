import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'American International University-Bangladesh (AIUB)',
    year: '2023 - Present',
    details:
      'Focused on software engineering, full-stack development, and participated in competitive programming contests.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Principal Kazi Farukey College',
    year: '2020 - 2022',
    details:
      'Studied Science with emphasis on Physics, Chemistry, and Mathematics. Achieved GPA 5.00 out of 5.00.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Lakshmipur Adarsha Samad Govt. High School',
    year: '2018 - 2020',
    details:
      'Major in Science. Achieved GPA 5.00 with distinction in Mathematics and ICT.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  const canvasRef = useRef(null);

  // Cursor Fire + Falling Stars Effect (same as Banner)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
      constructor(x, y, color, size, vy) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.vy = vy;
        this.alpha = 1;
      }
      update() {
        this.y += this.vy;
        this.alpha -= 0.02;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const addParticles = (x, y) => {
      for (let i = 0; i < 5; i++) {
        const size = Math.random() * 4 + 2;
        const vy = Math.random() * 3 + 1;
        const color =
          Math.random() > 0.5
            ? 'orange'
            : ['#ffffff', '#a5d7ff'][Math.floor(Math.random() * 2)];
        particles.push(new Particle(x, y, color, size, vy));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };
    animate();

    const mouseMove = e => addParticles(e.clientX, e.clientY);
    window.addEventListener('mousemove', mouseMove);

    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <section className="education" id="education">
      {/* Cursor Fire + Falling Stars Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Astronomy Background Images */}
      <div className="astro-background">
        {/* <div className="bg-layer layer1"></div>
        <div className="bg-layer layer2"></div> */}
        <div className="bg-layer layer3"></div>
      </div>

      {/* Astronomy Instruments */}
      <div className="astro-instruments">
        <div className="telescope"></div>
        <div className="satellite"></div>
        <div className="observatory"></div>
        <div className="rocket"></div>
      </div>

      <div className="education-container">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="education-title"
        >
          My Education
        </motion.h2>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              className="education-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="edu-year">{edu.year}</p>
              <p className="edu-detail">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education {
          background: #000;
          color: #fff;
          padding: 4rem 1rem 3rem 1rem;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Astronomy Unsplash Backgrounds */
        .astro-background .bg-layer {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          z-index: 0;
          animation: fadeBg 30s infinite alternate;
        }
        // .astro-background .layer1 {
        //   background-image: url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa');
        //   animation-delay: 0s;
        // }
        // .astro-background .layer2 {
        //   background-image: url('https://images.unsplash.com/photo-1476610182048-b716b8518aae');
        //   animation-delay: 10s;
        // }
        .astro-background .layer3 {
          background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa');
          animation-delay: 20s;
        }
        @keyframes fadeBg {
          0% { opacity: 0.1; }
          50% { opacity: 0.25; }
          100% { opacity: 0.1; }
        }

        .education-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 3;
        }
        .education-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 2px;
          font-family: 'Montserrat', sans-serif;
          color: #00c6ff;
          text-align: center;
        }
        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .education-card {
          background: rgba(20, 30, 50, 0.9);
          border-radius: 18px;
          padding: 1.5rem;
          box-shadow: 0 4px 24px rgba(0,198,255,0.12);
          transition: transform 0.2s, box-shadow 0.2s;
          backdrop-filter: blur(6px);
        }
        .education-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(0,198,255,0.3);
        }
        .education-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #00c6ff;
          margin-bottom: 0.5rem;
        }
        .education-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #e0e0e0;
          margin-bottom: 0.3rem;
        }
        .edu-year {
          font-size: 0.95rem;
          color: #b0bec5;
          margin-bottom: 0.7rem;
        }
        .edu-detail {
          font-size: 0.95rem;
          color: #cfd8dc;
        }

        /* Astronomy Instruments with Unsplash Images */
        .astro-instruments div {
          position: absolute;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          z-index: 1;
        }
        .telescope {
          bottom: 10px;
          left: 5%;
          width: 80px;
          height: 80px;
          background-image: url('https://images.unsplash.com/photo-1614315129709-d5e9469c3d87');
        }
        .satellite {
          top: 15%;
          right: 10%;
          width: 100px;
          height: 100px;
          background-image: url('https://images.unsplash.com/photo-1581092334426-7c2b6a95af3e');
          animation-delay: 2s;
        }
        .observatory {
          bottom: 0;
          right: 5%;
          width: 120px;
          height: 120px;
          background-image: url('https://images.unsplash.com/photo-1614314813511-8d6ef90b518d');
          animation-delay: 4s;
        }
        .rocket {
          top: 5%;
          left: 15%;
          width: 90px;
          height: 90px;
          background-image: url('https://images.unsplash.com/photo-1581091215367-59f07d01858d');
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 900px) {
          .education-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (max-width: 600px) {
          .education-title {
            font-size: 1.5rem;
          }
          .education-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
