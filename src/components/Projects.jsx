import { useState } from 'react'
import { FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const projects = [
  {
    title: 'STM32 Multi-Mode Running Light System',
    description:
      'An STM32-based multi-mode LED controller with button input and HAL library in C.',
    images: [
      '/projects/project1/img1.jpeg',
      '/projects/project1/img2.jpeg',
      '/projects/project1/img3.jpeg',
      '/projects/project1/img4.jpeg',
      '/projects/project1/img5.jpeg',
    ],
    tech: ['Embedded C', 'STM32CubeMX', 'Keil MDK-ARM', 'STM32F103C8T6', 'STM32 HAL'],
    github: 'https://github.com/sarimamirdev/STM32-MultiMode-LED-Running-Light',
  },
  {
    title: 'CC2530 Wireless Light Monitoring System',
    description:
      'A CC2530 wireless light sensor system with BasicRF communication and threshold LED control.',
    images: [
      '/projects/project2/img1.jpeg',
      '/projects/project2/img2.jpeg',
      '/projects/project2/img3.jpeg',
    ],
    tech: ['Embedded C', 'CC2530', 'BasicRF', 'UART', 'IAR Embedded Workbench', 'ZigBee'],
    github: 'https://github.com/sarimamirdev/CC2530-Wireless-Light-Monitoring-System',
  },
  {
    title: 'Flask Student Attendance Management System',
    description:
      'A Flask attendance system with login, student management, tracking, and dashboard on SQLite.',
    images: [
      '/projects/project3/img1.jpeg',
      '/projects/project3/img2.jpeg',
      '/projects/project3/img3.jpeg',
      '/projects/project3/img4.jpeg',
      '/projects/project3/img5.jpeg',
    ],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/sarimamirdev/attendance-system-flask',
  },
  {
    title: 'Flask E-Commerce Shopping Website',
    description:
      'A Flask-based e-commerce site with authentication, cart, and order processing using SQLite.',
    images: [
      '/projects/project4/login.png',
      '/projects/project4/home.png',
      '/projects/project4/products.png',
      '/projects/project4/cart.png',
      '/projects/project4/checkout.png',
    ],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'HTML/CSS', 'Jinja2'],
    github: 'https://github.com/sarimamirdev/flask-ecommerce-app',
  },
  {
    title: 'STM32 Serial Port Redirection and LED Control System',
    description:
      'An STM32-based UART communication system with serial redirection for command-controlled LED operation.',
    images: [
      '/projects/project5/img1.jpeg',
      '/projects/project5/img2.jpeg',
      '/projects/project5/img3.jpeg',
    ],
    tech: ['Embedded C', 'STM32CubeMX', 'Keil MDK-ARM', 'STM32F103VET6', 'STM32 HAL', 'UART'],
    github: 'https://github.com/sarimamirdev/stm32-uart-led-controller',
  },
]

// One card = one project, manages its own image index
function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0)
  const hasMultiple = project.images.length > 1

  const prevImage = (e) => {
    e.preventDefault()
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const nextImage = (e) => {
    e.preventDefault()
    setCurrent((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-darksec border border-slate-800 rounded-2xl overflow-hidden hover:border-accent/60 hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Image carousel */}
      <div className="relative h-44 bg-slate-800 flex items-center justify-center overflow-hidden group">
        <img
          src={project.images[current]}
          alt={`${project.title} screenshot ${current + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.style.display = 'none'
            e.target.parentElement.querySelector('.fallback-text')?.classList.remove('hidden')
          }}
        />
        <span className="fallback-text hidden text-slate-500 text-sm absolute">
          Project Screenshot
        </span>

        {hasMultiple && (
          <>
            {/* Prev / Next arrows - only show on hover */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-accent"
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-accent"
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrent(index)
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    current === index ? 'bg-accent w-4' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accentlight border border-accent/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Code - links straight to the GitHub repo in a new tab */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-lg bg-accent hover:bg-accentlight text-white transition-colors duration-200 w-full"
        >
          <FiGithub /> View Code
        </a>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          My <span className="text-accent">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
