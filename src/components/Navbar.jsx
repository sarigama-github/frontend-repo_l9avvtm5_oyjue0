import { useEffect, useState } from 'react'
import { Menu, Sun, Moon, Shield, Sparkles } from 'lucide-react'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all ${scrolled ? 'backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="relative">
            <span className="absolute inset-0 blur-lg bg-gradient-to-r from-yellow-400/30 to-sky-400/30 rounded-full" />
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-sky-500 shadow-inner shadow-black/30" />
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-white/80" />
            <span className="text-white tracking-wide font-semibold">AI‑Augmented</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#principles" className="hover:text-white transition-colors">Principles</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shadow-sm"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
            <Sparkles className="h-4 w-4" />
            Request Access
          </a>
        </div>
      </div>
    </header>
  )
}
