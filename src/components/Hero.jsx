import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.25),rgba(56,189,248,0)_60%),radial-gradient(50%_50%_at_100%_50%,rgba(59,130,246,0.25),rgba(59,130,246,0)_60%),radial-gradient(50%_50%_at_0%_50%,rgba(99,102,241,0.25),rgba(99,102,241,0)_60%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div className="relative z-10 py-10 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-100/90">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            AI-powered reverse image search
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Verify images across social media in seconds.
          </h1>
          <p className="mt-4 max-w-lg text-blue-100/90 md:text-lg">
            Veriqo finds where an image appears on the web and social platforms, helping you validate identity, trace virality, and fight impersonation.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#upload" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center font-medium text-white shadow hover:from-cyan-400 hover:to-blue-500">
              Try Veriqo free
            </a>
            <a href="#features" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-center font-medium text-white/90 hover:bg-white/10">
              See how it works
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-blue-100/70 md:max-w-sm">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="font-semibold text-white">50ms</p>
              <p>avg match time</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="font-semibold text-white">5+</p>
              <p>platforms</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="font-semibold text-white">99.9%</p>
              <p>uptime</p>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[560px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-10 -z-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
