import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Link, useOutletContext, useParams } from "react-router-dom";

export default function CommunityEvent() {
  const data = useOutletContext();
  const { eventId } = useParams();
  const event = data.events?.find((item) => item.id === eventId);
  const [selectedVideo, setSelectedVideo] = useState(0);

  if (!event) return <div className="surface-card p-8 text-center text-sm text-[#616061]">No se encontró el evento solicitado.</div>;
  const activePresentation = event.presentations?.[selectedVideo];

  return (
    <section className="mx-auto max-w-5xl">
      <Link to="../../principal" relative="path" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1264a3] hover:underline"><ArrowLeft size={16} />Volver a la comunidad</Link>
      <div className="overflow-hidden rounded-2xl bg-[#3f0e40] text-white shadow-sm"><img src={event.image} alt="" className="h-44 w-full object-cover opacity-65 sm:h-64" /><div className="-mt-20 relative p-5 sm:-mt-24 sm:p-8"><p className="mb-2 text-sm font-semibold text-[#e7c9eb]">Eventos y proyectos</p><h1 className="text-2xl font-bold tracking-tight sm:text-4xl">{event.title}</h1><p className="mt-3 max-w-3xl text-sm leading-6 text-white/85 sm:text-base">{event.description}</p></div></div>

      {activePresentation && <section className="surface-card mt-6 overflow-hidden p-4 sm:p-6"><div className="aspect-video overflow-hidden rounded-xl bg-black"><ReactPlayer src={activePresentation.url} controls width="100%" height="100%" /></div><div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><p className="text-xs font-bold uppercase tracking-wide text-[#611f69]">Reproduciendo</p><h2 className="mt-1 text-lg font-bold sm:text-xl">{activePresentation.title}</h2><p className="mt-2 text-sm leading-6 text-[#616061]">{activePresentation.description}</p></div><a href={activePresentation.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#1264a3] hover:underline">Ver en YouTube <ExternalLink size={16} /></a></div></section>}

      <section className="mt-8"><div className="mb-4"><p className="text-sm font-semibold text-[#611f69]">Socialización de proyectos</p><h2 className="text-xl font-bold sm:text-2xl">Ponencias y videos</h2></div><div className="grid gap-4 sm:grid-cols-2"><div className="space-y-2">{event.presentations?.map((presentation, index) => <button key={presentation.url} type="button" onClick={() => setSelectedVideo(index)} className={`w-full rounded-xl border p-4 text-left transition ${selectedVideo === index ? "border-[#611f69] bg-[#f8f0f9] shadow-sm" : "border-[#e2e2e2] bg-white hover:border-[#b987c0]"}`}><div className="flex gap-3"><PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#611f69]" /><div><h3 className="text-sm font-bold leading-5">{presentation.title}</h3><p className="mt-1 line-clamp-2 text-xs leading-5 text-[#616061]">{presentation.description}</p></div></div></button>)}</div><aside className="surface-card sticky top-20 hidden h-fit p-5 sm:block"><h3 className="font-bold">Tech 23</h3><p className="mt-2 text-sm leading-6 text-[#616061]">Selecciona una ponencia para ver su video y conocer el proyecto presentado.</p><p className="mt-4 text-sm font-semibold text-[#1264a3]">{event.presentations?.length || 0} videos disponibles</p></aside></div></section>
    </section>
  );
}
