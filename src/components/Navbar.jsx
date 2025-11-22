import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink = (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
      <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
      <a href="#markets" className="text-slate-300 hover:text-white transition">Markets</a>
      <a href="#security" className="text-slate-300 hover:text-white transition">Security</a>
      <a href="#pricing" className="text-slate-300 hover:text-white transition inline-flex items-center gap-1">More <ChevronDown className="w-4 h-4" /></a>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-slate-950 flex items-center justify-center text-white font-bold">Ξ</div>
              </div>
              <span className="text-white font-semibold tracking-tight">Nebula Invest</span>
            </div>

            <nav className="hidden md:block">{navLink}</nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-slate-200 hover:text-white">Sign in</button>
              <button className="px-4 py-2 text-sm rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Get started</button>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="pt-2 border-t border-white/10">{navLink}</div>
              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-2 text-sm text-slate-200 hover:text-white">Sign in</button>
                <button className="px-4 py-2 text-sm rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Get started</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
