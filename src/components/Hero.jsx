import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

const SOCIAL_LINKS = {
  github: 'https://github.com/sarimamirdev',
  linkedin: 'https://www.linkedin.com/in/muhammad-sarim-amir-477b76368',
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-accent font-medium tracking-wide mb-4 animate-pulse">
          Hello, I'm
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Muhammad Sarim
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-6">
          Android Developer <span className="text-accent">|</span> IoT Developer{' '}
          <span className="text-accent">|</span> Python Developer
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I am an aspiring Software and IoT Engineer passionate about Android
          Development, Python, Backend Development, Embedded Systems, AI, and
          Data Science — currently seeking internship and entry-level
          opportunities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accentlight text-white font-medium transition-all duration-200 hover:scale-105"
          >
            <FiDownload /> Resume
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-accent hover:text-accent text-slate-300 font-medium transition-all duration-200 hover:scale-105"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-accent hover:text-accent text-slate-300 font-medium transition-all duration-200 hover:scale-105"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-accent hover:text-accent text-slate-300 font-medium transition-all duration-200 hover:scale-105"
          >
            <FiMail /> Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero