import { FaCertificate, FaUniversity, FaAws, FaCode } from 'react-icons/fa'

const certifications = [
  {
    title: 'Cloud Computing Foundations',
    provider: 'NPTEL via Swayam',
    duration: 'Since Jan, 2025',
    link: '',
    icon: <FaUniversity className="text-xl text-indigo-500" />,
  },
  {
    title: 'DevOps & Software Engineering',
    provider: 'IBM via Coursera',
    duration: 'Aug, 2024 - Nov, 2024',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/ZZNN6FALNU4L',
    icon: <FaAws className="text-xl text-purple-500" />,
  },
  {
    title: 'Full Stack Web Development (MERN)',
    provider: 'CipherSchools',
    duration: 'May, 2024 - July, 2024',
    link: 'https://www.cipherschools.com/certificate/preview?id=66a6b75a938f3ef9dda7b666',
    icon: <FaCode className="text-xl text-pink-500" />,
  },
]

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Certification & Certificates
        </h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex items-center gap-3">
                  {/* <FaCertificate className="text-xl text-yellow-500" /> */}
                  {cert.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {cert.provider}
                    </p>
                  </div>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.duration}
                </div>
              </div>

              {cert.link && (
                <div className="mt-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications