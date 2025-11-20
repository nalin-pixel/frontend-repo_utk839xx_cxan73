import { ShieldCheck, Search, Sparkles, Upload, Clock, Globe2 } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <Icon className="h-6 w-6 text-cyan-300" />
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-blue-100/80">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    { icon: Upload, title: 'Upload or paste URL', desc: 'Drop an image or paste a link to start a search instantly.' },
    { icon: Search, title: 'Reverse search engine', desc: 'Cross-check across major social platforms and the open web.' },
    { icon: ShieldCheck, title: 'Trust & safety', desc: 'Identify impersonators and spoofed identities with confidence.' },
    { icon: Clock, title: 'Fast results', desc: 'Optimized pipeline delivers matches in seconds, not minutes.' },
    { icon: Globe2, title: 'Global coverage', desc: 'International platforms and public sources included.' },
    { icon: Sparkles, title: 'AI ranking', desc: 'Similarity scores help you judge how close each match is.' },
  ]

  return (
    <section id="features" className="relative mx-auto mt-10 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((f) => (
          <Feature key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}

export default Features
