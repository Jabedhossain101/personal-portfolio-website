import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaReact,
} from 'react-icons/fa';
import { RiNodejsLine, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiRedux,
} from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { TbBrandCpp, TbBrandJavascript } from 'react-icons/tb';
import { LuFigma } from 'react-icons/lu';
import { VscVscode } from 'react-icons/vsc';

/* ------------------------ Skill Data ------------------------ */
const categories = {
  Frontend: [
    { name: 'React', color: '#61dafb', icon: <FaReact /> },
    { name: 'JavaScript', color: '#f7df1e', icon: <TbBrandJavascript /> },
    { name: 'HTML5', color: '#e34c26', icon: <FaHtml5 /> },
    { name: 'CSS3', color: '#2965f1', icon: <FaCss3Alt /> },
    { name: 'Redux', color: '#764abc', icon: <SiRedux /> },
    { name: 'Figma', color: '#a259ff', icon: <LuFigma /> },
    { name: 'Tailwind CSS', color: '#38bdf8', icon: <RiTailwindCssFill /> },
  ],
  Backend: [
    { name: 'Node.js', color: '#68a063', icon: <RiNodejsLine /> },
    { name: 'Express', color: '#fff', icon: <SiExpress /> },
    { name: 'MongoDB', color: '#4db33d', icon: <BiLogoMongodb /> },
    { name: 'Firebase', color: '#ffa611', icon: <SiFirebase /> },
    { name: 'JWT', color: '#f0db4f', icon: <SiJsonwebtokens /> },
  ],
  Tools: [
    { name: 'Git', color: '#f34f29', icon: <FaGitAlt /> },
    { name: 'GitHub', color: '#181717', icon: <FaGithub /> },
    { name: 'VS Code', color: '#007acc', icon: <VscVscode /> },
  ],
  'Programming Language': [
    { name: 'Java', color: '#5382a1', icon: <FaJava /> },
    { name: 'C++', color: '#00599c', icon: <TbBrandCpp /> },
  ],
};

/* ------------------------ Framer Variants ------------------------ */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 12 },
  },
};

/* ------------------------ 3D Tilt Card ------------------------ */
const TiltCard = ({ skill }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMove = e => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const normalizedX = (mouseX / rect.width - 0.5) * 1.2;
    const normalizedY = (mouseY / rect.height - 0.5) * 1.2;
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="skill-card-premium"
      variants={cardVariants}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 10px 35px -5px ${skill.color}60`,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <div className="card-glow" style={{ background: skill.color }}></div>
      <span className="skill-icon-premium" style={{ color: skill.color }}>
        {skill.icon}
      </span>
      <span className="skill-name-premium">{skill.name}</span>
    </motion.div>
  );
};

/* ------------------------ Main Component ------------------------ */
const Skills = () => {
  const canvasRef = useRef(null);

  // Milky Way Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const numStars = 300;

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.size = Math.random() * 1.2 + 0.5;
      }
      update() {
        this.z -= 2;
        if (this.z <= 0) this.reset();
      }
      draw() {
        const fx =
          (this.x - canvas.width / 2) * (canvas.width / this.z) +
          canvas.width / 2;
        const fy =
          (this.y - canvas.height / 2) * (canvas.width / this.z) +
          canvas.height / 2;
        const r = (canvas.width / this.z) * this.size;
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(fx, fy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) stars.push(new Star());

    const animate = () => {
      ctx.fillStyle = '#000010';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="skills-premium-space" id="skills">
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="skills-container-premium">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-title-premium"
        >
          My <strong>Tech Universe</strong> 🚀
        </motion.h2>

        <p className="skills-subtitle-premium">
          Navigating the full stack to build stellar web applications.
        </p>

        {Object.entries(categories).map(([title, skills]) => (
          <div key={title} className="category-section-premium">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="category-title-premium"
            >
              {title}
            </motion.h3>
            <motion.div
              className="skills-grid-premium"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {skills.map(skill => (
                <TiltCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-premium-space {
          position: relative;
          background: #000;
          color: #fff;
          padding: 6rem 1rem;
          display: flex;
          justify-content: center;
          overflow: hidden;
          min-height: 100vh;
        }

        .skills-container-premium {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          text-align: center;
          backdrop-filter: blur(1px);
          background: rgba(0, 0, 0, 0.15);
          border-radius: 15px;
          padding: 2rem;
        }

        .skills-title-premium {
          font-size: 3rem;
          font-weight: 800;
          color: #00c6ff;
          text-shadow: 0 0 10px rgba(0,198,255,0.7);
        }
        .skills-subtitle-premium {
          font-size: 1.2rem;
          color: #b3e6ff;
          margin-bottom: 4rem;
        }
        .category-section-premium { margin-bottom: 4rem; text-align: left; }
        .category-title-premium {
          font-size: 1.7rem;
          font-weight: 600;
          margin-bottom: 2rem;
          padding-bottom: 0.5rem;
          color: #58d7ff;
          border-bottom: 2px solid rgba(0,198,255,0.3);
        }
        .skills-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1.5rem;
        }

        .skill-card-premium {
          background: rgba(30, 40, 50, 0.5);
          border: 1px solid rgba(0,198,255,0.2);
          border-radius: 15px;
          padding: 1rem;
          height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          overflow: hidden;
          will-change: transform;
        }
        .card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          z-index: 0;
          filter: blur(20px);
          transition: opacity 0.3s;
        }
        .skill-card-premium:hover .card-glow { opacity: 0.3; }

        .skill-icon-premium {
          font-size: 3.5rem;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 0 10px rgba(0,198,255,0.5));
        }
        .skill-name-premium {
          font-size: 1rem;
          color: #c9d1d9;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .skills-title-premium { font-size: 2.4rem; }
          .skills-grid-premium { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
        }
        @media (max-width: 480px) {
          .skills-title-premium { font-size: 2rem; }
          .skills-grid-premium { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .skill-card-premium { height: 120px; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
