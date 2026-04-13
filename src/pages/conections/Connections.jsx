import { useEffect, useMemo, useState } from "react";
import { Search, Users, Link2, Microscope } from "lucide-react";
import { NavLink } from "react-router-dom";
import supabase from "../../utils/supabase-client";
import PeopleCard from "./components/PeopleCard";

function SemilleroCard({ semillero }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-col text-left">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50">
          <Microscope className="h-6 w-6 text-purple-700" />
        </div>

        <h3 className="text-lg font-semibold text-slate-900">
          {semillero.name}
        </h3>

        {semillero.theme && (
          <p className="mt-1 text-sm font-medium text-purple-600">
            {semillero.theme}
          </p>
        )}

        <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
          {semillero.description}
        </p>

        {semillero.external_link && (
          <a
            href={semillero.external_link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:underline"
          >
            <Link2 className="h-4 w-4" />
            Material externo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Connections() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [researchGroups, setResearchGroups] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingGroups, setLoadingGroups] = useState(true);

  useEffect(() => {
    fetchUsers();
    fetchResearchGroups();
  }, []);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.log("No se pudo traer todas las personas:", error.message);
    } else {
      setUsers(data || []);
    }

    setLoadingUsers(false);
  };

  const fetchResearchGroups = async () => {
    setLoadingGroups(true);
    const { data, error } = await supabase.from("researchgroups").select("*");

    if (error) {
      console.log("No se pudieron traer los semilleros:", error.message);
    } else {
      setResearchGroups(data || []);
    }

    setLoadingGroups(false);
  };

  const q = query.toLowerCase().trim();

  const filteredUsers = useMemo(() => {
    if (!q) return users;

    return users.filter((item) => {
      const name = item.name || "";
      const role = item.role || "";
      const group = item.research_group || "";

      return (
        name.toLowerCase().includes(q) ||
        role.toLowerCase().includes(q) ||
        group.toLowerCase().includes(q)
      );
    });
  }, [query, users]);

  const filteredGroups = useMemo(() => {
    if (!q) return researchGroups;

    return researchGroups.filter((item) => {
      const name = item.name || "";
      const description = item.description || "";
      const theme = item.theme || "";

      return (
        name.toLowerCase().includes(q) ||
        description.toLowerCase().includes(q) ||
        theme.toLowerCase().includes(q)
      );
    });
  }, [query, researchGroups]);

  const totalResults = filteredUsers.length + filteredGroups.length;

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white/70 p-4 shadow-[0_20px_70px_rgba(71,85,105,0.15)] backdrop-blur md:p-6 lg:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Comunidad registrada
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Busca personas y semilleros desde una sola vista.
            </p>
          </div>

          <div className="flex flex-row gap-3 sm:gap-6">
            <NavLink to="vincularse">
              <div className="rounded-xl border-2 border-purple-700 p-2 text-purple-700 transition-all duration-300 hover:bg-purple-700 hover:text-white">
                Vincularse
              </div>
            </NavLink>

            <NavLink to="registrar-semillero">
              <div className="rounded-xl border-2 border-purple-700 p-2 text-purple-700 transition-all duration-300 hover:bg-purple-700 hover:text-white">
                Registrar semillero
              </div>
            </NavLink>

            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
              <Users className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-slate-700">
                {totalResults} registros
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar personas o semilleros..."
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Personas registradas
            </h3>
            <span className="text-sm text-slate-500">
              {filteredUsers.length} resultados
            </span>
          </div>

          {loadingUsers ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500">
              Cargando personas...
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredUsers.map((person) => (
                  <PeopleCard key={person.id} person={person} />
                ))}
              </div>

              {filteredUsers.length === 0 && (
                <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500">
                  No se encontraron personas con la búsqueda actual.
                </div>
              )}
            </>
          )}
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Semilleros registrados
            </h3>
            <span className="text-sm text-slate-500">
              {filteredGroups.length} resultados
            </span>
          </div>

          {loadingGroups ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500">
              Cargando semilleros...
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredGroups.map((semillero) => (
                  <SemilleroCard key={semillero.id} semillero={semillero} />
                ))}
              </div>

              {filteredGroups.length === 0 && (
                <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500">
                  No se encontraron semilleros con la búsqueda actual.
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}