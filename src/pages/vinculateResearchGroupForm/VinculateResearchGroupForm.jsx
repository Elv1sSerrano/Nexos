import { useState } from "react";
import { toast } from "react-toastify";
import { FileText, Image, Mail, Microscope, UserRound } from "lucide-react";
import supabase from "../../utils/supabase-client.js";

const initialForm = { name: "", description: "", academic_program: "", line_investigation: "", proyects: "", leader_name: "", leader_email: "", logo_url: "" };
const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#611f69] focus:ring-4 focus:ring-[#f3e8f5]";

function Field({ label, icon: Icon, children, hint }) {
  return <div><label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">{Icon && <Icon className="h-4 w-4 text-[#611f69]" />}{label}</label>{children}{hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}</div>;
}

export default function VinculateResearchGroupForm() {
  const [form, setForm] = useState(initialForm);
  const [isSaving, setIsSaving] = useState(false);
  const [imageState, setImageState] = useState("empty");
  const updateField = (field) => (event) => {
    const value = event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
    if (field === "logo_url") setImageState(value ? "loading" : "empty");
  };
  const isValidUrl = (value) => { try { const url = new URL(value); return url.protocol === "https:" || url.protocol === "http:"; } catch { return false; } };

  const addSemillero = async (event) => {
    event.preventDefault();
    if (isSaving) return;
    if (!form.name.trim() || !form.description.trim() || !form.academic_program || !form.leader_name.trim() || !form.leader_email.trim() || !form.logo_url.trim()) { toast.error("Completa los campos obligatorios para continuar."); return; }
    if (!/^\S+@\S+\.\S+$/.test(form.leader_email)) { toast.error("Ingresa un correo electrónico válido."); return; }
    if (!isValidUrl(form.logo_url)) { toast.error("Ingresa una URL válida para el logo."); return; }

    setIsSaving(true);
    const semilleroData = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()]));
    const { data, error } = await supabase.from("researchgroups").insert([semilleroData]).select("name,description,academic_program,line_investigation,proyects,leader_name,leader_email,logo_url").single();
    setIsSaving(false);
    if (error) { toast.error("No fue posible registrar el semillero. Intenta nuevamente."); return; }

    window.dispatchEvent(new CustomEvent("researchgroup:created", { detail: data }));
    toast.success("Semillero registrado correctamente.");
    setForm(initialForm);
    setImageState("empty");
  };

  return (
    <div className="mx-auto max-w-4xl py-2 sm:py-6">
      <div className="overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white shadow-sm">
        <div className="border-b border-[#e6e6e6] bg-[#f8f5f8] p-6 sm:p-8"><p className="mb-2 text-sm font-semibold text-[#611f69]">Comunidad Nexos</p><h1 className="text-2xl font-bold tracking-tight text-[#1d1c1d] sm:text-3xl">Registrar semillero</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[#616061]">Comparte la información de tu semillero para que la comunidad pueda conocerlo y encontrarlo en el feed.</p></div>
        <form className="space-y-6 p-6 sm:p-8" onSubmit={addSemillero} noValidate>
          <div className="grid gap-5 sm:grid-cols-2"><Field label="Nombre del semillero *" icon={Microscope}><input required type="text" value={form.name} onChange={updateField("name")} placeholder="Nombre del semillero" className={inputClass} /></Field><Field label="Programa académico *"><select required value={form.academic_program} onChange={updateField("academic_program")} className={inputClass}><option value="">Selecciona un programa</option><option>Ingeniería en Sistemas</option><option>Ingeniería Mecatrónica</option><option>Ingeniería Electrónica</option></select></Field></div>
          <Field label="Descripción *" icon={FileText}><textarea required rows="4" value={form.description} onChange={updateField("description")} placeholder="Describe el objetivo y enfoque del semillero" className={inputClass} /></Field>
          <div className="grid gap-5 sm:grid-cols-2"><Field label="Líneas de investigación" hint="Puedes escribir una línea por renglón."><textarea rows="4" value={form.line_investigation} onChange={updateField("line_investigation")} placeholder={"Ej. Inteligencia artificial\nDesarrollo web"} className={inputClass} /></Field><Field label="Proyectos en curso"><textarea rows="4" value={form.proyects} onChange={updateField("proyects")} placeholder="Describe uno o varios proyectos" className={inputClass} /></Field></div>
          <div className="grid gap-5 sm:grid-cols-2"><Field label="Nombre del líder *" icon={UserRound}><input required type="text" value={form.leader_name} onChange={updateField("leader_name")} placeholder="Nombre completo" className={inputClass} /></Field><Field label="Correo del líder *" icon={Mail}><input required type="email" value={form.leader_email} onChange={updateField("leader_email")} placeholder="correo@institucion.edu.co" className={inputClass} /></Field></div>
          <Field label="URL del logo *" icon={Image} hint="Usa una URL pública de imagen (https://...)."><input required type="url" value={form.logo_url} onChange={updateField("logo_url")} placeholder="https://ejemplo.com/logo.png" className={inputClass} /></Field>
          <div className="flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#cfc1d0] bg-[#faf8fa] p-3">{imageState === "loading" && <span className="text-sm text-[#616061]">Cargando vista previa...</span>}{imageState === "loaded" && <img src={form.logo_url} alt="Vista previa del logo" className="h-24 max-w-full object-contain" />}{(imageState === "error" || imageState === "empty") && <span className="text-sm text-[#616061]">{imageState === "error" ? "No fue posible cargar la imagen." : "La vista previa del logo aparecerá aquí."}</span>}{imageState === "loading" && form.logo_url && <img src={form.logo_url} alt="" className="hidden" onLoad={() => setImageState("loaded")} onError={() => setImageState("error")} />}</div>
          <button disabled={isSaving} className="w-full rounded-lg bg-[#611f69] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4a154b] disabled:cursor-not-allowed disabled:opacity-60" type="submit">{isSaving ? "Guardando semillero..." : "Registrar semillero"}</button>
        </form>
      </div>
    </div>
  );
}
