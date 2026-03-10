import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712]"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo / icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-2 border-transparent"
              style={{
                background: 'linear-gradient(#030712, #030712) padding-box, linear-gradient(135deg, #00d4ff, #8b5cf6) border-box',
              }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <span className="text-3xl font-black gradient-text">S</span>
              </div>
            </motion.div>

            {/* Name */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-white tracking-widest"
              >
                SOHAM KULKARNI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-cyan-400 tracking-[0.3em] mt-1 font-mono"
              >
                AI/ML · CYBERSECURITY
              </motion.p>
            </div>

            {/* Progress bar */}
            <div className="w-72">
              <div className="flex justify-between text-xs text-slate-500 mb-2 font-mono">
                <span>Initializing...</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg, #00d4ff, #8b5cf6, #ec4899)',
                    boxShadow: '0 0 10px rgba(0,212,255,0.6)',
                  }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
