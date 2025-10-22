import { diversity, experience, videocall, ww } from "../../../assets/images"

const AdditionalInfo = () => {
    return (
        <section class="dark:bg-[#3a0061]">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Descubre nuevas oportunidades al interactuar con otros</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Ya sea para iniciar un proyecto, encontrar recursos, resolver dudas o simplemente aprender algo nuevo, Nexos facilita conexiones que amplían tus horizontes y consolidan tu camino como aprendiz o investigador.</p>                    
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={videocall} alt="videollamada" />
                </div>                
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Explora conocimiento desde diferentes voces y perspectivas</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Nexos te conecta con profesionales de la educación y expertos en múltiples áreas. Accede a cursos gratuitos, participa en discusiones académicas y enriquece tu aprendizaje a través del diálogo con quienes viven la investigación desde dentro.</p>                    
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={diversity} alt="mockup" />
                </div>                
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">No solo aprendes: Aportas</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Publica tus ideas, comparte artículos, comenta descubrimientos y participa en grupos temáticos. En Nexos, cada aporte fortalece el ecosistema educativo y te permite posicionarte como parte activa de una comunidad comprometida con el saber.</p>                    
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={ww} alt="mockup" />
                </div>                
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Encuentra información respaldada por experiencia académica</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A diferencia de otras redes, aquí el contenido es creado por personas profundamente vinculadas al entorno educativo. Esto garantiza una experiencia basada en calidad, profundidad y propósito, sin perder la flexibilidad de un entorno social.</p>                     
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={experience} alt="mockup" />
                </div>                
            </div>            
        </section>
        
    )
}

export default AdditionalInfo