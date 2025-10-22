import { forums, blogs, tutorials, ebooks, user, education, newspaper } from "../assets/icon"

export const navLinks = [
    { href: "#home", label: "Inicio" },    
    { href: "#herramientas", label: "Herramientas" },
    { href: "#faqs", label: "Preguntas Frecuentes" },
]

export const tools = [
    {imgURL: forums, name: "Foros", description: "Participa en discusiones y comparte tus ideas con otros miembros de la red."},
    {imgURL: blogs, name: "Blogs", description: "Escribe y comparte tus experiencias y conocimientos con la comunidad."},
    {imgURL: tutorials, name: "Tutoriales", description: "Accede a una variedad de cursos en línea para mejorar tus habilidades."},
    {imgURL: ebooks, name: "ebooks", description: "Descarga libros electrónicos sobre temas relacionados con tus intereses."}
]

export const steps = [
    {imgURL: user, title: "Regístrate y inicia", description: "Crea tu cuenta y agrega tu información profesional relevante."},
    {imgURL: education, title: "Explora la comunidad", description: "Conoce un ecosistema enfatizado al aprendizaje."},
    {imgURL: newspaper, title: "Mantente informado", description: "Sigue explorando y aprendiendo de grandes profesionales."}
]

export const faqs = [
  {
    question: "¿Qué es Nexos y cuál es su propósito?",
    answer: "Nexos es una red social de aprendizaje diseñada para conectar semilleros de investigación, docentes y estudiantes en un mismo entorno digital. Su propósito es fomentar la colaboración, visibilizar proyectos académicos y facilitar el acceso a contenido educativo verificado."
  },
  {
    question: "¿Quiénes pueden unirse a la plataforma?",
    answer: "En esta primera fase, Nexos está dirigida a los semilleros de investigación y sus participantes. En futuras versiones, se abrirá a toda la comunidad académica interesada en compartir y adquirir conocimiento."
  },
  {
    question: "¿Qué tipo de contenido puedo encontrar en Nexos?",
    answer: "Los usuarios pueden acceder a cursos, foros temáticos, blogs académicos y una biblioteca digital de ebooks. Todo el contenido proviene de fuentes verificadas y de la comunidad educativa, garantizando su calidad y pertinencia."
  },
  {
    question: "¿Cómo puedo publicar contenido o mostrar el trabajo de mi semillero?",
    answer: "Los miembros autorizados de los semilleros pueden crear publicaciones, compartir avances de proyectos, participar en debates y subir materiales académicos desde su perfil dentro de la plataforma."
  },
  {
    question: "Nexos tiene algún costo para los usuarios?",
    answer: "No. Durante esta fase de implementación, Virtus es completamente gratuita para todos los semilleros y participantes."
  },
  {
    question: "¿Qué diferencia a Nexos de otras plataformas educativas?",
    answer: "A diferencia de otras plataformas, Nexos integra la dinámica social propia de las redes con el rigor académico, promoviendo la interacción entre pares, la difusión de proyectos con impacto social y la construcción colectiva de conocimiento."
  },
  {
    question: "¿Cómo garantiza Nexos la calidad del contenido compartido?",
    answer: "El contenido proviene de semilleros y docentes vinculados a instituciones académicas, y pasa por una verificación interna antes de ser publicado. Esto asegura que la información compartida sea confiable y de valor educativo."
  }
];
