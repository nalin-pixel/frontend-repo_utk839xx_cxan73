import { useEffect, useState } from 'react'

function Recent() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await fetch(`${backend}/api/search/recent`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchRecent()
  }, [backend])

  return (
    <section id="recent" className="mx-auto mt-14 max-w-7xl px-6">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Recent searches</h3>
          <p className="mt-1 text-sm text-blue-100/80">Latest demo results from this environment.</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl border border-white/10 bg-white/5" />
          ))
        ) : items.length === 0 ? (
          <p className="text-blue-100/80">No recent items yet. Run a search above.</p>
        ) : (
          items.map((it) => (
            <div key={it.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-600/30 ring-1 ring-white/10" />
                <div>
                  <p className="text-sm text-blue-100/80">{it.filename || 'Upload'}</p>
                  <p className="text-xs text-blue-100/70">Platforms: {(it.platforms || []).join(', ')}</p>
                </div>
              </div>
              {it.matches?.length > 0 && (
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {it.matches.slice(0,3).map((m, idx) => (
                    <img key={idx} src={m.thumbnail} alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Recent
