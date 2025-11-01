import { faker } from "@faker-js/faker";
import { logoVirtualAprende, logoEtitc, publicacion1, logoUD, bannercursoVideo, miniaturaCurso, miniaturaIndustria4, recursoEnlaceDigital, recursoNexos, eventoCongreso, eventoRedColsi, eventoRedColsi2 } from "../../../assets/images";

export const tabs = [
  {name: "Principal"},
  {name: "Publicaciones"},
  {name: "Proyectos"},
  {name: "Cursos"},
  {name: "Videos"},
  {name: "Más"},
]

export const virtualAprendeSummary = 
{ 
  summary: "El Grupo de investigación interinstitucional en ambientes virtuales de aprendizaje 'Virtus' es una organización avalada por la Escuela Tecnológica Instituto Técnico Central y la Universidad Distrital Francisco José de Caldas, dos instituciones de educación superior públicas, ubicadas en Bogotá, Colombia. El grupo hace investigación en seis líneas: Ambientes y Herramientas Virtuales de Aprendizaje. Tecnología Educativa. Sistemas Adaptativos y Sistemas Recomendadores. Gamificación y Videojuegos. Ingeniería Web. Gestión del Conocimiento y su Aplicación Organizacional."
}

export const virtualAprendePosts = [
  {profilePicture: logoVirtualAprende, author: 'Virtual Aprende', date: 'Hace 4 días', body: '#InstituciónAlDía 📻 vuelve mañana con una conversación imperdible sobre Transformación Institucional junto a Jaime Alberto Cataño, asesor y consultor en educación superior 🎙️ Conéctese a las 3 p.m. por nuestro Facebook Live y sea parte del diálogo que impulsa el cambio', image: publicacion1},
  {profilePicture: logoVirtualAprende, author: 'Virtual Aprende', date: 'Hace 4 días', body: '#InstituciónAlDía 📻 vuelve mañana con una conversación imperdible sobre Transformación Institucional junto a Jaime Alberto Cataño, asesor y consultor en educación superior 🎙️ Conéctese a las 3 p.m. por nuestro Facebook Live y sea parte del diálogo que impulsa el cambio', image: publicacion1},
]

export const virtualAprendeResources = [
  {image: recursoEnlaceDigital, title: "Enlace Digital", category: "Repositorio de contenido", description: "No sé son muchas cosas y no es mi proyecto jaja"},
  {image: recursoNexos, title: "Nexos", category: "Red de comunicación", description: "No sé son muchas cosas y no es mi proyecto jaja"}
]

export const virtualAprendeEvents = [
  {image:eventoCongreso, title: "Cuarto congreso ETITC"},
  {image:eventoRedColsi, title: "Red Colsi 2024"},
  {image:eventoRedColsi2, title: "Red Colsi 2023"}  
]

export const virtualAprendeNexos = [
  {image: logoEtitc, label: "ETITC"},  
  {image: logoUD, label: "Universidad Distrital"},  
]

export const virtualAprendeParticipants = []

for (let i = 0 ; i < 7; i++) {
  virtualAprendeParticipants.push({
    id: String(i+1) , Picture: faker.image.personPortrait() , name: faker.person.fullName()
  }) 
}

export const participantsNexos = []

for (let i = 0 ; i < 2; i++) {
  participantsNexos.push({
    id: String(i+1) , picture: faker.image.personPortrait() , name: faker.person.fullName()
  }) 
}

export const participantsAprendizajeFlexible = []

for (let i = 0 ; i < 3; i++) {
  participantsAprendizajeFlexible.push({
    id: String(i+1) , picture: faker.image.personPortrait() , name: faker.person.fullName()
  }) 
}


export const projects = [
  {projectName: "Nexos", background: "#dcb4fe", date: "Abril 24, 2025", projectDescription: "Red de comunicación de semilleros enfocada a proporcionar un entorno donde se pueda divulgar información relacionada con proyectos de investigación.", projectPercentage:30, projectProgressColor: "#b154f8", participants: participantsNexos},
  {projectName: "Aprendizaje Flexible", background: "#47677D", date: "Septiembre 12, 2023", projectDescription: "Aplicación de metodologías novedosas en el proceso de enseñanza en entornos universitarios", projectPercentage:60, projectProgressColor: "#7aafd6", participants: participantsAprendizajeFlexible}  
]

export const virtualAprendeCourses = [
  {link: "http://pedagogiavirtual.com/renlacedigital/form/cursos-virtuales", image: bannercursoVideo, title: "Curso de creación de videos", description: "En este curso aprenderás a crear videos increibles dominando la grabación, edición, efectos y más", author: "Yeison Mora", date: "Abril de 2024", recomendations: 20}
]

export const virtualAprendeVideos = [
  {image: miniaturaCurso, date: "Hace 1 año", title: "Introducción curso", author: "Stiven Almanza"},
  {image: miniaturaIndustria4, date: "Hace 2 años", title: "Empresa de video Juego Industria 4.0", author: "Katerin Gutierrez"},
]