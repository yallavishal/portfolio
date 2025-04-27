import { useState } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const Header = ({ toggleDarkMode, isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-500 ease-in-out">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-500">
        Vishal Yalla <span className="text-blue-500"> .</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base text-gray-700 dark:text-gray-300 transition-colors duration-500">
        <a href="#hero" className="hover:text-blue-500 transition-colors duration-300">Profile</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a>
        <a href="#skills" className="hover:text-blue-500 transition-colors duration-300">Skills</a>
        <a href="#certifications" className="hover:text-blue-500 transition-colors duration-300">Certifications</a>
        <a href="#extracurriculars" className="hover:text-blue-500 transition-colors duration-300">Extracurriculars</a>
        <a href="#education" className="hover:text-blue-500 transition-colors duration-300">Education</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contacts</a>    
      </nav>

      {/* Right-side Controls */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-500 ease-in-out"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 transition-colors duration-500"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-md py-4 px-6 flex flex-col space-y-4 z-40 md:hidden text-sm transition-colors duration-500">
          <a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 text-gray-800 dark:text-gray-200 transition-colors duration-300">Profile</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 text-gray-800 dark:text-gray-200 transition-colors duration-300">Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 text-gray-800 dark:text-gray-200 transition-colors duration-300">Skills</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 text-gray-800 dark:text-gray-200 transition-colors duration-300">Certifications</a>
          <a href="#extracurriculars" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 text-gray-800 dark:text-gray-200 transition-colors duration-300">Extracurriculars</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 text-gray-800 dark:text-gray-200 transition-colors duration-300">Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 text-gray-800 dark:text-gray-200 transition-colors duration-300">Contacts</a>
        </div>
      )}
    </header>
  )
}

export default Header