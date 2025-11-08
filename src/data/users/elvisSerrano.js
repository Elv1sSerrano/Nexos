import { logoVirtualAprende, recursoNexos } from "../../assets/images"
import fotoElvis from "../../assets/images/users/fotoElvis.jpeg"
import recursoWeatherApp from "../../assets/images/resources/recursoWeatherApp.png"

const elvisserrano = {
  id: "elvisserrano",
  name: "Elvis Serrano",
  image: fotoElvis,
  description: "Estudiante ingeniería en sistemas",
  summary: "Tecnólogo en desarollo de software y tecnólogo en desarrollo publicitario apasionado por javascript y el diseño ux/ui",
  interests: ["JavaScript", "Frontend development", "React", "MongoDB", "NodeJs"],
  educations: [
    {major: "Tecnología en desarrollo publicitario", institution: "SENA"},
    {major: "Tecnología en desarrollo de software", institution: "ETITC"}
  ],
  communities: [
    {logo: logoVirtualAprende, name: "Virtual Aprende", role: "Desarrollador"}
  ],
  externalResources: [
    {site: "Linkedin", url: "https://www.linkedin.com/in/elvis-serrano-7a0602270/"}
  ],
  posts: [
    {id:"1", profilePicture: fotoElvis, author: 'Elvis Serrano', date: 'Hace 8 días', body: '👍'},    
  ],
  resources: [  
    {id: "1", image: recursoNexos, title: "Nexos", category: "Red de comunicación", description: "Aplicación para facilitar la interacción y divulgación de contenido educativo", url: "https://nexos-elvis-serranos-projects.vercel.app"},
    {id: "2", image: recursoWeatherApp, title: "Weather App", category: "Página web", description: "Página para ver la temperatura y predicciones del clima de acuerdo a la ubicación actual (Solo funciona en teléfonos)", url: "https://weather-app-drab-phi.vercel.app/"}
  ]
}

export default elvisserrano