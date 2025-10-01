import { forums, blogs, tutorials, ebooks, user, education, newspaper } from "../assets/icon"

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },    
    { href: "#herramientas", label: "Herramientas" },
    { href: "#contact-us", label: "Contact Us" },
]

export const tools = [
    {imgURL: forums, name: "Foros", description: "Join our community forums to discuss, share, and connect with fellow enthusiasts."},
    {imgURL: blogs, name: "Blogs", description: "Read our latest blogs for insights, tips, and stories from industry experts."},
    {imgURL: tutorials, name: "Tutoriales", description: "Explore step-by-step tutorials to enhance your skills and knowledge."},
    {imgURL: ebooks, name: "ebooks", description: "Download free ebooks on various topics to deepen your understanding and expertise."}
]

export const steps = [
    {imgURL: user, title: "Regístrate y inicia", description: "Crea tu cuenta y agrega tu información profesional relevante."},
    {imgURL: education, title: "Explora la comunidad", description: "Conoce un ecosistema enfatizado al aprendizaje."},
    {imgURL: newspaper, title: "Mantente informado", description: "Sigue explorando y aprendiendo de grandes profesionales."}
]