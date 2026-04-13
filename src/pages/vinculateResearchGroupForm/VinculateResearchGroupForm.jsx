import { useState } from "react";
import { toast } from "react-toastify";
import {
  Microscope,
  FileText,
  Link2,
  Tag,  
} from "lucide-react";
import supabase from "../../utils/supabase-client.js";

function Field({ label, icon: Icon, children, className = "" }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        {Icon ? (
          <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        ) : null}
        {children}
      </div>
    </div>
  );
}

export default function VinculateResearchGroupForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [theme, setTheme] = useState("");

  const addSemillero = async (e) => {
    e.preventDefault();

    const semilleroData = {
      name,
      description,
      external_link: externalLink,
      theme,
    };

    const { data, error } = await supabase
      .from("researchgroups")
      .insert([semilleroData])
      .select()
      .single();

    if (error) {
      console.error("Error al guardar el semillero:", error.message);
      return;
    }

    toast.success("Semillero registrado correctamente");
    console.log("Semillero agregado correctamente:", data);

    setName("");
    setDescription("");
    setExternalLink("");
    setTheme("");
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-[0_20px_80px_rgba(15,23,42,0.12)]">
        <main className="p-6 sm:p-10 lg:p-14">
          <div className="max-w-3xl">            

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Registrar semillero
            </h1>
            <p className="mt-3 text-base text-slate-500">
              Completa los campos para organizar la información básica de cada semillero dentro de la plataforma.
            </p>

            <form className="mt-10 space-y-6" onSubmit={addSemillero}>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nombre del semillero" icon={Microscope}>
                  <input
                    type="text"
                    placeholder="Nombre del semillero"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Field>

                <Field label="Línea temática" icon={Tag}>
                  <input
                    type="text"
                    placeholder="Ej. IA, UX, analítica, desarrollo web"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                  />
                </Field>
              </div>

              <Field label="Descripción" icon={FileText}>
                <textarea
                  rows="5"
                  placeholder="Describe el objetivo, enfoque o propósito del semillero"
                  className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 pt-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Field>

              <Field label="Link de material externo" icon={Link2}>
                <input
                  type="url"
                  placeholder="https://..."
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                  value={externalLink}
                  onChange={(e) => setExternalLink(e.target.value)}
                />
              </Field>

              <button
                className="w-full rounded-xl border-2 border-purple-700 p-2 text-purple-700 transition-all duration-300 hover:bg-purple-700 hover:text-white"
                type="submit"
              >
                Guardar
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}