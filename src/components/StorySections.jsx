import { motion, useScroll, useTransform } from 'framer-motion'

export default function StorySections() {
  const { scrollYProgress } = useScroll()
  const humanGlow = useTransform(scrollYProgress, [0.05, 0.3], [0.15, 0.02])
  const aiGlow = useTransform(scrollYProgress, [0.2, 0.45], [0.15, 0.02])
  const fusionGlow = useTransform(scrollYProgress, [0.45, 0.7], [0.2, 0.04])

  return (
    <div className="relative bg-[#0b0e14] text-white">
      <section id="vision" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">A higher state of intelligence</h2>
              <p className="mt-6 text-white/70">Leadership amplified by a deliberate union: human judgment and machine precision working in synchronized flow. Not competition—symbiosis.</p>
            </div>
            <div className="md:col-span-6">
              <motion.div style={{ boxShadow: humanGlow.to(v=>`0 0 120px rgba(250,204,21,${v})`) }} className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 backdrop-blur-lg">
                <div className="h-48 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-500/10" />
                <p className="mt-4 text-sm text-white/70">Human perspective — warm, intuitive, contextual. We preserve executive intent while removing noise.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <motion.div style={{ boxShadow: aiGlow.to(v=>`0 0 140px rgba(56,189,248,${v})`) }} className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 backdrop-blur-lg">
                <div className="h-48 rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-500/10" />
                <p className="mt-4 text-sm text-white/70">AI perspective — precise, composable, tireless. Orchestrated intelligence aligned to your governance and risk posture.</p>
              </motion.div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Calm control, not chaos</h2>
              <p className="mt-6 text-white/70">A premium environment that translates intent into action with confidence. Smooth motion, no drama.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">The fusion</h2>
              <p className="mt-6 text-white/70">At the moment of union, a new construct emerges: knowledge composed live from human+AI synthesis.</p>
            </div>
            <div className="md:col-span-6">
              <motion.div style={{ boxShadow: fusionGlow.to(v=>`0 0 180px rgba(147,197,253,${v})`) }} className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 backdrop-blur-lg">
                <div className="h-48 rounded-xl bg-gradient-to-br from-yellow-400/20 via-white/10 to-sky-500/20" />
                <p className="mt-4 text-sm text-white/70">The output is not generic AI. It’s executive-grade intelligence, explainable and controllable.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-20">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Private Beta Access</h3>
                <p className="mt-2 text-white/70">Exclusively for global leaders. Limited seats.</p>
              </div>
              <form className="flex w-full md:w-auto gap-3">
                <input type="email" placeholder="Work email" className="flex-1 md:w-80 rounded-full bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500/40" />
                <button type="submit" className="rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-sky-500 text-black font-semibold">Request Invite</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
