import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stats = [
  { label: 'Hackathons', value: '8+', icon: '🏆' },
  { label: 'Projects', value: '6+', icon: '🚀' },
  { label: 'Technologies', value: '15+', icon: '⚡' },
  { label: 'Prize Won', value: '₹1L', icon: '💰' },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest">WHO AM I</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">About <span className="section-heading">Me</span></h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-cyan-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-purple-500/20"
              />

              {/* Main card */}
              <div className="w-64 h-64 rounded-full glass-strong border border-cyan-500/20 flex flex-col items-center justify-center relative overflow-hidden glow-blue">
                <div className="text-6xl mb-2">👨‍💻</div>
                <div className="text-center px-4">
                  <p className="text-white font-bold text-sm">Soham Kulkarni</p>
                  <p className="text-cyan-400 text-xs font-mono">B.Tech IT · 2027</p>
                </div>
                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-8 top-8 glass border border-cyan-500/30 rounded-xl px-3 py-2 text-xs text-cyan-400 font-mono glow-blue"
              >
                AI/ML 🤖
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -left-8 bottom-8 glass border border-purple-500/30 rounded-xl px-3 py-2 text-xs text-purple-400 font-mono glow-purple"
              >
                Security 🛡️
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass neon-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-cyan-400">{'<'}</span>About<span className="text-cyan-400">{'/>'}</span>
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Soham Umesh Kulkarni is currently pursuing <span className="text-cyan-400 font-semibold">B.Tech in Information Technology</span> from{' '}
                <span className="text-purple-400 font-semibold">CVM University (2023–2027)</span>. His interests lie in Cybersecurity, Artificial Intelligence, Machine Learning, Backend Systems, and Generative AI.
              </p>
            </div>

            <div className="glass neon-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Career Goal
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To become a successful <span className="text-cyan-400 font-semibold">AI/ML and Cybersecurity developer</span> building intelligent and secure digital systems that make a real-world impact.
              </p>
            </div>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2">
              {['Cybersecurity', 'AI/ML', 'Generative AI', 'Backend Dev', 'Python', 'Security Systems'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass neon-card rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
