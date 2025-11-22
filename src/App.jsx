import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Markets from './components/Markets'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Markets />
      <CTA />

      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-950 flex items-center justify-center text-white text-sm font-bold">Ξ</div>
            </div>
            <span className="text-slate-900 font-semibold">Nebula Invest</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Nebula Technologies Inc.</p>
        </div>
      </footer>
    </div>
  )
}

export default App