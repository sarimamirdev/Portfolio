import { FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    title: 'Associate Engineering Diploma in Internet of Things',
    institute: 'Applied Technologies Institute (NLC), Pakistan',
    period: 'Expected Graduation: 2027',
    details:
      'Sino-Pak collaborative diploma program with an Academic Exchange Program at Jiangxi Polytechnic University, China.',
  },
  {
    title: 'FSc (Pre-Engineering)',
    institute: 'Higher Secondary Education',
    period: 'Completed',
    details: 'Studied core subjects in Mathematics, Physics, and Chemistry.',
  },
  {
    title: 'Matriculation',
    institute: 'Secondary School Education',
    period: 'Completed',
    details: 'Built foundational academic knowledge across core subjects.',
  },
]

function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-10 bg-darksec/40">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          <span className="text-accent">Education</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full"></div>

        <div className="relative border-l-2 border-slate-800 ml-4">
          {educationData.map((item, index) => (
            <div key={index} className="mb-12 ml-8 last:mb-0">
              <span className="absolute -left-[19px] flex items-center justify-center w-9 h-9 bg-accent rounded-full ring-4 ring-dark">
                <FaGraduationCap className="text-white text-sm" />
              </span>
              <div className="bg-dark border border-slate-800 rounded-xl p-6 hover:border-accent/50 transition-colors duration-300">
                <p className="text-xs text-accent font-medium mb-1">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 mb-2">
                  {item.institute}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education