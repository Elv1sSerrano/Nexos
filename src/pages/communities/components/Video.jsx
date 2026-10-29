import { ExternalLink, PlayCircle, Video as VideoIcon } from "lucide-react";

export default function Video({ image, thumbnail, title, author, url }) {
  const content = (
    <article className={`group flex overflow-hidden rounded-xl border border-[#e3d8f3] bg-white shadow-sm transition ${url ? "hover:border-[#b987c0] hover:shadow-md" : ""}`}>
      <div className="relative aspect-video w-40 shrink-0 overflow-hidden bg-[#3f0e40] sm:w-56">
        <img src={thumbnail || image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 grid place-items-center"><PlayCircle className="h-12 w-12 text-white drop-shadow-lg transition group-hover:scale-110" /></div>
        {url && <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white"><VideoIcon size={13} />YouTube</span>}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center p-4"><h2 className="line-clamp-2 text-base font-bold leading-6 text-[#1d1c1d] sm:text-lg">{title}</h2><div className="mt-3 flex items-center justify-between gap-2"><p className="text-sm text-[#616061]">{author}</p>{url && <ExternalLink className="h-4 w-4 shrink-0 text-[#1264a3]" />}</div></div>
    </article>
  );

  return url ? <a href={url} target="_blank" rel="noreferrer" aria-label={`Ver ${title} en YouTube`}>{content}</a> : content;
}
