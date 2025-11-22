import { Shield, LineChart, TimerReset, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-grade security",
    desc: "Multi-sig custody, hardware isolation, and continuous monitoring keep your assets protected.",
  },
  {
    icon: LineChart,
    title: "Real-time analytics",
    desc: "Track performance, risk, and on-chain signals across your entire portfolio.",
  },
  {
    icon: TimerReset,
    title: "Auto rebalancing",
    desc: "Set your strategy and let our engine keep allocations on target automatically.",
  },
  {
    icon: Sparkles,
    title: "Smart strategies",
    desc: "Thematic bundles and algorithmic strategies built by experts for every risk profile.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-20 -z-0 h-40 bg-gradient-to-b from-slate-900/5 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">Why choose us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to grow your crypto</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A modern platform that blends beautiful UX with serious investing tools.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
