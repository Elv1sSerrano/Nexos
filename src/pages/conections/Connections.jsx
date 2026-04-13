import { useEffect, useMemo, useState } from "react";
import { Search, ChevronDown, Users} from "lucide-react";
import { NavLink } from "react-router-dom";
import icono_usuario from "../../assets/images/users/icono_usuario.png"
import supabase from "../../utils/supabase-client";

function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-3 py-2 text-center shadow-sm ring-1 ring-slate-100">
      <div className="text-[11px] uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function PeopleCard({ person }) {
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

export default function Connections() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("personas");
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const {data, error} = await supabase.from("users").select("*")
    if(error) {
      console.log("No se pudo traer todas las personas" + error.message)
    } else {
      setUsers(data)
    }
  }

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return users;

    return users.filter((item) => {
      if (mode === "personas") {
        return (
          item.name.toLowerCase().includes(q) ||
          item.role.toLowerCase().includes(q) ||
          item.semillero.toLowerCase().includes(q)
        );
      }

      return item.semillero.toLowerCase().includes(q) || item.name.toLowerCase().includes(q);
    });
  }, [query, mode, users]);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white/70 p-4 shadow-[0_20px_70px_rgba(71,85,105,0.15)] backdrop-blur md:p-6 lg:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>            
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Personas registradas</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Busca personas o semilleros.
            </p>
          </div>

          <div className="flex flex-row gap-6">      
            <NavLink to="vincularse">
              <div className="transition-all duration-300 p-2 border-2 border-purple-700 text-purple-700 rounded-xl hover:bg-purple-700 hover:text-white">
                Vincularse
              </div>              
            </NavLink>      

            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
              <Users className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-slate-700">{filtered.length} registros</span>
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_220px]">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={mode === "personas" ? "Buscar personas..." : "Buscar semilleros..."}
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="relative">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="h-full w-full appearance-none rounded-2xl bg-white px-4 py-3 pr-10 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 outline-none"
            >
              <option value="personas">Buscar personas</option>
              <option value="semilleros">Buscar semillero</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>        

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((person) => (
            <PeopleCard key={person.id} person={person} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500">
            Cargando resultados ...
          </div>
        )}
      </div>
    </div>
  );
}
