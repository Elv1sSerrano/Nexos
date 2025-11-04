import { useParams } from "react-router-dom";

const { semilleroId } = useParams

export const tabs = [
  {name: "Principal", direction:`${semilleroId}/principal`},
  {name: "Publicaciones", direction:`${semilleroId}/publicaciones`},
  {name: "Proyectos", direction:`${semilleroId}/proyectos`},
  {name: "Cursos", direction:`${semilleroId}/cursos`},
  {name: "Videos", direction:`${semilleroId}/videos`},
  {name: "Más", direction:`${semilleroId}/mas`},
]