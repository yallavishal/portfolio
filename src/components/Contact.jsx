import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Contacts
            </h2>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />,
                bg: 'bg-blue-100 dark:bg-blue-900',
                label: 'Email',
                value: 'mohansaivenkat2004@gmail.com',
                href: 'mailto:mohansaivenkat04@gmail.com',
              },
              {
                icon: <FaPhone className="text-2xl text-green-600 dark:text-green-400" />,
                bg: 'bg-green-100 dark:bg-green-900',
                label: 'Phone',
                value: '+91 9014167264',
                href: 'tel:+919876543210',
              },
              {
                icon: <FaMapMarkerAlt className="text-2xl text-red-600 dark:text-red-400" />,
                bg: 'bg-red-100 dark:bg-red-900',
                label: 'Location',
                value: 'Phagwara, Punjab, India',
                href: null,
              },
              {
                icon: <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />,
                bg: 'bg-gray-100 dark:bg-gray-700',
                label: 'GitHub',
                value: 'mohansaivenkat',
                href: 'https://github.com/mohansaivenkat',
              },
              {
                icon: <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400" />,
                bg: 'bg-blue-100 dark:bg-blue-900',
                label: 'LinkedIn',
                value: 'mohansaivenkat',
                href: 'https://linkedin.com/in/mohansaivenkat',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900 px-4 sm:px-6 py-3 sm:py-4 h-28 sm:h-32 flex items-center rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className={`p-2 sm:p-3 rounded-xl ${item.bg} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="ml-4 sm:ml-5">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800 dark:text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Contact