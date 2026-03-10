import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const hackathons = [
  { name: 'Adani Hackathon', result: '🏆 1st Place · ₹1,00,000', highlight: true },
  { name: 'Odoo Hackathon', result: 'Participant', highlight: false },
  { name: 'Bangalore DSU Hackathon', result: 'Participant', highlight: false },
  { name: 'CVM Hackathon', result: 'Participant', highlight: false },
  { name: '5–6 More Hackathons', result: 'Active Competitor', highlight: false },
];

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest">MILESTONES</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="section-heading">Achievements</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
        </motion.div>

        {/* Main achievement card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="relative overflow-hidden rounded-3xl p-8 mb-10"
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1), rgba(139,92,246,0.15))',
            border: '1px solid rgba(245,158,11,0.3)',
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 0 60px rgba(245,158,11,0.05)' }} />

          {/* Background deco */}
          <div className="absolute top-4 right-8 text-9xl opacity-10 select-none">🏆</div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-7xl"
            >
              🏆
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-amber-400 bg-amber-500/20 border border-amber-500/40">
                  NATIONAL LEVEL · 1ST PRIZE
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Adani National Hackathon
              </h3>
              <p className="text-slate-300 mb-3">
                Won 1st place for building an <span className="text-amber-400 font-semibold">AI Image Deblurring System</span> for Indian Railways surveillance — restoring blurred CCTV footage using deep learning.
              </p>
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
              >
                Prize Money: ₹1,00,000
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hackathon grid */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg font-semibold text-slate-400 mb-6 text-center font-mono tracking-wider"
          >
            HACKATHON JOURNEY
          </motion.h3>
          <div className="space-y-3">
            {hackathons.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  h.highlight
                    ? 'border-amber-500/40 bg-amber-500/5 hover:border-amber-500/60'
                    : 'glass neon-card'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                    h.highlight ? 'bg-amber-500/20' : 'bg-slate-800'
                  }`}>
                    {h.highlight ? '🥇' : '⚡'}
                  </div>
                  <span className={`font-medium ${h.highlight ? 'text-amber-400' : 'text-slate-200'}`}>
                    {h.name}
                  </span>
                </div>
                <span className={`text-sm font-mono ${h.highlight ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>
                  {h.result}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extra achievement stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: '🏆', label: 'Hackathons Won', value: '1' },
            { icon: '⚡', label: 'Competitions Entered', value: '8+' },
            { icon: '💰', label: 'Prize Won', value: '₹1L' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass neon-card rounded-2xl p-5 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
