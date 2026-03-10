import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ['#00d4ff', '#8b5cf6', '#ec4899'] },
          links: {
            color: '#00d4ff',
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 60 },
          opacity: {
            value: { min: 0.05, max: 0.3 },
            animation: { enable: true, speed: 0.5, sync: false },
          },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

