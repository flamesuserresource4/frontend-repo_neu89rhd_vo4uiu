import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                Next-gen crypto portfolios
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Invest in digital assets with confidence
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
                Build diversified crypto portfolios powered by real-time analytics, risk controls, and automated rebalancing.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition">
                  Start investing
                </button>
                <button className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium border border-slate-200 shadow-sm hover:bg-slate-50 transition">
                  View pricing
                </button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-slate-600">
                <div className="text-2xl font-bold text-slate-900">$4.2B+</div>
                <div className="text-sm">in assets tracked by our clients</div>
              </div>
            </div>

            <div className="relative lg:h-[560px] h-[360px]">
              {/* empty column - background Spline showcases visuals */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
