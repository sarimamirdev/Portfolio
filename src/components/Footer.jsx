import { FiArrowUp } from 'react-icons/fi'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 text-center sm:text-left">
          © {new Date().getFullYear()} Muhammad Sarim. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors duration-200"
        >
          Back to Top <FiArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer