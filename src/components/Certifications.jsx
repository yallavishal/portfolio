import { FaCloud,FaCertificate, FaUniversity, FaAws, FaCode } from 'react-icons/fa'
import { VscAzureDevops } from "react-icons/vsc";
import certificate2 from '../assets/certificate2.png'
import certificate3 from '../assets/certificate3.png'

const certifications = [
  {
    title: 'Cloud Computing Foundations',
    provider: 'NPTEL via Swayam',
    duration: 'Since Jan, 2025',
    link: '',
    icon: <FaAws className="text-2xl text-indigo-500" />,
    image: "",

  },
  {
    title: 'DevOps & Software Engineering',
    provider: 'IBM via Coursera',
    duration: 'Aug, 2024 - Nov, 2024',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/ZZNN6FALNU4L',
    icon: <VscAzureDevops className="text-2xl text-purple-500" />,
    image: certificate2,

  },
  {
    title: 'Full Stack Web Development (MERN)',
    provider: 'CipherSchools',
    duration: 'May, 2024 - July, 2024',
    link: 'https://www.cipherschools.com/certificate/preview?id=66a6b75a938f3ef9dda7b666',
    icon: <FaCode className="text-2xl text-pink-500" />,
    image: certificate3,

  },
]

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Certification & Certficates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional credentials validating my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {cert.icon}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {cert.provider}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full  text-gray-600 dark:text-gray-300">
                    {cert.duration}
                  </span>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      View <span className="hidden sm:inline">Certificate</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                {cert.image ? (
                  <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-transform duration-300 group-hover:scale-[1.02]">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <p className="mt-4 text-sm italic text-gray-500 dark:text-gray-400">
                    Certificate will be uploaded soon.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications