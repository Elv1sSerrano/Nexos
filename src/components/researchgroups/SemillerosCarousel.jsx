import { ChevronLeft, ChevronRight, Microscope } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import supabase from "../../utils/supabase-client";
import SemilleroCard from "./SemilleroCard";

const researchGroupColumns = "name,description,academic_program,line_investigation,proyects,leader_name,leader_email,logo_url";

export default function SemillerosCarousel() {
  const [semilleros, setSemilleros] = useState([]);
  const [status, setStatus] = useState("loading");
  const trackRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadSemilleros = async () => {
      setStatus("loading");
      const { data, error } = await supabase.from("researchgroups").select(researchGroupColumns);

      if (!isMounted) return;
      if (error) {
        setStatus("error");
        return;
      }

      setSemilleros(data || []);
      setStatus("ready");
    };

    const addSemillero = (event) => {
      const semillero = event.detail;
      if (!semillero) return;
      setSemilleros((current) => [semillero, ...current]);
      setStatus("ready");
    };

    loadSemilleros();
    window.addEventListener("researchgroup:created", addSemillero);
    return () => {
      isMounted = false;
      window.removeEventListener("researchgroup:created", addSemillero);
    };
  }, []);

  const moveTrack = (direction) => {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="mb-8" aria-labelledby="semilleros-title">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="mb-1 text-sm font-medium text-[#616061]">Conoce la comunidad</p>
          <h2 id="semilleros-title" className="flex items-center gap-2 text-xl font-bold tracking-tight sm:text-2xl">
            <Microscope className="h-5 w-5 text-[#611f69]" /> Semilleros de investigación
          </h2>
        </div>
        {status === "ready" && semilleros.length > 0 && (
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => moveTrack(-1)} className="carousel-button" aria-label="Ver semilleros anteriores"><ChevronLeft size={18} /></button>
            <button onClick={() => moveTrack(1)} className="carousel-button" aria-label="Ver más semilleros"><ChevronRight size={18} /></button>
          </div>
        )}
      </div>

      {status === "loading" && <div className="surface-card p-6 text-sm text-[#616061]">Cargando semilleros...</div>}
      {status === "error" && <div className="surface-card p-6 text-sm text-[#616061]">No fue posible cargar los semilleros. Intenta nuevamente.</div>}
      {status === "ready" && semilleros.length === 0 && <div className="surface-card p-6 text-sm text-[#616061]">Aún no hay semilleros registrados.</div>}
      {status === "ready" && semilleros.length > 0 && (
        <div ref={trackRef} className="-mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-3" aria-label="Carrusel de semilleros">
          {semilleros.map((semillero, index) => <SemilleroCard key={`${semillero.name}-${index}`} semillero={semillero} />)}
        </div>
      )}
    </section>
  );
}
