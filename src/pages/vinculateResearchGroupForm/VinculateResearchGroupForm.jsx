import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  FileText,
  Image,
  Mail,
  Microscope,
  UserRound,
} from "lucide-react";
import supabase from "../../utils/supabase-client.js";

/*
|--------------------------------------------------------------------------
| FUENTE DE DATOS: SEMILLEROS ETITC
|--------------------------------------------------------------------------
| Cada objeto representa una relación semillero → profesor → proyecto.
|
| Posteriormente, la función agruparSemilleros() combina automáticamente
| los registros que pertenecen al mismo semillero.
|--------------------------------------------------------------------------
*/

const SEMILLEROS_ETITC_RAW = [
  {
    name: "Fiction Lab",
    professor: "Juan Pablo Bustamante Moreno",
    project:
      "Simulación interactiva (videojuegos, VR/AR, visión artificial) de obras de ficción especulativa: un marco sociocognitivo para la innovación pedagógica en la ETITC.",
  },
  {
    name: "Cansat - TinyML",
    professor: "Jheyson Fabian Villavisan Buitrago",
    project:
      "Desarrollo en CANSAT e inteligencia artificial embebida (CANSAT TinyML).",
  },
  {
    name: "K-Cybersec",
    professor: "Ivan Dario Mendez Aguilera",
    project:
      "Protección y análisis forense de evidencia digital: implementación de medidas de seguridad y técnicas de adquisición.",
  },
  {
    name: "Vehículos Eléctricos SEVE",
    professor: "María Ximena Reyes Ortiz",
    project:
      "Análisis de la conversión de un vehículo de combustión interna en un vehículo eléctrico retrofit. Motocicleta de MCI a eléctrica.",
  },
  {
    name: "Neuro IA Lab",
    professor: "Brayan Sebastian Yepes Garcia",
    project:
      "Predicción temprana del pronóstico neurológico mediante análisis de señales EEG clínicas y modelos de Machine Learning.",
  },
  {
    name: "Mujeres y Materialidad",
    professor: "Laura Andrea Sanchez Barbosa",
    project:
      "Desarrollo de biopolímeros biodegradables a partir de almidón extraído de cáscara de papa, arroz, ñame y yuca para la fabricación de filamentos de impresión 3D.",
  },
  {
    name: "Hidrógeno y Nuevas Tecnologías",
    professor: "Francisco Javier Cano Ravelo",
    project:
      "Evaluación del uso de herramientas pedagógicas activas para el aprendizaje de los procesos de producción de hidrógeno.",
  },
  {
    name: "K-Faradaxis",
    professor: "Juan Sebastian Chavez Barrios",
    project:
      "Desarrollos basados en conceptos de las ciencias de la computación.",
  },
  {
    name: "Materia y Energía",
    professor: "Holman Enrique Cubides Garzon",
    project:
      "Diseño y simulación de pruebas de iluminación circadiana con espectro dinámico usando iluminación 4 LED RGBY.",
  },
  {
    name: "Semillero de Simulación y Desarrollo Tecnológico",
    professor: "Esteban Benavides Ramos",
    project:
      "Modelo matemático del crecimiento de la fresa como componente de un gemelo digital agrícola.",
  },
  {
    name: "Inteligencia Artificial",
    professor: "Luis Eduardo Baquero Rey",
    project:
      "Análisis de sentimientos usando web scraping: una herramienta inteligente para escuchar la opinión pública.",
  },
  {
    name: "Fabricación Digital",
    professor: "Faolain Chaparro Chaparro",
    project:
      "Elaboración de proyectos de mecanismos realizados en impresión 3D y corte láser: un aporte al diseño de prototipos para fabricación de piezas industriales.",
  },
  {
    name: "Fabricación Digital",
    professor: "Myriam Herrera Paloma",
    project:
      "Elaboración de proyectos de mecanismos realizados en impresión 3D y corte láser: un aporte al diseño de prototipos para fabricación de piezas industriales.",
  },
  {
    name: "SIMEI - Seguridad, IoT, Mantenimiento, Energía e Instrumentación",
    professor: "Magda Liliana Rincon Melendez",
    project:
      "Estudio de uniones soldadas mediante FRW entre aceros AISI/SAE 4140 y acero AISI/SAE 1010.",
  },
  {
    name: "Coriolis",
    professor: "Luis Alberto Garcia Gonzalez",
    project:
      "Desarrollo de un robot asistencial controlado mediante señales cerebrales para personas con ELA.",
  },
  {
    name: "SIAR - Semillero en Automática y Robótica",
    professor: "Alfredo Sánchez Silvera",
    project:
      "Diseño e implementación de un brazo robótico controlado mediante señales neuromusculares.",
  },
  {
    name: "Inteligencia Artificial",
    professor: "Miguel Hernandez Bejarano",
    project:
      "Análisis predictivo de ventas en comercio electrónico mediante técnicas de web scraping.",
  },
  {
    name: "Eco Movilidad",
    professor: "Pedro Emilio Prieto Garzon",
    project:
      "Diseño y construcción de una patineta eléctrica accionada con energía solar.",
  },
  {
    name: "PRO-2 (Procesos Productivos) – Semillero de Hidrógeno y Nuevas Tecnologías",
    professor: "Henry Montero Acosta",
    project:
      "Comparando celdas PEM y OHH: innovando la enseñanza del hidrógeno verde en la ETITC.",
  },
  {
    name: "Semillero Grupo RUAJ-ETITC",
    professor: "Milton Rodriguez Chavarro",
    project:
      "Aplicaciones de MATLAB en análisis de datos e ingeniería.",
  },
  {
    name: "Energy & Matter",
    professor: "Holman Yesid Piñeros Herrera",
    project: "Generación hidráulica casera.",
  },
  {
    name: "K-VANT (Vehículos Aéreos No Tripulados)",
    professor: "Sócrates Rojas Amador",
    project:
      "Impacto de la gamificación y la simulación virtual en el aprendizaje de normativa y operación básica de aeronaves no tripuladas (VANT).",
  },
  {
    name: "K-Smart",
    professor: "Alexander Peña Marin",
    project:
      "Elaboración de un algoritmo para la identificación de patrones en coberturas vegetales colombianas.",
  },
  {
    name: "SolidWorks",
    professor: "Carlos Javier Guerrero Castañeda",
    project:
      "Certificación, innovación y producción científica con SolidWorks.",
  },
  {
    name: "Ingeniería Térmica",
    professor: "Alain Roger Alvarez Naranjo",
    project: "Calentador solar pasivo.",
  },
  {
    name: "KEY.AI",
    professor: "John Alexander Rico Franco",
    project:
      "Análisis y modelado de arquitecturas computacionales resilientes mediante la convergencia de inteligencia artificial y seguridad informática en infraestructuras tecnológicas críticas.",
  },
  {
    name: "Semillero de Domótica",
    professor: "Wladimir Paez Guerra",
    project:
      "Sistema inteligente de control de acceso residencial basado en ESP32, RFID y base de datos centralizada para la gestión segura de ingreso vehicular y peatonal en conjuntos habitacionales.",
  },
  {
    name: "Mecatrónica Aplicada a la Industria y la Eficiencia Energética",
    professor: "Juan Jose Bernal Segura",
    project:
      "Diseño y construcción de un robot SCARA con visión artificial para detección y selección de objetos.",
  },
  {
    name: "Automatools",
    professor: "Sergio Enrique Ramirez Moreno",
    project:
      "Monitoreo y control de sistemas discretos automáticos mediante el uso de tecnologías de Industria 4.0 de los kits FischerTechnik.",
  },
  {
    name: "Semillero de Economía Circular y Producción Sostenible",
    professor: "Oscar Leonardo Ortiz Medina",
    project:
      "Diagnóstico preliminar de oportunidades de economía circular en el manejo de residuos sólidos en instituciones de educación superior.",
  },
  {
    name: "Creatividad, Innovación y Diseño ETITC",
    professor: "Juan Manuel Hernandez Acosta",
    project:
      "Exploración y diagnóstico de la adopción de la economía colaborativa por parte de la comunidad educativa en la ETITC.",
  },
  {
    name: "GIER - Grupo de Interés en Energías Renovables de la ETITC",
    professor: "German Arturo Lopez Martinez",
    project:
      "P1 Prototipos: Mini Carro Solar FV y Mini Motor Stirling.",
  },
  {
    name: "Escritura Creativa",
    professor: "Marisol Briñez Ríos",
    project:
      "Desarrollo de competencias de comunicación oral y escrita en estudiantes de Ingeniería Mecánica: integración de la teoría y la práctica.",
  },
  {
    name: "ISQUA",
    professor: "Brian Alejandro Corredor León",
    project: "Diseño de sistemas inteligentes para el agro.",
  },
  {
    name: "Sapientiam",
    professor: "José Alfredo Trejos Motato",
    project:
      "Formación en ciberseguridad y creación de CSIRT académico en ETITC.",
  },
  {
    name: "Virtual Aprende (Virtus)",
    professor: "Eduardo Hernández Ortiz",
    project:
      'n8n & IA: "Automatización inteligente para un futuro conectado".',
  },
  {
    name: "Virtual Aprende (Virtus)",
    professor: "Martín Encizo Méndez",
    project:
      'n8n & IA: "Automatización inteligente para un futuro conectado".',
  },
  {
    name: "Virtual Aprende (Virtus)",
    professor: "Diana Lisset Vargas Rodríguez",
    project:
      "Implementación, pilotaje y evaluación de un objeto virtual de aprendizaje OVA para la automatización de procesos educativos mediante n8n y consolidación de la Red de Comunicación Nexos (RCNEXO).",
  },
  {
    name: "Virtual Aprende (Virtus)",
    professor: "Diego Armando Sierra Ramírez",
    project:
      "Implementación, pilotaje y evaluación de un objeto virtual de aprendizaje OVA para la automatización de procesos educativos mediante n8n y consolidación de la Red de Comunicación Nexos (RCNEXO).",
  },
  {
    name: "ADIMA - Semillero de Investigación en Diseño y Manufactura Aditiva",
    professor: "Yamid Gonzalo Reyes Florez",
    project:
      "Evaluación comparativa de la capacidad geométrica de sistemas de manufactura aditiva mediante artefactos de la NTC-ISO/ASTM 52902.",
  },
  {
    name: "Aeroagro",
    professor: "Alvaro Cortes Prieto",
    project: "Investigación y eficiencia drónica.",
  },
  {
    name: "XUÉ - Semillero de Investigación en Mecatrónica, Sede Zipaquirá",
    professor: "German Alexis Sarmiento Lopez",
    project:
      "Sistema mecatrónico para control de variables y telemetría en fotobiorreactores de cámara cerrada.",
  },
  {
    name: "MATHIA - Semillero de Inteligencia Artificial y Educación Matemática",
    professor: "Hernán Santiago Angarita García",
    project:
      "Uso agéntico de modelos de lenguaje razonadores para el aprendizaje autónomo de matemáticas básicas.",
  },
  {
    name: "Cultivando con Virtud",
    professor: "Nelson Castañeda Arias",
    project:
      "Análisis del impacto de estrategias didácticas basadas en programación y desconectas en el desarrollo de habilidades del pensamiento computacional.",
  },
  {
    name: "ECOS",
    professor: "Jose Francisco Lugo Pinto",
    project:
      "Diseño de un CUBESAT para el monitoreo de variables ambientales y la protección de carga crítica.",
  },
];

