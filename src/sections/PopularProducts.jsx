import { tools } from "../constants"
import ToolCard from "../components/ToolCard"

const PopularProducts = () => {
    return (
        <section id="herramientas"
        className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Aprende todos los días</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Usa las herramientas a disposición de la plataforma para facilitar tu proceso de aprendizaje
                y mantenerte actualizado con las últimas tendencias y conocimientos en tu área de interés.
                </p>
            </div>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
                {
                    tools.map((tool) => (
                        <ToolCard
                        key={tool.name}
                        {...tool}
                        />
                    ))
                }
                
            </div>            
        </section>
    )
}

export default PopularProducts