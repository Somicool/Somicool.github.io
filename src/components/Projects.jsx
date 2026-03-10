import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 2,
    title: 'Image Deblurring AI',
    emoji: '🚂',
    description: 'AI system for Indian Railways that restores blurred surveillance images using deep learning. Won National Level Hackathon at Adani — Prize: ₹1,00,000.',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'CNN'],
    category: 'AI/ML',
    color: 'purple',
    highlight: '🏆 National Hackathon Winner — ₹1,00,000 Prize',
    featured: true,
    github: 'https://github.com/Somicool',
  },
  {
    id: 1,
    title: 'URL Vulnerability Crawler',
    emoji: '🔍',
    description: 'A cybersecurity tool that scans websites to identify potential vulnerabilities in URLs, detecting XSS, open redirects, and other security flaws.',
    tags: ['Python', 'BeautifulSoup', 'Requests', 'Security'],
    category: 'Security',
    color: 'cyan',
    github: 'https://github.com/Somicool',
  },
  {
    id: 3,
    title: 'SQL Injection Detector',
    emoji: '🛡️',
    description: 'AI-powered tool that detects SQL injection attacks in web applications using pattern recognition and machine learning classifiers.',
    tags: ['Python', 'ML', 'NLP', 'Web Security'],
    category: 'Security',
    color: 'pink',
    github: 'https://github.com/Somicool',
  },
  {
    id: 4,
    title: 'DoS Attack Detection System',
    emoji: '🔒',
    description: 'Monitors network traffic in real-time and identifies denial-of-service attack patterns using statistical anomaly detection.',
    tags: ['Python', 'Scapy', 'Network Analysis', 'ML'],
    category: 'Security',
    color: 'blue',
    github: 'https://github.com/Somicool',
  },
  {
    id: 5,
    title: 'KYC Auto-Filler',
    emoji: '📋',
    description: 'Automation tool that fills KYC forms using intelligent data extraction and OCR, streamlining compliance workflows.',
    tags: ['Python', 'OCR', 'Automation', 'AI'],
    category: 'AI/ML',
    color: 'purple',
    github: 'https://github.com/Somicool',
  },
  {
    id: 6,
    title: 'Phishing Detector',
    emoji: '🎣',
    description: 'Security system that detects phishing websites and malicious links using URL analysis, ML models, and threat intelligence.',
    tags: ['Python', 'ML', 'NLP', 'Cybersecurity'],
    category: 'Security',
    color: 'cyan',
    github: 'https://github.com/Somicool',
  },
];

const colorMap = {
  cyan: { border: 'border-cyan-500/30', tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', icon: 'text-cyan-400', glow: 'hover:border-cyan-500/60' },
  purple: { border: 'border-purple-500/30', tag: 'bg-purple-500/10 text-purple-400 border-purple-500/30', icon: 'text-purple-400', glow: 'hover:border-purple-500/60' },
  pink: { border: 'border-pink-500/30', tag: 'bg-pink-500/10 text-pink-400 border-pink-500/30', icon: 'text-pink-400', glow: 'hover:border-pink-500/60' },
  blue: { border: 'border-blue-500/30', tag: 'bg-blue-500/10 text-blue-400 border-blue-500/30', icon: 'text-blue-400', glow: 'hover:border-blue-500/60' },
};

const filters = ['All', 'Security', 'AI/ML'];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest">WHAT I'VE BUILT</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="section-heading">Projects</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                activeFilter === f
                  ? 'text-white border-cyan-500/60'
                  : 'text-slate-400 border-white/10 glass hover:border-cyan-500/30 hover:text-slate-200'
              }`}
              style={activeFilter === f ? { background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(139,92,246,0.2))' } : {}}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => {
              const c = colorMap[project.color];
              const isFeatured = project.featured;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`project-card rounded-2xl p-6 border flex flex-col transition-all duration-300 relative
                    ${isFeatured
                      ? 'md:col-span-2 lg:col-span-3 border-amber-500/60 bg-gradient-to-br from-amber-500/10 via-purple-500/10 to-cyan-500/10 shadow-[0_0_40px_rgba(245,158,11,0.2)]'
                      : `glass ${c.border} ${c.glow}`
                    }`}
                  style={isFeatured ? { backdropFilter: 'blur(16px)' } : { boxShadow: 'none' }}
                >
                  {isFeatured && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                      background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(139,92,246,0.08), rgba(0,212,255,0.08))',
                      border: '1px solid rgba(245,158,11,0.3)',
                      borderRadius: '1rem',
                    }} />
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 relative">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl
                        ${isFeatured ? 'bg-amber-500/20 border border-amber-500/40' : `glass border ${c.border}`}`}>
                        {project.emoji}
                      </div>
                      {isFeatured && (
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">Featured Project</span>
                          </div>
                          <h3 className="font-black text-2xl md:text-3xl text-white">{project.title}</h3>
                        </div>
                      )}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center transition-colors flex-shrink-0
                        ${isFeatured ? 'text-amber-400 hover:text-amber-300' : 'text-slate-400 hover:text-cyan-400'}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>

                  {/* Highlight badge */}
                  {project.highlight && (
                    <motion.div
                      animate={{ boxShadow: ['0 0 8px rgba(245,158,11,0.3)', '0 0 20px rgba(245,158,11,0.6)', '0 0 8px rgba(245,158,11,0.3)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mb-4 px-4 py-2 rounded-full text-sm font-black text-amber-400 bg-amber-500/15 border border-amber-500/50 inline-flex items-center gap-2 w-fit"
                    >
                      {project.highlight}
                    </motion.div>
                  )}

                  {/* Title & description */}
                  {!isFeatured && <h3 className={`font-bold text-lg text-white mb-2`}>{project.title}</h3>}
                  <p className={`text-slate-400 leading-relaxed flex-1 ${isFeatured ? 'text-base md:text-lg max-w-3xl' : 'text-sm'}`}>{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-1 rounded-md text-xs border font-mono
                        ${isFeatured ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' : c.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
