import { CalendarDays, Users } from "lucide-react";

const sampleItems = [
  {
    id: 1,
    title: "Actualización del prototipo",
    date: "Marzo 2026",
    description:
      "Se mejoró la estructura del módulo principal y se ajustaron componentes para una navegación más clara.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    people: [
      { name: "Ana", avatar: "https://i.pravatar.cc/100?img=1" },
      { name: "Luis", avatar: "https://i.pravatar.cc/100?img=12" },
      { name: "Sofía", avatar: "https://i.pravatar.cc/100?img=32" },
    ],
    type: "Producto",
  },
  {
    id: 2,
    title: "Presentación en evento académico",
    date: "Abril 2026",
    description:
      "El semillero compartió avances del proyecto y recibió observaciones para fortalecer la propuesta.",
    image: null,
    people: [
      { name: "Camilo", avatar: "https://i.pravatar.cc/100?img=22" },
      { name: "Laura", avatar: "https://i.pravatar.cc/100?img=47" },
    ],
    type: "Evento",
  },
  {
    id: 3,
    title: "Nueva versión funcional",
    date: "Mayo 2026",
    description:
      "Se integró una nueva funcionalidad para registrar avances y evidencias dentro del flujo del proyecto.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    people: [
      { name: "Diana", avatar: "https://i.pravatar.cc/100?img=5" },
      { name: "Julián", avatar: "https://i.pravatar.cc/100?img=15" },
      { name: "Mateo", avatar: "https://i.pravatar.cc/100?img=24" },
      { name: "Paula", avatar: "https://i.pravatar.cc/100?img=41" },
    ],
    type: "Actualización",
  },
];

function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-10 pb-10">
      {/* Línea vertical */}
      {!isLast && (
        <div className="absolute left-4 top-0 h-full w-0.5 bg-purple-500/80" />
      )}

      {/* Punto de la línea */}
      <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-purple-600 shadow" />

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
            {item.type}
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-slate-500">
            <CalendarDays className="h-4 w-4" />
            {item.date}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>

        {item.image && (
          <div className="mt-4 overflow-hidden rounded-xl bg-slate-100">
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
          </div>
        )}

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {item.description}
        </p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Users className="h-4 w-4" />
            Participantes
          </div>

          <div className="flex flex-wrap gap-3">
            {item.people.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 pr-3"
              >
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm text-slate-700">{person.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetails({ items = sampleItems }) {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
            Trazabilidad del proyecto
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Línea de tiempo del semillero
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Esta estructura te permite registrar avances, presentaciones, cambios
            en productos y cualquier evidencia importante del proyecto.
          </p>
        </div>

        <div className="relative">
          {/* Línea principal completa */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-purple-200" />

          <div className="space-y-2">
            {items.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={index === items.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
