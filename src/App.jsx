import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StorySections from './components/StorySections'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('bg-black', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="min-h-screen bg-[#0b0e14] dark:bg-[#0b0e14] text-white">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <StorySections />
      </main>
      <Footer />
    </div>
  )
}

export default App
