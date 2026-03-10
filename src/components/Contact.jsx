import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contacts = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'sohamkulkarni914@gmail.com',
    href: 'mailto:sohamkulkarni914@gmail.com',
    color: 'cyan',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Somicool',
    href: 'https://github.com/Somicool',
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/soham',
    href: 'https://www.linkedin.com/feed/',
    color: 'blue',
  },
];

const colorMap = {
  cyan: { border: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/10', hover: 'hover:border-cyan-500/60 hover:bg-cyan-500/5' },
  purple: { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10', hover: 'hover:border-purple-500/60 hover:bg-purple-500/5' },
  blue: { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/10', hover: 'hover:border-blue-500/60 hover:bg-blue-500/5' },
};

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sohamkulkarni914@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-purple-900/10 blur-3xl" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Contact <span className="section-heading">Me</span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)' }} />
          <p className="text-slate-400 mt-4 max-w-md mx-auto">
            Open for collaborations, internships, and exciting projects. Let's build something amazing together!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {contacts.map((contact, i) => {
            const c = colorMap[contact.color];
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`glass rounded-2xl p-6 border ${c.border} ${c.hover} transition-all flex flex-col items-center gap-3 text-center group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} group-hover:scale-110 transition-transform`}>
                  {contact.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono mb-1">{contact.label}</p>
                  <p className={`font-medium ${c.text} text-sm break-all`}>{contact.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={copyEmail}
            className="px-8 py-4 rounded-full font-semibold text-white transition-all relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)' }}
          >
            <span className="flex items-center gap-2">
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Email Address
                </>
              )}
            </span>
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-slate-600 text-sm font-mono">
            Designed & Built by{' '}
            <span className="gradient-text font-semibold">Soham Kulkarni</span>
            {' '}· 2024
          </p>
          <p className="text-slate-700 text-xs mt-2">React · Tailwind CSS · Framer Motion</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
