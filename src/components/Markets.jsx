import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const rows = [
  { name: "Bitcoin", ticker: "BTC", price: 67320.44, change: 2.34, cap: "1.3T" },
  { name: "Ethereum", ticker: "ETH", price: 3342.15, change: -1.12, cap: "401B" },
  { name: "Solana", ticker: "SOL", price: 168.55, change: 4.72, cap: "77B" },
  { name: "Cardano", ticker: "ADA", price: 0.58, change: 1.88, cap: "20B" },
  { name: "Avalanche", ticker: "AVAX", price: 39.21, change: -0.44, cap: "14B" },
];

export default function Markets() {
  return (
    <section id="markets" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Market snapshot</h2>
            <p className="text-slate-600">Live prices and 24h changes across top crypto assets.</p>
          </div>
          <button className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">See all assets</button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-12 px-4 py-3 text-xs font-medium text-slate-600">
            <div className="col-span-4">Asset</div>
            <div className="col-span-3">Price</div>
            <div className="col-span-3">24h</div>
            <div className="col-span-2 text-right">Market Cap</div>
          </div>
          {rows.map((r) => (
            <div key={r.ticker} className="grid grid-cols-12 items-center px-4 py-3 border-t border-slate-100">
              <div className="col-span-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100" />
                <div className="font-medium text-slate-900">{r.name} <span className="text-slate-500">{r.ticker}</span></div>
              </div>
              <div className="col-span-3 font-mono text-slate-900">${r.price.toLocaleString()}</div>
              <div className="col-span-3">
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${r.change >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {r.change >= 0 ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                  {Math.abs(r.change)}%
                </span>
              </div>
              <div className="col-span-2 text-right text-slate-900">{r.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
