function About() {
    return (
      <section id="about" className="py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-10 rounded-full"></div>
  
          <div className="bg-darksec border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-colors duration-300">
            <p className="text-slate-300 leading-relaxed text-center md:text-left">
              I am an aspiring Software and IoT Engineer with a strong interest
              in Android Development, Python, Backend Development, Embedded
              Systems, Artificial Intelligence, and Data Science. I enjoy
              building practical software solutions, learning modern
              technologies, and continuously improving my skills through
              real-world projects. I am currently seeking internship and
              entry-level software development opportunities.
            </p>
  
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-center">
              <div>
                <p className="text-2xl font-bold text-accent">5+</p>
                <p className="text-sm text-slate-400">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">4+</p>
                <p className="text-sm text-slate-400">Languages</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">IoT</p>
                <p className="text-sm text-slate-400">Specialization</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">PK</p>
                <p className="text-sm text-slate-400">Based in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About