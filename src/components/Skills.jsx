import {
    FaCode,
    FaLaptopCode,
    FaTools,
    FaDatabase,
    FaLightbulb,
    FaProjectDiagram,
  } from 'react-icons/fa'
  import { SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiNodedotjs, SiReact, SiMongodb, SiFirebase, SiDocker, SiGit, SiGithub } from 'react-icons/si'
  
  const skills = [
    {
      title: 'Languages',
      icon: <FaCode className="text-xl text-blue-500" />,
      items: [
        { name: 'C', icon: <SiC className="text-lg text-blue-600" /> },
        { name: 'C++', icon: <SiCplusplus className="text-lg text-purple-600" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-lg text-yellow-500" /> },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaLaptopCode className="text-xl text-green-500" />,
      items: [
        { name: 'HTML', icon: <SiHtml5 className="text-lg text-orange-600" /> },
        { name: 'CSS', icon: <SiCss3 className="text-lg text-blue-600" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-lg text-purple-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-lg text-teal-400" /> },
        { name: 'NodeJS', icon: <SiNodedotjs className="text-lg text-green-600" /> },
        { name: 'ReactJS', icon: <SiReact className="text-lg text-cyan-400" /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools className="text-xl text-gray-600" />,
      items: [
        { name: 'Git', icon: <SiGit className="text-lg text-red-600" /> },
        { name: 'GitHub', icon: <SiGithub className="text-lg text-black dark:text-white" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-lg text-green-700" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-lg text-yellow-500" /> },
        { name: 'Docker', icon: <SiDocker className="text-lg text-blue-500" /> },
      ],
    },
    {
      title: 'Core Subjects',
      icon: <FaDatabase className="text-xl text-pink-500" />,
      items: [
        { name: 'DSA' },
        { name: 'Computer Networks' },
        { name: 'Operating System' },
        { name: 'Automata Theory' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <FaLightbulb className="text-xl text-yellow-400" />,
      items: [
        { name: 'Adaptability' },
        { name: 'Teamwork' },
        { name: 'Problem-Solving' },
        { name: 'Creativity' },
      ],
    },
  ]
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Skills & Tools
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:scale-105 transition-transform duration-200"
                    >
                      {item.icon && item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills