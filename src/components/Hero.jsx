import profilePic from '../assets/pp.jpg'

const Hero = () => {
    return (
        <section
            id="hero"
            className="py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-center px-6 gap-10 bg-white dark:bg-gray-800 transition-colors duration-500"
        >
            {/* Text Section */}
            <div className="text-center md:text-left max-w-xl transition-colors duration-500">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-500">
                    Hi, I'm <span className="text-blue-500">Vishal Yalla</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-500">
                    A passionate Computer Science student with a love for web development and building user-friendly applications.
                </p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <a
                        href="https://github.com/yallavishal/mycv/blob/main/vishalCV.pdf" target="_blank"
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base"
                    >
                        Click here for my Resume
                    </a>
                    <a
                        href="#contact"
                        className="border border-blue-500 text-blue-500 px-5 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-blue-500 transition-all duration-500">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}

export default Hero