/*
|--------------------------------------------------------------------------
| AGRUPACIÓN AUTOMÁTICA
|--------------------------------------------------------------------------
| Convierte:
|
| Inteligencia Artificial → profesor A → proyecto A
| Inteligencia Artificial → profesor B → proyecto B
|
| en:
|
| Inteligencia Artificial
| ├── profesores: [A, B]
| └── proyectos: [A, B]
|--------------------------------------------------------------------------
*/

function agruparSemilleros(registros) {
  const agrupados = new Map();

  registros.forEach(({ name, professor, project }) => {
    const key = name.trim().toLowerCase();

    if (!agrupados.has(key)) {
      agrupados.set(key, {
        name: name.trim(),
        professors: [],
        projects: [],
      });
    }

    const semillero = agrupados.get(key);

    if (
      professor?.trim() &&
      !semillero.professors.includes(professor.trim())
    ) {
      semillero.professors.push(professor.trim());
    }

    if (
      project?.trim() &&
      !semillero.projects.includes(project.trim())
    ) {
      semillero.projects.push(project.trim());
    }
  });

  return Array.from(agrupados.values());
}

const SEMILLEROS_ETITC = agruparSemilleros(
  SEMILLEROS_ETITC_RAW
);

/*
|--------------------------------------------------------------------------
| PROGRAMAS ACADÉMICOS
|--------------------------------------------------------------------------
*/

