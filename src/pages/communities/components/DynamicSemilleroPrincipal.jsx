import { AtSign, FolderKanban, GraduationCap, Mail, UserRound } from "lucide-react";

function ListCard({ title, icon, value, emptyText }) {
  if (!value) return null;
  const SectionIcon = icon;
  const items = value.split("\n").map((item) => item.trim()).filter(Boolean);
  return (
    <section className="surface-card p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold"><SectionIcon className="h-5 w-5 text-[#611f69]" />{title}</h2>
      {items.length > 1 ? <ul className="mt-4 space-y-2 text-sm leading-6 text-[#454245]">{items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#611f69]" />{item}</li>)}</ul> : <p className="mt-4 text-sm leading-6 text-[#454245]">{items[0] || emptyText}</p>}
    </section>
  );
}

export default function DynamicSemilleroPrincipal({ data }) {
  return (
    <div className="grid gap-5">
      <section className="surface-card p-5 sm:p-6"><p className="mb-2 text-sm font-semibold text-[#611f69]">Acerca del semillero</p><h2 className="text-xl font-bold">Descripción</h2><p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#454245] sm:text-base">{data.description}</p></section>
      <section className="surface-card flex flex-wrap items-center gap-3 p-5"><GraduationCap className="h-6 w-6 text-[#1264a3]" /><div><p className="text-xs font-bold uppercase tracking-wide text-[#616061]">Programa académico</p><p className="mt-1 font-semibold">{data.academic_program}</p></div></section>
      <div className="grid gap-5 lg:grid-cols-2"><ListCard title="Líneas de investigación" icon={AtSign} value={data.line_investigation} /><ListCard title="Proyectos en curso" icon={FolderKanban} value={data.proyects} /></div>
      <section className="surface-card p-5 sm:p-6"><h2 className="text-lg font-bold">Contacto</h2><div className="mt-4 grid gap-4 sm:grid-cols-2"><div className="flex items-center gap-3"><UserRound className="h-5 w-5 text-[#611f69]" /><div><p className="text-xs text-[#616061]">Líder del semillero</p><p className="font-semibold">{data.leader_name}</p></div></div><div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#611f69]" /><div><p className="text-xs text-[#616061]">Correo de contacto</p><a href={`mailto:${data.leader_email}`} className="font-semibold text-[#1264a3] hover:underline">{data.leader_email}</a></div></div></div></section>
    </div>
  );
}
