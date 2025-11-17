export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] text-white/60 py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} AI‑Augmented. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  )
}
