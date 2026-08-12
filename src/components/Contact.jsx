import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const SOCIAL_LINKS = {
  email: 'muhammadsarim0864@gmail.com',
  github: 'https://github.com/sarimamirdev',
  linkedin: 'https://www.linkedin.com/in/muhammad-sarim-amir-477b76368',
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-slate-400 leading-relaxed">
              I'm currently open to internship and entry-level opportunities.
              Feel free to reach out — I'll get back to you as soon as
              possible.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors duration-200"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-darksec border border-slate-800">
                  <FiMail />
                </span>
                {SOCIAL_LINKS.email}
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors duration-200"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-darksec border border-slate-800">
                  <FiGithub />
                </span>
                github.com/sarimamirdev
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors duration-200"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-darksec border border-slate-800">
                  <FiLinkedin />
                </span>
                linkedin.com/in/muhammad-sarim-amir
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-darksec border border-slate-800 rounded-2xl p-8 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-dark border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-dark border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent transition-colors duration-200"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="bg-dark border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-accent hover:bg-accentlight text-white font-medium py-3 rounded-lg transition-colors duration-200"
            >
              {submitted ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact