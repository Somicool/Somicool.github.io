import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    color: 'cyan',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
    ],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    color: 'purple',
    skills: [
      { name: 'Prompt Engineering', level: 88 },
      { name: 'OpenCV', level: 78 },
      { name: 'AI Security Systems', level: 82 },
    ],
  },
  {
    title: 'Cybersecurity Tools',
    icon: '🛡️',
    color: 'pink',
    skills: [
      { name: 'Nmap', level: 80 },
      { name: 'Burp Suite', level: 75 },
      { name: 'Wireshark', level: 72 },
    ],
  },
  {
    title: 'Development Tools',
    icon: '⚙️',
    color: 'blue',
    skills: [
      { name: 'GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
];

const colorMap = {
  cyan: { bar: 'from-cyan-400 to-cyan-600', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  purple: { bar: 'from-purple-400 to-purple-600', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  pink: { bar: 'from-pink-400 to-pink-600', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'shadow-pink-500/20' },
  blue: { bar: 'from-blue-400 to-blue-600', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
};

const SkillBar = ({ name, level, color, index, inView }) => {
  const c = colorMap[color];
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className={`text-xs font-mono font-bold ${c.text}`}>{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} shadow-lg ${c.glow}`}
          style={{ boxShadow: 'inset 0 0 10px rgba(255,255,255,0.1)' }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-900/10 blur-3xl" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest">EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="section-heading">Skills</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => {
            const c = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                whileHover={{ y: -4 }}
                className={`glass neon-card rounded-2xl p-6 border ${c.border}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl glass flex items-center justify-center text-xl border ${c.border}`}>
                    {category.icon}
                  </div>
                  <h3 className={`font-bold text-lg ${c.text}`}>{category.title}</h3>
                </div>
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    index={i}
                    inView={inView}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Tech cluster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 glass neon-card rounded-2xl p-8 text-center"
        >
          <p className="text-slate-400 text-sm font-mono mb-6 tracking-wider">TECHNOLOGIES I WORK WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'JavaScript', 'React', 'FastAPI', 'PostgreSQL',
              'OpenCV', 'TensorFlow', 'LangChain', 'Nmap', 'Burp Suite',
              'Wireshark', 'Git', 'Docker', 'Linux', 'REST APIs'
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass border border-white/10 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default font-mono"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
