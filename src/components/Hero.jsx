import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.6, 0.2])
  const fuseScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.05, 1.15, 1.2])
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -60])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6])

  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden bg-gradient-to-b from-[#07080c] to-[#0b0e14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.08),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.08),transparent_40%)]" />
      </motion.div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6 md:px-8 flex flex-col justify-center">
          <motion.h1
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-center md:text-left text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white/95"
          >
            Command the symbiosis
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-sky-400">Human intuition × AI precision</span>
          </motion.h1>

          <motion.p
            style={{ opacity: titleOpacity }}
            className="mt-6 max-w-2xl text-center md:text-left text-base md:text-lg text-white/70"
          >
            Two powerful intelligences, unified. Purpose-built for global leaders who design the future with calm authority.
          </motion.p>

          <motion.div style={{ scale: fuseScale }} className="mt-10 flex gap-3 justify-center md:justify-start">
            <a href="#experience" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors">Explore the Experience</a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-sky-500 text-black font-semibold shadow-[0_0_40px_rgba(56,189,248,0.25)]">Request Private Access</a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0e14] to-transparent pointer-events-none" />
    </section>
  )
}
