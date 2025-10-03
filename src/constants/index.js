import { forums, blogs, tutorials, ebooks, user, education, newspaper } from "../assets/icon"

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },    
    { href: "#herramientas", label: "Herramientas" },
    { href: "#contact-us", label: "Contact Us" },
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
    {question: "¿Cómo puedo registrarme en la plataforma?", answer: "Para registrarte, haz clic en el botón de 'Sign Up' en la esquina superior derecha y completa el formulario con tu información."},
    {question: "¿Qué tipo de contenido puedo encontrar en la plataforma?", answer: "Nuestra plataforma ofrece una variedad de contenido, incluyendo foros, blogs, tutoriales y ebooks sobre diversos temas."},
    {question: "¿Es gratis unirse a la comunidad?", answer: "Sí, unirse a nuestra comunidad es completamente gratis. Puedes acceder a muchos recursos sin costo alguno."},
    {question: "¿Cómo puedo contribuir con contenido?", answer: "Puedes contribuir escribiendo blogs, participando en foros o creando tutoriales. Simplemente inicia sesión y utiliza las herramientas disponibles para compartir tu conocimiento."},
    {question: "¿Puedo contactar a otros miembros de la comunidad?", answer: "Sí, puedes enviar mensajes directos a otros miembros y participar en discusiones en los foros."},
]