import { useState, useEffect } from 'react'
import './App.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import FloatingSocials from './components/FloatingSocials'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#030712] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        {loading && <Loader onComplete={() => setLoading(false)} />}

        {!loading && (
          <>
            <CustomCursor />
            <ParticlesBackground />
            <FloatingSocials />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Achievements />
              <Education />
              <Contact />
            </main>
          </>
        )}
      </div>
    </div>
  )
}

export default App
