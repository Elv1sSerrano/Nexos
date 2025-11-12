import { logoEtitc, logoVirtualAprende, publicacion1 } from "../../assets/images"
import fotoElvis from "../../assets/images/users/fotoElvis.jpeg"

const posts = [
  { 
    id: 101,
    authorId: "virtualAprende",
    authorType: "semillero",
    profilePicture: logoVirtualAprende, 
    author: 'Virtual Aprende', 
    date: 'Hace 4 días', 
    body: '#InstituciónAlDía 📻 vuelve mañana con una conversación imperdible sobre Transformación Institucional junto a Jaime Alberto Cataño, asesor y consultor en educación superior 🎙️ Conéctese a las 3 p.m. por nuestro Facebook Live y sea parte del diálogo que impulsa el cambio', 
    image: publicacion1,    
    likes: [],
    comments: []
  },
  {
    id: 102,
    authorId: "elvisserrano",
    authorType: "user",
    profilePicture: fotoElvis,
    date: 'Hace 8 días',
    body: "👍",
    likes: [],
    comments: []
  },
  { 
    id: 103,
    authorId: "etitc",
    authorType: "institution",
    profilePicture: logoEtitc, 
    author: 'ETITC', 
    date: 'Hace 4 días', 
    body: '#InstituciónAlDía 📻 vuelve mañana con una conversación imperdible sobre Transformación Institucional junto a Jaime Alberto Cataño, asesor y consultor en educación superior 🎙️ Conéctese a las 3 p.m. por nuestro Facebook Live y sea parte del diálogo que impulsa el cambio', 
    image: publicacion1,    
    likes: [],
    comments: []
  }
]

export default posts