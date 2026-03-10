import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-64 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest">BACKGROUND</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="section-heading">Education</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="glass neon-card rounded-3xl p-8 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row gap-6 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-20 h-20 rounded-2xl glass border border-cyan-500/30 flex items-center justify-center text-4xl glow-blue"
              >
                🎓
              </motion.div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 font-mono">
                  CURRENT · IN PROGRESS
                </span>
                <span className="text-slate-500 font-mono text-sm">2023 – 2027</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                B.Tech Information Technology
              </h3>
              <p className="text-xl text-cyan-400 font-semibold mb-4">CVM University</p>

              <p className="text-slate-400 leading-relaxed mb-6">
                Pursuing Bachelor of Technology in Information Technology with focus on AI/ML, Cybersecurity, and Software Development. Actively participating in hackathons and building real-world projects alongside academics.
              </p>

              {/* Focus areas */}
              <div>
                <p className="text-slate-500 text-xs font-mono mb-3 tracking-wider">FOCUS AREAS</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Cybersecurity',
                    'Backend Development',
                    'Data Structures',
                    'Generative AI',
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-lg glass border border-white/10 text-xs text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-default"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Year badge */}
            <div className="md:text-right">
              <div className="glass border border-purple-500/30 rounded-2xl px-5 py-4 text-center glow-purple">
                <div className="text-3xl font-black gradient-text">2027</div>
                <div className="text-slate-400 text-xs font-mono mt-1">Expected</div>
                <div className="text-slate-400 text-xs font-mono">Graduation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
