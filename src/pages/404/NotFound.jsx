import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-center">
      <h1 className="text-6xl font-bold text-purple-700">404</h1>
      <p className="mt-4 text-lg text-slate-600">
        Página no encontrada
      </p>

      <NavLink to={"/app/inicio"}        
        className="mt-6 rounded-xl border-2 border-purple-700 px-4 py-2 text-purple-700 transition hover:bg-purple-700 hover:text-white"
      >
        Volver al inicio
      </NavLink>
    </div>
  );
}