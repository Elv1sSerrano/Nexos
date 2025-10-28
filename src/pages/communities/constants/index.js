import { faker } from "@faker-js/faker";
import { logoVirtualAprende, logoEtitc, publicacion1, logoUD, bannercursoVideo } from "../../../assets/images";

export const tabs = [
  {name: "Principal"},
  {name: "Publicaciones"},
  {name: "Proyectos"},
  {name: "Cursos"},
  {name: "Podcasts"},
  {name: "Más"},
]

export const virtualAprendePosts = [
  {profilePicture: logoVirtualAprende, author: 'Virtual Aprende', date: 'Hace 4 días', body: '#InstituciónAlDía 📻 vuelve mañana con una conversación imperdible sobre Transformación Institucional junto a Jaime Alberto Cataño, asesor y consultor en educación superior 🎙️ Conéctese a las 3 p.m. por nuestro Facebook Live y sea parte del diálogo que impulsa el cambio', image: publicacion1}
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


export const projects = [
  {projectName: "Nexos", background: "#B7A3E3", date: "Abril 24, 2025", projectDescription: "Red de comunicación de semilleros enfocada a proporcionar un entorno donde se pueda divulgar información relacionada con proyectos de investigación.", projectPercentage:30, projectProgressColor: "#9000ff", participants: participantsNexos}  
]

export const virtualAprendeCourses = [
  {link: "http://pedagogiavirtual.com/renlacedigital/form/cursos-virtuales", image: bannercursoVideo, title: "Curso de creación de videos", description: "En este curso aprenderás a crear videos increibles dominando la grabación, edición, efectos y más", author: "Yeison Mora", date: "Abril de 2024", recomendations: 20}
]