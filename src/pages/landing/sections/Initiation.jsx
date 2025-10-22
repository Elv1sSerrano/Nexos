import { student } from "../../../assets/images"
import { steps } from "../../../constants"
import Tabs from "../components/Tab"

const Initiation = () => {
    return (
        <section className="flex flex-row justify-around items-center">
            <div className="max-lg:hidden">
                <img src={student} alt="student" width={400} className=""/>
            </div>
            <div>
                <div className="flex justify-start">
                    <h2 className="text-purple-700 font-bold font-palanquin 
                    text-4xl max-lg:text-[40px] max-lg:leading-tight md:w-[700px]">Conecta con profesores, estudiantes, proyectos y más</h2>
                </div>                
                <div className="mt-10 flex flex-col gap-6">
                    {
                        steps.map((tab) => (
                            <Tabs
                            key={tab.title}
                            {...tab}
                            />
                        ))
                    }
                </div>                
            </div>
        </section>
    )
}

export default Initiation