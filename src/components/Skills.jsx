import {
    FaPython, FaJava, FaAndroid, FaHtml5, FaCss3Alt, FaJs,
    FaReact, FaGitAlt, FaGithub,
  } from 'react-icons/fa'
  import {
    SiKotlin, SiC, SiTailwindcss, SiOpencv, SiPycharm,
  } from 'react-icons/si'
  import { TbCpu, TbAntenna, TbDeviceDesktopCode } from 'react-icons/tb'
  import { MdOutlineStorage } from 'react-icons/md'
  import { VscVscode } from 'react-icons/vsc'
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Kotlin', icon: <SiKotlin /> },
        { name: 'C', icon: <SiC /> },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      title: 'Android Development',
      skills: [
        { name: 'Android Studio', icon: <FaAndroid /> },
        { name: 'XML Layouts', icon: <TbDeviceDesktopCode /> },
        { name: 'Material Design', icon: <FaAndroid /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'REST APIs', icon: <TbDeviceDesktopCode /> },
        { name: 'Database Integration', icon: <MdOutlineStorage /> },
      ],
    },
    {
      title: 'Embedded & IoT',
      skills: [
        { name: 'STM32', icon: <TbCpu /> },
        { name: 'SCM', icon: <TbCpu /> },
        { name: 'ZigBee', icon: <TbAntenna /> },
        { name: 'Embedded Systems', icon: <TbCpu /> },
        { name: 'Microcontrollers', icon: <TbCpu /> },
        { name: 'Wireless Communication', icon: <TbAntenna /> },
      ],
    },
    {
      title: 'Computer Vision',
      skills: [
        { name: 'OpenCV', icon: <SiOpencv /> },
        { name: 'Image Recognition', icon: <SiOpencv /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'VS Code', icon: <VscVscode /> },
        { name: 'PyCharm', icon: <SiPycharm /> },
        { name: 'Keil', icon: <TbCpu /> },
        { name: 'Proteus', icon: <TbCpu /> },
        { name: 'STM32CubeMX', icon: <TbCpu /> },
      ],
    },
  ]
  
  function Skills() {
    return (
      <section id="skills" className="py-24 px-6 md:px-10 bg-darksec/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full"></div>
  
          <div className="space-y-12">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-slate-200 mb-5">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-3 bg-dark border border-slate-800 rounded-xl py-6 px-3 hover:border-accent hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <span className="text-3xl text-accent group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-sm text-slate-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills