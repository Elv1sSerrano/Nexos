export default function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-3 py-2 text-center shadow-sm ring-1 ring-slate-100">
      <div className="text-[11px] uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}