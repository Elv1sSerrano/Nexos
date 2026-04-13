import { Microscope, User, Users, BriefcaseBusiness, FolderKanban, ShieldCheck } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import supabase from "../../utils/supabase-client.js"

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

export default function VinculateForm() {
  
  const [name, setName] = useState("")
  const [researchGroup, setResearchGroup] = useState("")
  const [role, setRole] = useState("")
  const [amountProjects, setAmountProjects] = useState(0)
  const [amountParticipations, setAmountParticipations] = useState(0)

  const addUser = async (e) => {
    
    e.preventDefault()

    const userData = {
      name,
      research_group: researchGroup,
      role,
      proyects: amountProjects,
      participations: amountParticipations
    }

    const {data, error} = await supabase.from("users").insert([userData]).single()

    if (error) {
      console.log("Error al agregar" + error.message)
    } else {
      toast.success("Te has vinculado correctamente")
      console.log("Usuario agregado correctamente" + data)
      setName("")
      setResearchGroup("")
      setRole("")
      setAmountProjects(0)
      setAmountParticipations(0)
    }
} 

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-[0_20px_80px_rgba(15,23,42,0.12)]">        

        {/* Right side */}
        <main className="p-6 sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Vinculate
            </h1>
            <p className="mt-3 text-base text-slate-500">
              Completa los campos para dejar la información organizada dentro de la plataforma.
            </p>

            <form className="mt-10 space-y-6" onSubmit={addUser}>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nombre" icon={User}>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Field>

                <Field label="Grupo de investigación" icon={Microscope}>                  
                    <input
                      type="text"
                      placeholder="Grupo de investigación"
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                      value={researchGroup}
                      onChange={(e) => setResearchGroup(e.target.value)}
                    />                                      
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Rol en el grupo de investigación" icon={BriefcaseBusiness}>
                  <input
                    type="text"
                    placeholder="Ej. investigador, asistente, coordinador"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </Field>

                <Field label="Estimado de proyectos en los que ha trabajado" icon={FolderKanban}>
                  <input
                    type="text"
                    placeholder="0"                    
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                    value={amountProjects}
                    onChange={(e) => setAmountProjects(e.target.value ? Number(e.target.value) : 0)}
                  />
                </Field>
              </div>

              <Field label="Estimado de participaciones en los proyectos" icon={FolderKanban}>
                <input
                  type="text"
                  placeholder="0"                  
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                  value={amountParticipations}
                  onChange={(e) => setAmountParticipations(e.target.value ? Number(e.target.value) : 0)}
                />
              </Field>

              <button 
                className="w-full transition-all duration-300 p-2 border-2 border-purple-700 text-purple-700 rounded-xl hover:bg-purple-700 hover:text-white"
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
