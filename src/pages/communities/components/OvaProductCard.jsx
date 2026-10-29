import { ExternalLink, Layers } from "lucide-react";

export default function OvaProductCard({ title, duration, url, accent }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="group block h-full rounded-xl border border-[#dce7ef] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#36c5f0]">
      <div className="flex min-h-52 flex-col justify-between rounded-lg p-4" style={{ backgroundImage: `repeating-linear-gradient(45deg, #ffffff, #ffffff 10px, ${accent} 10px, ${accent} 20px)` }}>
        <div className="flex items-center justify-between gap-2"><span className="rounded-md bg-[#1f618d] px-2.5 py-1 text-xs font-bold text-white">{duration}</span><Layers className="h-5 w-5 text-[#1f618d]" /></div>
        <div className="rounded-md bg-white/95 p-3 text-center"><h3 className="text-base font-bold leading-5 text-[#1d5aa3]">{title}</h3><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#1264a3] opacity-0 transition group-hover:opacity-100">Abrir OVA <ExternalLink size={14} /></span></div>
      </div>
    </a>
  );
}
