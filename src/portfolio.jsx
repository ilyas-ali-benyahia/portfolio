import React, { useState, useEffect} from 'react';
import { motion,  useScroll, useTransform } from 'framer-motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -80]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'publications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  
  };

  const skills = {
    'Programming Languages': { items: ['Python', 'JavaScript', 'TypeScript', 'C++'], color: '#00d4ff', icon: '⌨️' },
    'Frameworks & Libraries': { items: ['React', 'Next.js', 'Django', 'Flask', 'Node.js', 'Express.js', 'REST APIs'], color: '#a855f7', icon: '🧩' },
    'UI & Styling': { items: ['Chakra UI', 'Tailwind CSS', 'Framer Motion'], color: '#22c55e', icon: '🎨' },
    'AI & Machine Learning': { items: ['LangChain', 'RAG', 'LLMs', 'AI Agents', 'Scikit-learn', 'Model Fine-Tuning', 'Data Processing'], color: '#f59e0b', icon: '🤖' },
    'Databases': { items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'], color: '#ef4444', icon: '🗄️' },
    'Tools & Methodologies': { items: ['Git', 'Docker', 'SCRUM', 'Agile'], color: '#06b6d4', icon: '🛠️' },
  };

  const projects = [
    {
      title: 'AI-Powered Multilingual Interactive Learning Platform',
      description: 'A comprehensive web platform that transforms multimedia educational content into interactive learning tools. Features a dedicated teacher dashboard, real-time student-teacher communication, performance analytics, and personalized content recommendations powered by AI agents.',
      tech: ['React', 'Next.js', 'Django', 'Python', 'LangChain', 'RAG', 'AI Agents', 'REST API'],
      category: 'AI / Full Stack',
      highlight: true,
      emoji: '🎓'
    },
    {
      title: 'HealX-Center-DZ',
      description: 'An intelligent recovery support application for individuals overcoming substance addiction. Features an AI agent that tracks the user\'s psychological state and provides personalized guidance, motivation, and recovery milestones.',
      tech: ['Next.js', 'AI Agent', 'LLM', 'REST API'],
      category: 'AI / Healthcare',
      highlight: false,
      emoji: '🏥'
    },
    {
      title: 'Marché Public Management Platform',
      description: 'A platform for managing public procurement between companies and contractors. Includes tender management, bid tracking, contract management, and a comprehensive role-based access control system.',
      tech: ['MERN Stack', 'Next.js', 'MongoDB', 'Express.js'],
      category: 'Full Stack / Enterprise',
      highlight: false,
      emoji: '📋'
    },
    {
      title: 'License Plate Detection & Recognition System',
      description: 'A real-time computer vision system for automatic vehicle identification using license plate recognition. Designed for parking management and security applications.',
      tech: ['C++', 'OpenCV', 'Machine Learning'],
      category: 'Computer Vision',
      highlight: false,
      emoji: '🚗'
    },
    {
      title: 'RAG Chatbot Assistant',
      description: 'An intelligent conversational assistant powered by hybrid search and large language models. Supports document ingestion, semantic search, and context-aware responses.',
      tech: ['Python', 'LangChain', 'RAG', 'Streamlit'],
      category: 'AI / NLP',
      highlight: false,
      emoji: '💬'
    },
    {
      title: 'Gift – Smart Gifting Platform',
      description: 'An e-commerce platform for personalized gift recommendations, filtering by preference, occasion, and budget with seamless ordering flow.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chakra UI'],
      category: 'Full Stack / E-commerce',
      highlight: false,
      emoji: '🎁'
    },
    {
      title: 'MERN Stack Book Store',
      description: 'A full-stack web application for managing and browsing books with user authentication, search functionality, and an admin panel.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'Full Stack',
      highlight: false,
      emoji: '📚'
    },
    {
      title: 'TranslationManager',
      description: 'A platform for managing and automating multilingual content translation workflows, integrating external translation APIs with a clean content management interface.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Translation APIs'],
      category: 'Startup / SaaS',
      highlight: false,
      emoji: '🌐'
    },
    {
      title: 'Concrete Strength Prediction Model',
      description: 'Developed a machine learning model to predict concrete compressive strength using non-destructive testing methods. Implemented and compared multiple regression techniques including Random Forest and Linear Regression. Built a scikit-learn preprocessing pipeline to handle categorical features, performed 200-iteration model evaluation with R², RMSE, and error analysis, and generated visualizations comparing actual vs. predicted values with error bands. Tracked prediction accuracy within a 10% error tolerance threshold and produced comprehensive reports.',
      tech: ['Python', 'Scikit-learn', 'Random Forest', 'Linear Regression', 'Data Visualization', 'Pandas', 'NumPy'],
      category: 'Machine Learning',
      highlight: false,
      emoji: '🏗️'
    }
  ];

  const publications = [
    {
      type: 'Conference Paper',
      title: 'STUDYVIA: A Comparative Study of AI-Powered Multilingual Learning with Enhanced Arabic Support',
      venue: 'International Conference on Applied Artificial Intelligence and Emerging Technologies',
      year: '2025',
      status: 'Published',
      authors: null,
      description: 'Presented a comparative analysis of AI-powered multilingual learning platforms with a focus on enhanced Arabic language support. Explores the integration of LLMs, RAG pipelines, and intelligent agents in educational contexts.'
    },
    {
      type: 'Journal Article',
      title: 'Optimization of Predictive Models for the Nondestructive Assessment of In-Situ Concrete Strength in New Structures Using Artificial Intelligence Techniques',
      venue: 'Under Review',
      year: '2025',
      status: 'Under Review',
      authors: 'Khoudja Ali-Benyahia, Mohamed Ghrici, Said Kenai, Ilyas Ali-Benyahia, Faiza Neggaz',
      description: 'Research on optimizing machine learning predictive models for non-destructive in-situ concrete strength assessment. Applies artificial intelligence techniques to improve accuracy and reliability of structural evaluation in new constructions.'
    }
  ];

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Publications', 'Contact'];

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: '#080c14', color: '#e8eaf0', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c14; }
        ::-webkit-scrollbar-thumb { background: #00d4ff44; border-radius: 2px; }

        .noise-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
        }

        .grid-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glow-orb {
          position: fixed; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 0;
        }

        .nav-link {
          font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: #6b7280; text-decoration: none; padding: 6px 12px; border-radius: 4px;
          transition: color 0.2s, background 0.2s; cursor: pointer; background: none; border: none;
        }
        .nav-link:hover { color: #00d4ff; background: rgba(0,212,255,0.08); }
        .nav-link.active { color: #00d4ff; }

        .hero-title {
          font-size: clamp(3rem, 8vw, 7rem); font-weight: 800; line-height: 1;
          letter-spacing: -0.03em; color: #f0f4ff;
        }

        .accent { color: #00d4ff; }
        .accent-purple { color: #a855f7; }

        .section-label {
          font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.25em;
          text-transform: uppercase; color: #00d4ff; margin-bottom: 16px; display: block;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 800; line-height: 1.1;
          letter-spacing: -0.02em; color: #f0f4ff;
        }

        .card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 28px; position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .card:hover { border-color: rgba(0,212,255,0.25); }

        .card::before {
          content: ''; position: absolute; inset: 0; border-radius: 16px;
          background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,212,255,0.06), transparent 40%);
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .card:hover::before { opacity: 1; }

        .tag {
          font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.08em;
          padding: 4px 10px; border-radius: 100px; background: rgba(255,255,255,0.07);
          color: #9ca3af; border: 1px solid rgba(255,255,255,0.1);
          display: inline-block; margin: 3px 3px 3px 0;
        }

        .tag-highlight {
          background: rgba(0,212,255,0.1); color: #00d4ff; border-color: rgba(0,212,255,0.2);
        }

        .btn-primary {
          font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 14px 28px; border-radius: 8px; cursor: pointer;
          background: #00d4ff; color: #080c14; font-weight: 500; border: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover { background: #22deff; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,212,255,0.3); }

        .btn-secondary {
          font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 14px 28px; border-radius: 8px; cursor: pointer;
          background: transparent; color: #e8eaf0; border: 1px solid rgba(255,255,255,0.2);
          transition: border-color 0.2s, transform 0.2s; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-secondary:hover { border-color: rgba(255,255,255,0.5); transform: translateY(-2px); }

        .skill-chip {
          font-family: 'DM Mono', monospace; font-size: 0.7rem; padding: 6px 14px;
          border-radius: 100px; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1); color: #d1d5db;
          transition: all 0.2s; display: inline-block; margin: 4px;
        }
        .skill-chip:hover { background: rgba(0,212,255,0.1); border-color: rgba(0,212,255,0.3); color: #00d4ff; }

        .timeline-dot {
          width: 12px; height: 12px; border-radius: 50%; background: #00d4ff;
          flex-shrink: 0; margin-top: 4px; box-shadow: 0 0 12px rgba(0,212,255,0.6);
        }

        .featured-badge {
          font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em;
          text-transform: uppercase; padding: 3px 10px; border-radius: 100px;
          background: rgba(0,212,255,0.15); color: #00d4ff; border: 1px solid rgba(0,212,255,0.3);
        }

        .category-badge {
          font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em;
          padding: 3px 10px; border-radius: 100px;
          background: rgba(168,85,247,0.12); color: #a855f7; border: 1px solid rgba(168,85,247,0.25);
        }

        .contact-link {
          font-family: 'DM Mono', monospace; font-size: 0.75rem; color: #9ca3af;
          text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 10px;
        }
        .contact-link:hover { color: #00d4ff; }

        .award-card {
          padding: 16px 20px; border-radius: 12px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: flex-start; gap: 14px;
        }

        .divider {
          width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);
          align-self: stretch;
        }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .hero-title { font-size: clamp(2.5rem, 10vw, 4rem); }
        }
      `}</style>

      {/* Background layers */}
      <div className="noise-bg" />
      <div className="grid-bg" />
      <div className="glow-orb" style={{ width: 600, height: 600, top: '-200px', left: '-200px', background: 'rgba(0,212,255,0.06)' }} />
      <div className="glow-orb" style={{ width: 500, height: 500, bottom: '20%', right: '-100px', background: 'rgba(168,85,247,0.06)' }} />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 24px',
          background: isScrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#00d4ff', textTransform: 'uppercase' }}>
            ilyas.dev
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hide-mobile">
            {navItems.map(item => (
              <button
                key={item}
                className={`nav-link${activeSection === item.toLowerCase() ? ' active' : ''}`}
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
            <a
              href="/CV/CV-2025-Alibenyahia-Ilyas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginLeft: 12, padding: '8px 18px', fontSize: '0.7rem' }}
            >
              ↓ Resume
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1, padding: '0 24px', opacity: heroOpacity, y: heroY }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', paddingTop: 80 }}>
          {/* Two-column layout: text left, photo right */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
            
            {/* LEFT: Text content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ flex: '1 1 420px', minWidth: 0 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="section-label"
                style={{ marginBottom: 20 }}
              >
                ▸ Available for opportunities
              </motion.span>

              {/* Name — single-line editorial style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: 20 }}
              >
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#f0f4ff',
                }}>
                  Ilyas{' '}
                  <span style={{
                    WebkitTextStroke: '2px #00d4ff',
                    color: 'transparent',
                    fontStyle: 'italic',
                  }}>
                    Ali-Benyahia
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}
              >
                {['Software Engineer', 'AI Developer', 'Full Stack Developer'].map((role, i) => (
                  <span key={role} style={{
                    fontFamily: 'DM Mono', fontSize: '0.72rem', padding: '6px 14px', borderRadius: 100,
                    background: i === 0 ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${i === 0 ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
                    color: i === 0 ? '#00d4ff' : '#9ca3af'
                  }}>
                    {role}
                  </span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{ fontSize: '0.95rem', color: '#6b7280', maxWidth: 520, lineHeight: 1.75, marginBottom: 32 }}
              >
                Master's graduate in Computer Science specializing in AI-powered web applications and intelligent agent systems.
                Experienced in end-to-end development with MERN Stack, Django, LangChain, and RAG architectures.
                Published researcher at an international AI conference.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}
              >
                <button className="btn-primary" onClick={() => scrollTo('contact')}>✉ Get in Touch</button>
                <button className="btn-secondary" onClick={() => scrollTo('projects')}>View Projects →</button>
                <a href="https://github.com/ilyas-ali-benyahia" target="_blank" rel="noopener noreferrer" className="btn-secondary">⌥ GitHub</a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ display: 'flex', gap: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}
              >
                {[
                  { value: '9+', label: 'Projects Built' },
                  { value: '2', label: 'Degrees Earned' },
                  { value: '1st', label: 'AI Competition' },
                  { value: '1', label: 'Conference Paper' }
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00d4ff', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: '#6b7280', marginTop: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
              className="hide-mobile"
            >
              <div style={{ position: 'relative' }}>
                {/* Decorative rings */}
                <div style={{
                  position: 'absolute', inset: -16, borderRadius: '50%',
                  border: '1px solid rgba(0,212,255,0.15)',
                  animation: 'spin 20s linear infinite'
                }} />
                <div style={{
                  position: 'absolute', inset: -32, borderRadius: '50%',
                  border: '1px dashed rgba(168,85,247,0.1)',
                  animation: 'spin 30s linear infinite reverse'
                }} />
                <div style={{
                  width: 260, height: 260, borderRadius: '50%',
                  border: '2px solid rgba(0,212,255,0.35)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(168,85,247,0.1))',
                  boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(168,85,247,0.08)',
                  position: 'relative', zIndex: 1,
                }}>
                  <img
                    src="/asset/ilyas.jpg"
                    alt="Ilyas Ali-Benyahia"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.display = 'flex';
                      e.target.parentElement.style.alignItems = 'center';
                      e.target.parentElement.style.justifyContent = 'center';
                      e.target.parentElement.innerHTML = '<span style="font-size:5rem;color:#00d4ff">I</span>';
                    }}
                  />
                </div>
                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: 8, right: -16, zIndex: 2,
                  background: 'rgba(8,12,20,0.9)', border: '1px solid rgba(0,212,255,0.3)',
                  borderRadius: 12, padding: '8px 14px',
                  backdropFilter: 'blur(12px)',
                  display: 'flex', alignItems: 'center', gap: 8
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: '#d1d5db', whiteSpace: 'nowrap' }}>Open to work</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </motion.section>

      {/* About Section */}
      <section id="about" style={{ padding: '120px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp} whileInView={fadeUp.animate} initial={fadeUp.initial} viewport={{ once: true }}>
            <span className="section-label">01 — About</span>
            <h2 className="section-title" style={{ marginBottom: 60 }}>Who I Am</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {/* Personal Info */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '0.65rem', fontFamily: 'DM Mono', letterSpacing: '0.2em', color: '#6b7280', textTransform: 'uppercase', marginBottom: 20 }}>Personal Info</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Date of Birth', value: 'April 16, 2002' },
                  { label: 'Location', value: 'El Attaf, Ain Defla, Algeria' },
                  { label: 'Email', value: 'ilyasalibenyahia@gmail.com' },
                  { label: 'Phone', value: '+213 06 56 13 01 37' },
                ].map(item => (
                  <div key={item.label} style={{ paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#d1d5db' }}>{item.value}</div>
                  </div>
                ))}
                <div>
                  <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Languages</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {[{ lang: 'Arabic', level: 'Native' }, { lang: 'French', level: 'Intermediate' }, { lang: 'English', level: 'Advanced' }].map(l => (
                      <span key={l.lang} style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', padding: '4px 10px', borderRadius: 100, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}>
                        {l.lang} · {l.level}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '0.65rem', fontFamily: 'DM Mono', letterSpacing: '0.2em', color: '#6b7280', textTransform: 'uppercase', marginBottom: 20 }}>Education</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  {
                    degree: "Master's in Computer Science",
                    school: "University of Chlef",
                    year: "2025",
                    thesis: "Thesis: AI-Powered Multilingual Interactive Learning Platform",
                    color: '#00d4ff'
                  },
                  {
                    degree: "Bachelor's in Computer Science",
                    school: "University of Chlef",
                    year: "2023",
                    thesis: "Project: License Plate Detection and Recognition System",
                    color: '#a855f7'
                  }
                ].map(edu => (
                  <div key={edu.degree} style={{ paddingLeft: 16, borderLeft: `2px solid ${edu.color}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#f0f4ff' }}>{edu.degree}</span>
                      <span style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: edu.color, flexShrink: 0, marginLeft: 12 }}>{edu.year}</span>
                    </div>
                    <div style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#6b7280', marginBottom: 6 }}>{edu.school}</div>
                    <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontStyle: 'italic' }}>{edu.thesis}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* About Summary */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '0.65rem', fontFamily: 'DM Mono', letterSpacing: '0.2em', color: '#6b7280', textTransform: 'uppercase', marginBottom: 20 }}>Summary</div>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.8, marginBottom: 20 }}>
                I'm a Computer Science graduate passionate about building intelligent, user-centric software. My work sits at the intersection of full-stack development and AI engineering — from crafting polished React interfaces to building LLM-powered agent systems.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.8 }}>
                I believe great software is both technically rigorous and intuitive. Whether working on a production-grade web app or an AI pipeline, I focus on writing clean, maintainable code that solves real problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '120px 24px', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp} whileInView={fadeUp.animate} initial={fadeUp.initial} viewport={{ once: true }}>
            <span className="section-label">02 — Skills</span>
            <h2 className="section-title" style={{ marginBottom: 60 }}>Technical Stack</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {Object.entries(skills).map(([category, { items, color, icon }], index) => (
              <motion.div
                key={category}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', letterSpacing: '0.12em', color, textTransform: 'uppercase' }}>{category}</span>
                </div>
                <div>
                  {items.map(item => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '120px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp} whileInView={fadeUp.animate} initial={fadeUp.initial} viewport={{ once: true }}>
            <span className="section-label">03 — Projects</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>What I've Built</h2>
            <p style={{ color: '#6b7280', marginBottom: 60, fontSize: '1rem' }}>A selection of projects across AI, full-stack, and computer vision.</p>
          </motion.div>

          {/* Featured project */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ marginBottom: 24, padding: 36, borderColor: 'rgba(0,212,255,0.15)', background: 'rgba(0,212,255,0.03)' }}
            whileHover={{ y: -4 }}
          >
            <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="featured-badge">Featured — Master's Thesis</span>
              <span className="category-badge">{projects[0].category}</span>
              <span style={{ fontSize: '1.5rem' }}>{projects[0].emoji}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f0f4ff', marginBottom: 12 }}>{projects[0].title}</h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: 20, maxWidth: 700 }}>{projects[0].description}</p>
            <div>{projects[0].tech.map(t => <span key={t} className="tag tag-highlight">{t}</span>)}</div>
          </motion.div>

          {/* Other projects grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ fontSize: '1.8rem' }}>{project.emoji}</span>
                  <span className="category-badge">{project.category}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f4ff', marginBottom: 10, lineHeight: 1.4 }}>{project.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 16 }}>{project.description}</p>
                <div>{project.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Awards Section */}
      <section id="experience" style={{ padding: '120px 24px', position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div {...fadeUp} whileInView={fadeUp.animate} initial={fadeUp.initial} viewport={{ once: true }}>
            <span className="section-label">04 — Experience & Recognition</span>
            <h2 className="section-title" style={{ marginBottom: 60 }}>Where I've Contributed</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#00d4ff', textTransform: 'uppercase', marginBottom: 24 }}>Work Experience</div>
              <div className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div className="timeline-dot" />
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#f0f4ff', marginBottom: 4 }}>Teaching Assistant</h4>
                    <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: '#6b7280', marginBottom: 12 }}>University of Chlef · 2023–2025</div>
                    <ul style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.7, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <li>Assisted students during practical lab sessions</li>
                      <li>Explained core programming and data structure concepts</li>
                      <li>Supervised and mentored student projects</li>
                      <li>Graded exercises and provided detailed feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#a855f7', textTransform: 'uppercase', marginBottom: 24 }}>Awards & Recognition</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { emoji: '🥇', title: '1st Place — AI Competition', desc: 'University of Constantine', color: '#f59e0b' },
                  { emoji: '🥉', title: '3rd Place — Tech Hackathon', desc: 'Organized by Mobilis', color: '#6b7280' },
                 { 
  emoji: '📜', 
  title: 'Technical Workshop Certificates', 
  desc: 'Participation in multiple advanced technical workshops in Constantine and a certified technical workshop at the University of Chlef', 
  color: '#a855f7' 
},
                ].map(award => (
                  <div key={award.title} className="award-card">
                    <span style={{ fontSize: '1.4rem' }}>{award.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f0f4ff', marginBottom: 2 }}>{award.title}</div>
                      <div style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: '#6b7280' }}>{award.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" style={{ padding: '120px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-label">05 — Publications</span>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Research & Publications</h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  borderColor: pub.status === 'Under Review' ? 'rgba(245,158,11,0.2)' : 'rgba(168,85,247,0.2)',
                  background: pub.status === 'Under Review' ? 'rgba(245,158,11,0.02)' : 'rgba(168,85,247,0.03)'
                }}
                whileHover={{ y: -4 }}
              >
                {/* Top badges row */}
                <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'DM Mono', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: 100,
                    background: 'rgba(168,85,247,0.15)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.3)'
                  }}>{pub.type}</span>

                  <span style={{
                    fontFamily: 'DM Mono', fontSize: '0.58rem', letterSpacing: '0.12em',
                    padding: '3px 10px', borderRadius: 100,
                    background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)'
                  }}>{pub.year}</span>

                  {pub.status === 'Under Review' ? (
                    <span style={{
                      fontFamily: 'DM Mono', fontSize: '0.58rem', letterSpacing: '0.12em',
                      padding: '3px 10px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 5,
                      background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)'
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', animation: 'pulse 1.5s ease-in-out infinite' }} />
                      Under Review
                    </span>
                  ) : (
                    <span style={{
                      fontFamily: 'DM Mono', fontSize: '0.58rem', letterSpacing: '0.12em',
                      padding: '3px 10px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 5,
                      background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.25)'
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                      Published
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f4ff', marginBottom: 12, lineHeight: 1.45 }}>
                  {pub.title}
                </h3>

                {/* Authors (if present) */}
                {pub.authors && (
                  <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ fontSize: '0.8rem', flexShrink: 0, marginTop: 1 }}>✍️</span>
                    <p style={{ fontFamily: 'DM Mono', fontSize: '0.68rem', color: '#6b7280', lineHeight: 1.6 }}>
                      {pub.authors.split(', ').map((author, ai) => (
                        <span key={ai}>
                          <span style={{ color: author.includes('Ilyas') ? '#00d4ff' : '#6b7280', fontWeight: author.includes('Ilyas') ? 600 : 400 }}>
                            {author}
                          </span>
                          {ai < pub.authors.split(', ').length - 1 && <span style={{ color: '#374151' }}>, </span>}
                        </span>
                      ))}
                    </p>
                  </div>
                )}

                {/* Venue */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: '0.8rem' }}>📖</span>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.68rem', color: pub.status === 'Under Review' ? '#f59e0b' : '#a855f7', fontStyle: 'italic' }}>
                    {pub.venue}
                  </span>
                </div>

                {/* Description */}
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  {pub.description}
                </p>
              </motion.div>
            ))}
          </div>
          <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '120px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-label" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>06 — Contact</span>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Let's Build<br />Something <span className="accent">Together</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.7, marginBottom: 60, maxWidth: 500, margin: '0 auto 60px' }}>
              Open to full-time roles, freelance projects, and interesting collaborations. 
              Don't hesitate to reach out — I respond quickly.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 48 }}>
              {[
                { icon: '✉', label: 'Email', value: 'ilyasalibenyahia@gmail.com', href: 'mailto:ilyasalibenyahia@gmail.com' },
                { icon: '📱', label: 'Phone', value: '+213 06 56 13 01 37', href: 'tel:+213656130137' },
                { icon: '📍', label: 'Location', value: 'El Attaf, Ain Defla, Algeria', href: '#' },
              ].map(c => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  className="card"
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 24 }}
                  whileHover={{ y: -4 }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{c.label}</span>
                  <span style={{ fontSize: '0.8rem', color: '#d1d5db', textAlign: 'center' }}>{c.value}</span>
                </motion.a>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
              <motion.a
                href="https://linkedin.com/in/ilyas-ali-benyahia-a411b6330"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/ilyas-ali-benyahia"
                target="_blank" rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '24px', textAlign: 'center', position: 'relative', zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: '#374151', letterSpacing: '0.12em' }}>
          © 2025 ILYAS ALI-BENYAHIA · BUILT WITH REACT & FRAMER MOTION
        </span>
      </footer>
    </div>
  );
};

export default Portfolio;
