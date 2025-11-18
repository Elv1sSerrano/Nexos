import logoetitc from "../../assets/images/profile/logoEtitc.jpg"
import logovirtualaprende from "../../assets/images/profile/logoVirtualAprende.png"
import { computerPath } from "../../constants/iconPaths"
import instalaciones from "../../assets/images/events/instalaciones.jpg"

const expo2025 = {
  id: "expo2025",
  hostId: "etitc",
  name: "Expo 2025",
  image: instalaciones,
  title: "Expo 2025",
  ubication: "Cl. 13 #16-74, Bogotá",
  date: "27 de noviembre de 2025",
  direction: "/app/explorar/expo2025",
  tag: {
    bg: "bg-[#8AA624]",
    icon: computerPath,
    category: "Institucional"
  },
  description: "Participa en nuestra quinta edición de la prestigiosa exposición de productos de semilleros, un evento único donde, en lugar de solo observar, contempla la materialización del ingenio, la dedicación y el rigor científico de la nueva ola de innovadores. Es el espacio crucial donde se revela el resultado final de meses de investigación aplicada, transformando ideas conceptuales en productos y servicios tangibles. Descubre de primera mano las soluciones pioneras a desafíos reales, presentadas por los líderes del mañana.",
  participants: [
    {profilePicture: logoetitc, name: "ETITC"},
    {profilePicture: logovirtualaprende, name: "Virtual aprende"}
  ],
  stories: [
    {url: "https://www.youtube.com/watch?v=03MDN8YiYzE&t=2s", account: {image: logovirtualaprende, label: "Virtual Aprende", direction: `semillero/virtualAprende/principal`}}
  ]  
}

export default expo2025