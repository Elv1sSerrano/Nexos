import { faker } from "@faker-js/faker";

import { logoVirtualAprende, recursoEnlaceDigital, recursoNexos, eventoCongreso, eventoRedColsi, eventoRedColsi2,
  logoEtitc, logoUD,
  bannerVirtualAprende
} from "../../assets/images"

import posts from "../posts";
import tech23 from "../events/tech23";

const virtualAprendeParticipants = []
const participantsNexos = []
const participantsAprendizajeFlexible = []

for (let i = 0 ; i < 3; i++) {
  participantsAprendizajeFlexible.push({
    id: String(i+1) , picture: faker.image.personPortrait() , name: faker.person.fullName()
  }) 
}

for (let i = 0 ; i < 7; i++) {
  virtualAprendeParticipants.push({
    id: String(i+1) , Picture: faker.image.personPortrait() , name: faker.person.fullName()
  }) 
}

for (let i = 0 ; i < 2; i++) {
  participantsNexos.push({
    id: String(i+1) , picture: faker.image.personPortrait() , name: faker.person.fullName()
  }) 
}

const virtualAprende = {
  id: "virtualAprende",
  name: "Virtual Aprende",
  banner: bannerVirtualAprende,
  logo: logoVirtualAprende,
  description: "Aprendizaje flexible multimedial",
  summary: {
    summary: "El Grupo de investigación interinstitucional en ambientes virtuales de aprendizaje 'Virtus' es una organización avalada por la Escuela Tecnológica Instituto Técnico Central y la Universidad Distrital Francisco José de Caldas, dos instituciones de educación superior públicas, ubicadas en Bogotá, Colombia. El grupo hace investigación en seis líneas: Ambientes y Herramientas Virtuales de Aprendizaje. Tecnología Educativa. Sistemas Adaptativos y Sistemas Recomendadores. Gamificación y Videojuegos. Ingeniería Web. Gestión del Conocimiento y su Aplicación Organizacional."
  },
  posts: posts.filter((post) => (post.authorId === "virtualAprende")),
  resources: [
    {image: recursoEnlaceDigital, title: "Enlace Digital", category: "Repositorio de contenido", description: "Página informativa de actividades realizadas por la ETITC y Virtual Aprende", url: "https://pedagogiavirtual.com/renlacedigital/node/16"},
    {image: recursoNexos, title: "Nexos", category: "Red de comunicación", description: "Red de comunicación entre semilleros", url: "https://nexos-elvis-serranos-projects.vercel.app"}
  ],
  events: [
    tech23,
    {image:eventoCongreso, title: "Cuarto congreso ETITC"},
    {image:eventoRedColsi, title: "Red Colsi 2024"},
    {image:eventoRedColsi2, title: "Red Colsi 2023"}  
  ],
  institutions: [
    {image: logoEtitc, label: "ETITC"},  
    {image: logoUD, label: "Universidad Distrital"}, 
  ],
  participants: virtualAprendeParticipants,
  participantsNexos: participantsNexos,
  participantsAprendizajeFlexible: participantsAprendizajeFlexible,
  projects: [
    {projectName: "Nexos", background: "#dcb4fe", date: "Abril 24, 2025", projectDescription: "Red de comunicación de semilleros enfocada a proporcionar un entorno donde se pueda divulgar información relacionada con proyectos de investigación.", projectPercentage:30, projectProgressColor: "#b154f8", participants: participantsNexos},
    {projectName: "Aprendizaje Flexible", background: "#47677D", date: "Septiembre 12, 2023", projectDescription: "Aplicación de metodologías novedosas en el proceso de enseñanza en entornos universitarios", projectPercentage:60, projectProgressColor: "#7aafd6", participants: participantsAprendizajeFlexible}  
  ],
  products: [
    { title: "Fundamentos de investigación", duration: "Semanas: 16", accent: "#61ade8", url: "https://enlacedigital.pedagogiavirtual.com/renlacedigital/node/27" },
    { title: "Redes", duration: "Semanas: 17", accent: "#eba77a", url: "https://enlacedigital.pedagogiavirtual.com/renlacedigital/node/28" },
    { title: "Curso de Sistemas Operativos", duration: "Semanas: 11", accent: "#48c95c", url: "https://enlacedigital.pedagogiavirtual.com/renlacedigital/node/33" },
    { title: "Diseño de OVA y automatización educativa con n8n en LMS", duration: "Horas: 10", accent: "#f07171", url: "https://enlacedigital.pedagogiavirtual.com/renlacedigital/node/45" },
    { title: "Introducción a n8n", duration: "Curso", accent: "#b9a4d6", url: "https://enlacedigital.pedagogiavirtual.com/renlacedigital/node/49" }
  ],
  videos: [
    { title: "Producción audiovisual 01", author: "Virtual Aprende", url: "https://www.youtube.com/watch?v=ECHVgqntt_s", thumbnail: "https://i.ytimg.com/vi/ECHVgqntt_s/hqdefault.jpg" },
    { title: "Producción audiovisual 02", author: "Virtual Aprende", url: "https://www.youtube.com/watch?v=Jr9HdNwn2bI", thumbnail: "https://i.ytimg.com/vi/Jr9HdNwn2bI/hqdefault.jpg" },
    { title: "Producción audiovisual 03", author: "Virtual Aprende", url: "https://www.youtube.com/watch?v=-Eyi2XUAU0I", thumbnail: "https://i.ytimg.com/vi/-Eyi2XUAU0I/hqdefault.jpg" },
    { title: "Producción audiovisual 04", author: "Virtual Aprende", url: "https://www.youtube.com/watch?v=AtAPpAyNugw", thumbnail: "https://i.ytimg.com/vi/AtAPpAyNugw/hqdefault.jpg" },
    { title: "Producción audiovisual 05", author: "Virtual Aprende", url: "https://www.youtube.com/watch?v=jZltZV0pprE", thumbnail: "https://i.ytimg.com/vi/jZltZV0pprE/hqdefault.jpg" },
    { title: "Producción audiovisual 06", author: "Virtual Aprende", url: "https://www.youtube.com/watch?v=S9OJrXkKUAo", thumbnail: "https://i.ytimg.com/vi/S9OJrXkKUAo/hqdefault.jpg" },
    { title: "Producción audiovisual 07", author: "Virtual Aprende", url: "https://www.youtube.com/watch?v=BSzvPVontgE", thumbnail: "https://i.ytimg.com/vi/BSzvPVontgE/hqdefault.jpg" },
  ]
}

export default virtualAprende
