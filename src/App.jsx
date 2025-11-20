import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import UploadPanel from './components/UploadPanel'
import Recent from './components/Recent'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <UploadPanel />
        <Recent />

        <footer className="mx-auto mt-20 max-w-7xl px-6 pb-16 text-blue-100/70">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
            <p>© {new Date().getFullYear()} Veriqo. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
