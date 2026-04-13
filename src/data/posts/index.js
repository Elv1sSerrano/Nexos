import { logoEtitc, logoVirtualAprende } from "../../assets/images"
import etitc2 from "../../assets/images/posts/etitc2.jpg"
import etiticp3 from "../../assets/images/posts/etitcP3.jpg"
import fotoElvis from "../../assets/images/users/fotoElvis.jpeg"
import virtualAprende1 from "../../assets/images/posts/virtualAprende1.jpg"
import virtualAprendep2 from "../../assets/images/posts/virtualAprendeP2.png"

const posts = [
  { 
    id: 105,
    authorId: "virtualAprende",
    authorType: "semillero",
    profilePicture: logoVirtualAprende, 
    author: 'Virtual Aprende', 
    date: 'Hace 7 días', 
    body: 'Aprendizaje y retroalimentación valiosa en el IV Congreso de Ingeniería y Desarrollo ETITC. 🙏 Tuvimos el privilegio de exponer los resultados de nuestros proyectos del Semillero. Estamos muy agradecidos por los excelentes comentarios recibidos, que nos motivan a seguir mejorando y profundizando nuestra investigación. ¡Un paso importante para el equipo!', 
    image: virtualAprende1,    
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
    id: 104,
    authorId: "etitc",
    authorType: "institution",
    profilePicture: logoEtitc, 
    author: 'ETITC', 
    date: 'Hace 2 días', 
    body: 'Certifique su nivel de inglés inscribiéndose en el Examen Internacional avalado por el British Council, el único en el mundo con reconocimiento global diseñado para realizarse desde dispositivos móviles 🇬🇧 Resultados rápidos y precisos, con 50% de descuento para toda la comunidad ETITC 🙂', 
    image: etitc2,    
    likes: [],
    comments: []
  },
  { 
    id: 103,
    authorId: "etitc",
    authorType: "institution",
    profilePicture: logoEtitc, 
    author: 'ETITC', 
    date: 'Hace 2 días', 
    body: 'Hasta el 20 de noviembre estará abierta la recepción de propuestas para la Convocatoria Interna de Financiación de Proyectos de Investigación N.º 18-2025 ✨ Una oportunidad para impulsar nuevas ideas y fortalecer la producción científica de nuestra comunidad 💡 Toda la información disponible en https://bit.ly/4nGKw2u', 
    image: etiticp3,    
    likes: [],
    comments: []
  },  
  { 
    id: 101,
    authorId: "virtualAprende",
    authorType: "semillero",
    profilePicture: logoVirtualAprende, 
    author: 'Virtual Aprende', 
    date: 'Hace 3 días', 
    body: 'Estamos muy emocionados de anunciar que el próximo 27 de noviembre estaremos exponiendo en el evento TECH N8N 2025. ¡Será una oportunidad increíble para compartir y aprender! 🌐 Además, hemos actualizado por completo nuestra página web para que encuentres con facilidad toda la información sobre nuestra participación, los proyectos que presentaremos y, por supuesto, nuestro trabajo en Virtual Aprende.', 
    image: virtualAprendep2,    
    likes: [],
    comments: []
  }
]

export default posts