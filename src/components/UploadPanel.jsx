import { useState } from 'react'

function UploadPanel() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onFileChange = (e) => {
    const f = e.target.files?.[0]
    setFile(f || null)
    setError('')
    setResult(null)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!file) return setError('Please choose an image to search')

    const form = new FormData()
    form.append('file', file)

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch(`${backend}/api/search/upload`, {
        method: 'POST',
        body: form,
      })
      if (!res.ok) throw new Error('Search failed')
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="upload" className="mx-auto mt-14 max-w-5xl px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white">Try it now</h3>
            <p className="mt-1 text-sm text-blue-100/80">Upload an image to see where it appears online. We return sample results in this demo.</p>
          </div>
          <form onSubmit={onSubmit} className="md:col-span-2">
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-3 file:py-2 file:text-white hover:bg-white/15"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Searching…' : 'Search image'}
              </button>
            </div>
            {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
          </form>
        </div>

        {result && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-blue-100/80">Search ID: <span className="font-mono text-white">{result.id}</span></p>
              <p className="text-sm text-blue-100/80">Checked: {result.platforms.join(', ')}</p>
              <p className="text-sm text-blue-100/80">Time: {result.duration_ms}ms</p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {result.matches.map((m, idx) => (
                <a key={idx} href={m.url} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <img src={m.thumbnail} alt="thumb" className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/20" />
                    <div>
                      <p className="font-medium text-white">{m.platform}</p>
                      <p className="text-sm text-blue-100/80 group-hover:text-blue-100/90">{new URL(m.url).hostname}</p>
                    </div>
                    <div className="ml-auto rounded-md bg-gradient-to-br from-cyan-500/20 to-blue-600/20 px-2 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-white/10">
                      {m.similarity}% match
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default UploadPanel
