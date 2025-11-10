import { faker } from "@faker-js/faker";

import { logoVirtualAprende, recursoEnlaceDigital, recursoNexos, eventoCongreso, eventoRedColsi, eventoRedColsi2,
  logoEtitc, logoUD, bannercursoVideo, miniaturaCurso, miniaturaIndustria4,
  bannerVirtualAprende
} from "../../assets/images"

import posts from "../posts";

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
  summary: {
    summary: "El Grupo de investigación interinstitucional en ambientes virtuales de aprendizaje 'Virtus' es una organización avalada por la Escuela Tecnológica Instituto Técnico Central y la Universidad Distrital Francisco José de Caldas, dos instituciones de educación superior públicas, ubicadas en Bogotá, Colombia. El grupo hace investigación en seis líneas: Ambientes y Herramientas Virtuales de Aprendizaje. Tecnología Educativa. Sistemas Adaptativos y Sistemas Recomendadores. Gamificación y Videojuegos. Ingeniería Web. Gestión del Conocimiento y su Aplicación Organizacional."
  },
  posts: posts.filter((post) => (post.authorId === "virtualAprende")),
  resources: [
    {image: recursoEnlaceDigital, title: "Enlace Digital", category: "Repositorio de contenido", description: "No sé son muchas cosas y no es mi proyecto jaja", url: "https://pedagogiavirtual.com/renlacedigital/node/16"},
    {image: recursoNexos, title: "Nexos", category: "Red de comunicación", description: "No sé son muchas cosas y no es mi proyecto jaja", url: "https://nexos-elvis-serranos-projects.vercel.app"}
  ],
  events: [
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
  courses: [
    {link: "http://pedagogiavirtual.com/renlacedigital/form/cursos-virtuales", image: bannercursoVideo, title: "Curso de creación de videos", description: "En este curso aprenderás a crear videos increibles dominando la grabación, edición, efectos y más", author: "Yeison Mora", date: "Abril de 2024", recomendations: 20}
  ],
  videos: [
    {image: miniaturaCurso, date: "Hace 1 año", title: "Introducción curso", author: "Stiven Almanza"},
    {image: miniaturaIndustria4, date: "Hace 2 años", title: "Empresa de video Juego Industria 4.0", author: "Katerin Gutierrez"},
  ]
}

export default virtualAprende