import icono_usuario from "../../../assets/images/users/icono_usuario.png"
import StatPill from "./StatPill";

export default function PeopleCard({ person }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <img
            src={icono_usuario}
            alt={person.name}
            className="h-24 w-24 rounded-full object-cover ring-4 ring-slate-100"
          />
          <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
        </div>

        <h3 className="mt-4 text-base font-semibold text-slate-900">{person.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{person.research_group}</p>
        <p className="mt-1 text-sm font-medium text-purple-600">{person.role}</p>

        <div className="mt-5 grid w-full grid-cols-2 gap-2">
          <StatPill label="Proyectos" value={person.proyects} />
          <StatPill label="Partic." value={person.participations} />          
        </div>                
      </div>
    </div>
  );
}
