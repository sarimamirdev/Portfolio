import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const SOCIAL_LINKS = {
  email: 'muhammadsarim0864@gmail.com',
  github: 'https://github.com/sarimamirdev',
  linkedin: 'https://www.linkedin.com/in/muhammad-sarim-amir-477b76368',
}
// formspree project url-link
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzepwagp'

// Checks for a properly formed email like name@domain.tld
// Rejects things like "sarim2@gmail" (no TLD) or "sarim2@.com" (empty domain)
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Simple self-contained toast - no extra library needed
function Toast({ message, type, onClose }) {
  if (!message) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border animate-in fade-in slide-in-from-bottom-2 duration-300 ${
        type === 'error'
          ? 'bg-red-950 border-red-800 text-red-200'
          : 'bg-emerald-950 border-emerald-800 text-emerald-200'
      }`}
    >
      {type === 'error' ? (
        <FiAlertCircle className="text-lg flex-shrink-0" />
      ) : (
        <FiCheckCircle className="text-lg flex-shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-xs opacity-70 hover:opacity-100"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState({ message: '', type: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const showToast = (message, type = 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast({ message: '', type: '' }), 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate name
    if (!formData.name.trim()) {
      showToast('Please fill in your name.')
      return
    }

    // Validate email
    if (!formData.email.trim()) {
      showToast('Please fill in your email.')
      return
    }
    if (!isValidEmail(formData.email.trim())) {
      showToast('Please enter a valid email address.')
      return
    }

    // Validate message
    if (!formData.message.trim()) {
      showToast('Please write a message.')
      return
    }

    // All good - send it
    setSubmitting(true)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        showToast("Message sent! I'll get back to you soon.", 'success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        showToast('Something went wrong. Please try again.')
      }
    } catch (error) {
      showToast('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
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
              className="bg-dark border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-dark border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent transition-colors duration-200"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="bg-dark border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={submitting}
              className="bg-accent hover:bg-accentlight disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors duration-200"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: '' })}
      />
    </section>
  )
}

export default Contact
