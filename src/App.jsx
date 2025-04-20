import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Extracurriculars from './components/Extracurriculars'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isDark, setIsDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-500 ease-in-out">
        <Header toggleDarkMode={() => setIsDark(!isDark)} isDark={isDark} />
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Extracurriculars />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App