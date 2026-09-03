import { Microscope } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SemilleroCard({ semillero }) {
  const [imageError, setImageError] = useState(false);
  const hasLogo = Boolean(semillero.logo_url) && !imageError;

  return (
    <NavLink to={`/app/semillero/${semillero.id}`} className="group flex w-72 shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-[#e3e3e3] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#36c5f0] sm:w-80">
      <div className="flex h-28 items-center justify-center bg-[#f5eef7] sm:h-32">
        {hasLogo ? (
          <img
            src={semillero.logo_url}
            alt={`Logo de ${semillero.name}`}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-[#611f69]">
            <Microscope className="h-8 w-8" />
            <span className="text-xs font-semibold">Semillero Nexos</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#1264a3]">
          {semillero.academic_program}
        </p>
        <h3 className="line-clamp-1 text-base font-bold text-[#1d1c1d]">{semillero.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-5 text-[#616061]">{semillero.description}</p>
      </div>
    </NavLink>
  );
}