const PROGRAMAS_ACADEMICOS = [
  "Ingeniería en Sistemas",
  "Ingeniería Mecatrónica",
  "Ingeniería Electromecánica",
  "Ingeniería Mecánica",
  "Ingeniería Electrónica",
  "Ingeniería en Procesos Industriales",
  "Ingeniería en Energías Renovables",
  "Técnico Profesional en Computación",
  "Técnico Profesional en Mecatrónica",
  "Técnico Profesional en Electromecánica",
  "Técnico Profesional en Procesos Industriales",
  "Otro",
];

/*
|--------------------------------------------------------------------------
| FORMULARIO INICIAL
|--------------------------------------------------------------------------
*/

const initialForm = {
  name: "",
  description: "",
  academic_program: "",
  line_investigation: "",
  proyects: "",
  leader_name: "",
  leader_email: "",
  logo_url: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#611f69] focus:ring-4 focus:ring-[#f3e8f5]";

function Field({
  label,
  icon: Icon,
  children,
  hint,
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
        {Icon && (
          <Icon className="h-4 w-4 text-[#611f69]" />
        )}

        {label}
      </label>

      {children}

      {hint && (
        <p className="mt-1 text-xs text-slate-500">
          {hint}
        </p>
      )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| COMPONENTE
|--------------------------------------------------------------------------
*/

export default function VinculateResearchGroupForm() {
  const [form, setForm] = useState(initialForm);

  const [isSaving, setIsSaving] = useState(false);

  const [imageState, setImageState] = useState("empty");

  const [selectedSemillero, setSelectedSemillero] =
    useState("");

  /*
   * useMemo evita recalcular innecesariamente la lista agrupada.
   */
  const semilleros = useMemo(
    () => SEMILLEROS_ETITC,
    []
  );

  const updateField = (field) => (event) => {
    const value = event.target.value;

    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (field === "logo_url") {
      setImageState(
        value ? "loading" : "empty"
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | SELECCIONAR SEMILLERO
  |--------------------------------------------------------------------------
  */

  const handleSemilleroChange = (event) => {
    const value = event.target.value;

    setSelectedSemillero(value);

    /*
     * Si el usuario selecciona "Otro", limpiamos los
     * campos autocompletados y permitimos escribir.
     */
    if (value === "otro") {
      setForm((current) => ({
        ...current,
        name: "",
        leader_name: "",
        leader_email: "",
        proyects: "",
      }));

      return;
    }

    /*
     * Si vuelve a "Selecciona un semillero".
     */
    if (value === "") {
      setForm((current) => ({
        ...current,
        name: "",
        leader_name: "",
        leader_email: "",
        proyects: "",
      }));

      return;
    }

    const semillero =
      semilleros[Number(value)];

    if (!semillero) return;

    /*
     * Convertimos los arreglos a texto separado por
     * saltos de línea porque Supabase actualmente
     * almacena estos campos como texto.
     */
    const professorsText =
      semillero.professors.join("\n");

    const projectsText =
      semillero.projects.join("\n");

    setForm((current) => ({
      ...current,

      name: semillero.name,

      leader_name: professorsText,

      proyects: projectsText,

      /*
       * No tenemos los correos en la fuente de datos.
       */
      leader_email: "",
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | VALIDACIÓN DE URL
  |--------------------------------------------------------------------------
  */

  const isValidUrl = (value) => {
    try {
      const url = new URL(value);

      return (
        url.protocol === "https:" ||
        url.protocol === "http:"
      );
    } catch {
      return false;
    }
  };

  /*
  |--------------------------------------------------------------------------
  | REGISTRAR SEMILLERO
  |--------------------------------------------------------------------------
  */

  const addSemillero = async (event) => {
    event.preventDefault();

    if (isSaving) return;

    /*
     * Validar campos obligatorios.
     */
    if (
      !form.name.trim() ||
      !form.description.trim() ||
      !form.academic_program ||
      !form.leader_name.trim() ||
      !form.leader_email.trim() ||
      !form.logo_url.trim()
    ) {
      toast.error(
        "Completa los campos obligatorios para continuar."
      );

      return;
    }

    /*
     * Validar correo.
     */
    if (
      !/^\S+@\S+\.\S+$/.test(
        form.leader_email.trim()
      )
    ) {
      toast.error(
        "Ingresa un correo electrónico válido."
      );

      return;
    }

    /*
     * Validar URL del logo.
     */
    if (!isValidUrl(form.logo_url.trim())) {
      toast.error(
        "Ingresa una URL válida para el logo."
      );

      return;
    }

    setIsSaving(true);

    /*
     * Limpiar espacios antes de enviar a Supabase.
     */
    const semilleroData = Object.fromEntries(
      Object.entries(form).map(
        ([key, value]) => [
          key,
          value.trim(),
        ]
      )
    );

    const { data, error } = await supabase
      .from("researchgroups")
      .insert([semilleroData])
      .select(
        "id,name,description,academic_program,line_investigation,proyects,leader_name,leader_email,logo_url"
      )
      .single();

    setIsSaving(false);

    if (error) {
      console.error(error);

      toast.error(
        "No fue posible registrar el semillero. Intenta nuevamente."
      );

      return;
    }

    /*
     * Notificar al resto de Nexos.
     */
    window.dispatchEvent(
      new CustomEvent(
        "researchgroup:created",
        {
          detail: data,
        }
      )
    );

    toast.success(
      "Semillero registrado correctamente."
    );

    /*
     * Reiniciar formulario.
     */
    setForm(initialForm);

    setSelectedSemillero("");

    setImageState("empty");
  };

  const isOtherSemillero =
    selectedSemillero === "otro";

  return (
    <div className="mx-auto max-w-4xl py-2 sm:py-6">
      <div className="overflow-hidden rounded-2xl border border-[#e6e6e6] bg-white shadow-sm">

        {/* ============================================================
            ENCABEZADO
        ============================================================ */}

        <div className="border-b border-[#e6e6e6] bg-[#f8f5f8] p-6 sm:p-8">
          <p className="mb-2 text-sm font-semibold text-[#611f69]">
            Comunidad Nexos
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-[#1d1c1d] sm:text-3xl">
            Registrar semillero
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#616061]">
            Selecciona tu semillero, si no aparece, puedes registrarlo manualmente.
          </p>
        </div>

        <form
          className="space-y-6 p-6 sm:p-8"
          onSubmit={addSemillero}
          noValidate
        >

          {/* ==========================================================
              SEMILLERO
          ========================================================== */}

          <div className="grid gap-5 sm:grid-cols-2">

            <Field
              label="Semillero *"
              icon={Microscope}
              hint="La información disponible se cargará automáticamente."
            >
              <select
                required
                value={selectedSemillero}
                onChange={handleSemilleroChange}
                className={inputClass}
              >
                <option value="">
                  Selecciona un semillero
                </option>

                {semilleros.map(
                  (semillero, index) => (
                    <option
                      key={`${semillero.name}-${index}`}
                      value={index}
                    >
                      {semillero.name}
                    </option>
                  )
                )}

                <option value="otro">
                  Otro — no aparece en la lista
                </option>
              </select>
            </Field>

            <Field
              label="Nombre del semillero *"
              hint={
                isOtherSemillero
                  ? "Escribe el nombre oficial del semillero."
                  : ""
              }
            >
              <input
                required
                type="text"
                value={form.name}
                onChange={updateField("name")}
                placeholder="Nombre del semillero"
                className={inputClass}
              />
            </Field>

          </div>

          {/* ==========================================================
              MENSAJE "OTRO"
          ========================================================== */}

          {isOtherSemillero && (
            <div className="rounded-xl border border-[#e8d9eb] bg-[#faf6fb] px-4 py-3 text-sm text-[#611f69]">
              <strong>
                Semillero no listado:
              </strong>{" "}
              completa manualmente la información
              del semillero.
            </div>
          )}

          {/* ==========================================================
              PROGRAMA ACADÉMICO
          ========================================================== */}

          <Field
            label="Programa académico *"
            hint="Selecciona el programa académico al que pertenece el semillero."
          >
            <select
              required
              value={form.academic_program}
              onChange={updateField(
                "academic_program"
              )}
              className={inputClass}
            >
              <option value="">
                Selecciona un programa
              </option>

              {PROGRAMAS_ACADEMICOS.map(
                (programa) => (
                  <option
                    key={programa}
                    value={programa}
                  >
                    {programa}
                  </option>
                )
              )}
            </select>
          </Field>

          {/* ==========================================================
              DESCRIPCIÓN
          ========================================================== */}

          <Field
            label="Descripción *"
            icon={FileText}
            hint="Explica brevemente el propósito, enfoque y actividades del semillero."
          >
            <textarea
              required
              rows="4"
              value={form.description}
              onChange={updateField(
                "description"
              )}              
              className={inputClass}
            />
          </Field>

          {/* ==========================================================
              LÍNEAS Y PROYECTOS
          ========================================================== */}

          <div className="grid gap-5 sm:grid-cols-2">

            <Field
              label="Líneas de investigación"
              hint="Escribe una línea por renglón."
            >
              <textarea
                rows="5"
                value={
                  form.line_investigation
                }
                onChange={updateField(
                  "line_investigation"
                )}
                placeholder={`Inteligencia artificial
Machine Learning
Robótica
Desarrollo tecnológico`}
                className={inputClass}
              />
            </Field>

            <Field
              label="Proyectos en curso"
              hint="Escribe un proyecto por renglón."
            >
              <textarea
                rows="5"
                value={form.proyects}
                onChange={updateField(
                  "proyects"
                )}
                placeholder={`Proyecto 1
Proyecto 2
Proyecto 3`}
                className={inputClass}
              />
            </Field>

          </div>

          {/* ==========================================================
              PROFESORES
          ========================================================== */}

          <div className="grid gap-5 sm:grid-cols-2">

            <Field
              label="Profesores responsables *"
              icon={UserRound}
              hint="Un profesor por renglón."
            >
              <textarea
                required
                rows="4"
                value={form.leader_name}
                onChange={updateField(
                  "leader_name"
                )}
                placeholder={`Nombre del profesor 1
Nombre del profesor 2`}
                className={inputClass}
              />
            </Field>

            <Field
              label="Correo de contacto *"
              icon={Mail}              
            >
              <input
                required
                type="email"
                value={form.leader_email}
                onChange={updateField(
                  "leader_email"
                )}
                placeholder="correo@etitc.edu.co"
                className={inputClass}
              />
            </Field>

          </div>

          {/* ==========================================================
              LOGO
          ========================================================== */}

          <Field
            label="URL del logo *"
            icon={Image}
            hint="Usa una URL pública de imagen (https://...)."
          >
            <input
              required
              type="url"
              value={form.logo_url}
              onChange={updateField(
                "logo_url"
              )}
              placeholder="https://ejemplo.com/logo.png"
              className={inputClass}
            />
          </Field>

          {/* ==========================================================
              VISTA PREVIA DEL LOGO
          ========================================================== */}

          <div className="flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-dashed border-[#cfc1d0] bg-[#faf8fa] p-3">

            {imageState === "loading" && (
              <>
                <span className="text-sm text-[#616061]">
                  Cargando vista previa...
                </span>

                {form.logo_url && (
                  <img
                    src={form.logo_url}
                    alt=""
                    className="hidden"
                    onLoad={() =>
                      setImageState(
                        "loaded"
                      )
                    }
                    onError={() =>
                      setImageState(
                        "error"
                      )
                    }
                  />
                )}
              </>
            )}

            {imageState === "loaded" && (
              <img
                src={form.logo_url}
                alt="Vista previa del logo"
                className="h-24 max-w-full object-contain"
              />
            )}

            {(imageState === "error" ||
              imageState === "empty") && (
              <span className="text-sm text-[#616061]">
                {imageState === "error"
                  ? "No fue posible cargar la imagen."
                  : "La vista previa del logo aparecerá aquí."}
              </span>
            )}
          </div>

          {/* ==========================================================
              BOTÓN
          ========================================================== */}

          <button
            disabled={isSaving}
            className="w-full rounded-lg bg-[#611f69] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4a154b] disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
          >
            {isSaving
              ? "Guardando semillero..."
              : "Registrar semillero"}
          </button>

        </form>
      </div>
    </div>
  );
}