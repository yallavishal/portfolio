import { FaUniversity, FaLaptopCode, FaSchool } from 'react-icons/fa'

const educationDetails = [
  {
    institute: 'Lovely Professional University, Phagwara, Punjab',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    duration: 'Since August 2022',
    grade: 'CGPA: 8.10',
    icon: <FaUniversity size={30} className="text-blue-500" />,
  },
  {
    institute: 'SVK Junior College, Visakhapatnam, AP',
    degree: 'Intermediate - MPC',
    duration: 'June 2020 - March 2022',
    grade: 'Percentage: 90.6%',
    icon: <FaLaptopCode size={30} className="text-green-500" />,
  },
  {
    institute: 'Dr. KKR’s Gowtham High School, Visakhapatnam, AP',
    degree: 'Matriculation (AP Board)',
    duration: 'March 2019 - March 2020',
    grade: 'Percentage: 98%',
    icon: <FaSchool size={30} className="text-yellow-500" />,
  },
]

const Education = () => {
    return (
      <section id="education" className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Education
            </h2>
          </div>
  
          <div className="relative space-y-10 pl-6 sm:pl-12 border-l-2 border-gray-200 dark:border-gray-700">
            {educationDetails.map((edu, index) => (
              <div 
                key={index}
                className="relative group transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 -left-[23px] sm:-left-[29px] top-6 ring-4 ring-gray-50 dark:ring-gray-900" />
  
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-x-2 hover:transition border border-gray-100 dark:border-gray-700 ml-4">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                      {edu.icon}
                    </div>
  
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.institute}
                      </h3>
                      <div className="space-y-1.5">
                        <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2">
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-md text-[0.65rem] sm:text-xs md:text-sm">
                            {edu.degree}
                          </span>
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          {edu.grade}
                        </p>
                        <p className="text-[0.6rem] sm:text-xs text-gray-500 dark:text-gray-400 font-mono">
                          {edu.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

export default Education