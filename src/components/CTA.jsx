export default function CTA() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-sm relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 opacity-20 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to level up your crypto investing?</h3>
              <p className="mt-2 text-slate-600 max-w-xl">Join thousands using Nebula Invest to build smart portfolios with automated risk controls and transparent performance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button className="inline-flex justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition">Create free account</button>
              <button className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium border border-slate-200 shadow-sm hover:bg-slate-50 transition">Book a demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
