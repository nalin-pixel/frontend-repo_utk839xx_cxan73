import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Recent', href: '#recent' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg"></div>
              <span className="text-lg font-semibold tracking-tight text-white">Veriqo</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-blue-100/90 md:flex">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="transition hover:text-white">
                  {n.label}
                </a>
              ))}
              <a href="#upload" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium text-white shadow hover:from-cyan-400 hover:to-blue-500">
                Try it free
              </a>
            </nav>

            <button
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-blue-100/90 md:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="space-y-2 px-6 pb-6 md:hidden">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-lg border border-white/10 px-4 py-3 text-blue-100/90 hover:text-white">
                  {n.label}
                </a>
              ))}
              <a href="#upload" className="block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center font-medium text-white shadow">
                Try it free
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
