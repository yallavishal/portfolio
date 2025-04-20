import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import skribb1 from '../assets/skribb1.png'
import skribb2 from '../assets/skribb2.png'
import skribb3 from '../assets/skribb3.png'
import breezy1 from '../assets/breezy1.png'
import breezy2 from '../assets/breezy2.png'
import breezy3 from '../assets/breezy3.png'
import lassikars1 from '../assets/lassikars1.png'
import lassikars2 from '../assets/lassikars2.png'
import lassikars3 from '../assets/lassikars3.png'
import movie1 from '../assets/movie1.png'
import movie2 from '../assets/movie2.png'
import movie3 from '../assets/movie3.png'

const projects = [
  {
    title: 'Skribb - Fullstack Stationery App',
    description:
      'Deployed a platform for Sri Balaji Books, Vizag. Enabled 24/7 ordering, admin dashboard, and in-store pickup.',
    tech: 'React, Tailwind, Redux, Node, Express, MongoDB, Firebase',
    live: 'https://skribb.vercel.app/',
    code: 'https://github.com/mohansaivenkat/Skribb',
    images: [skribb1, skribb2, skribb3],
  },
  {
    title: 'Breezy - CI/CD Dockerized Weather App',
    description:
      'Set up CI/CD with Jenkins and Docker. Pulled code from GitHub and auto-deployed on push.',
    tech: 'Jenkins, GitHub, Node, Docker, EC2/MacOS',
    live: 'https://breezy-nu.vercel.app/',
    code: 'https://github.com/mohansaivenkat/BreezyCICD',
    images: [breezy1, breezy2, breezy3],
  },
  {
    title: 'LassiKars - Meme-Based Concept Website',
    description:
      'Built an interactive meme-based site for car dealerships to engage users through humor.',
    tech: 'HTML, CSS, JS, Bootstrap',
    live: 'https://mohansaivenkat.github.io/LassiKars/INT219_project/',
    code: 'https://github.com/mohansaivenkat/LassiKars',
    images: [lassikars1, lassikars2, lassikars3],
  },
  {
    title: 'MovieSearch - Fullstack Search App',
    description:
      'Movie search app using external APIs for real-time movie queries.',
    tech: 'HTML, CSS, JS, Node, Express, TheMovieDB API',
    live: '#',
    code: 'https://github.com/mohansaivenkat/moviesearchengine',
    images: [movie1, movie2, movie3],
  },
]

const Projects = () => {
    return (
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 overflow-x-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700 flex flex-col"
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="mb-4 rounded-lg overflow-hidden w-full aspect-video" // Added aspect ratio
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                        <img
                          src={img}
                          alt={`Screenshot ${idx + 1}`}
                          className="w-full h-full object-cover rounded-lg" // Changed to object-cover
                          loading="lazy"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
  
                {/* Rest of the content remains same */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-4">
                  {project.tech}
                </p>
                <div className="flex space-x-4 mt-auto">
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline flex items-center gap-1"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.code && project.code !== '#' && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-1"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

export default Projects