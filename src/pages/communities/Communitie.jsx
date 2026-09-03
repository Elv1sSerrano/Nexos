import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Mail, Microscope, UserRound } from "lucide-react";
import Tab from "../../components/ui/Tab";
import { tabs } from "./constants";
import Account from "../../components/ui/Account";
import { semilleros } from "../../data";
import supabase from "../../utils/supabase-client";

const groupColumns = "id,name,description,academic_program,line_investigation,proyects,leader_name,leader_email,logo_url";

function DynamicSidebar({ data }) {
  return <aside className="surface-card h-fit p-5"><h2 className="text-lg font-bold">Información de contacto</h2><div className="mt-5 space-y-4 text-sm"><div className="flex gap-3"><Microscope className="h-5 w-5 shrink-0 text-[#611f69]" /><div><p className="text-xs text-[#616061]">Programa académico</p><p className="mt-1 font-semibold">{data.academic_program}</p></div></div><div className="flex gap-3"><UserRound className="h-5 w-5 shrink-0 text-[#611f69]" /><div><p className="text-xs text-[#616061]">Líder del semillero</p><p className="mt-1 font-semibold">{data.leader_name}</p></div></div><div className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-[#611f69]" /><div><p className="text-xs text-[#616061]">Correo de contacto</p><a className="mt-1 block break-all font-semibold text-[#1264a3] hover:underline" href={`mailto:${data.leader_email}`}>{data.leader_email}</a></div></div></div></aside>;
}

function StaticSidebar({ data }) {
  return <aside className="space-y-7"><div><h3 className="mb-3 text-xl font-semibold">Instituciones</h3><div className="flex flex-col gap-2">{data.institutions?.map((nexo) => <Account key={nexo.label} label={nexo.label} image={nexo.image} />)}</div></div><div><h3 className="mb-3 text-xl font-semibold">Miembros</h3><div className="flex flex-col gap-3">{data.participants?.map((participant) => <Account key={participant.id} label={participant.name} image={participant.Picture} />)}</div></div></aside>;
}

export default function Communitie() {
  const { semilleroId } = useParams();
  const staticData = semilleros[semilleroId];
  const [status, setStatus] = useState(staticData ? "ready" : "loading");
  const [data, setData] = useState(staticData || null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    if (staticData) { setData(staticData); setStatus("ready"); return; }
    let isMounted = true;
    const loadGroup = async () => {
      setStatus("loading");
      const { data: group, error } = await supabase.from("researchgroups").select(groupColumns).eq("id", semilleroId).maybeSingle();
      if (!isMounted) return;
      if (error) { setStatus("error"); return; }
      if (!group) { setStatus("not-found"); return; }
      setData({ ...group, isDynamic: true });
      setStatus("ready");
    };
    loadGroup();
    return () => { isMounted = false; };
  }, [semilleroId, staticData]);

  if (status === "loading") return <div className="surface-card mx-auto max-w-3xl p-8 text-center text-[#616061]">Cargando información del semillero...</div>;
  if (status === "error") return <div className="surface-card mx-auto max-w-3xl p-8 text-center text-[#616061]">No fue posible cargar la información del semillero.</div>;
  if (status === "not-found" || !data) return <div className="surface-card mx-auto max-w-3xl p-8 text-center text-[#616061]">No se encontró el semillero que estás buscando.</div>;

  const isDynamic = data.isDynamic;
  const logo = isDynamic ? data.logo_url : data.logo;

  return (
    <section className="mx-auto max-w-7xl pb-8">
      <div className={`relative h-40 overflow-hidden rounded-2xl sm:h-52 ${isDynamic ? "bg-[radial-gradient(circle_at_20%_20%,#8c4b96,transparent_35%),linear-gradient(120deg,#3f0e40,#611f69_50%,#1264a3)]" : "bg-[#f5eef7]"}`}>
        {!isDynamic && <img src={data.banner} alt="" className="h-full w-full object-cover" />}
      </div>
      <div className="relative -mt-12 px-4 sm:-mt-16 sm:px-8"><div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-[#f5eef7] shadow-md sm:h-32 sm:w-32">{logo && !logoError ? <img src={logo} alt={`Logo de ${data.name}`} className="h-full w-full object-cover" onError={() => setLogoError(true)} /> : <Microscope className="h-10 w-10 text-[#611f69]" />}</div></div>
      <div className="mt-5 grid gap-6 px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="min-w-0"><div className="flex flex-col gap-4 border-b border-[#dedede] pb-5 sm:flex-row sm:items-start sm:justify-between"><div><h1 className="text-2xl font-bold tracking-tight sm:text-4xl">{data.name}</h1>{isDynamic && <p className="mt-2 text-sm font-semibold text-[#1264a3]">{data.academic_program}</p>}</div><div className="flex gap-2"><button className="rounded-md bg-[#611f69] px-4 py-2 text-sm font-semibold text-white">Seguir</button><button className="rounded-md border border-[#777] px-4 py-2 text-sm font-semibold text-[#454245]">Mensaje</button></div></div><nav className="-mx-4 overflow-x-auto border-b border-[#dedede] px-4 sm:mx-0 sm:px-0"><ul className="flex min-w-max gap-5 py-3 sm:gap-7">{tabs.map((tab) => <Tab key={tab.name} name={tab.name} />)}</ul></nav><div className="pt-5"><Outlet context={data} /></div></div>
        {isDynamic ? <DynamicSidebar data={data} /> : <StaticSidebar data={data} />}
      </div>
    </section>
  );
}
