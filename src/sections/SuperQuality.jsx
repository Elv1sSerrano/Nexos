import { student } from "../assets/images"

const SuperQuality = () => {
    return (
        <section className="flex flex-row justify-around items-center">
            <div>
                <img src={student} alt="student" width={400} className=""/>
            </div>
            <div>
                <h2 className="text-purple-700 w-30 font-bold font-palanquin w-[600px] text-[40px]">Conecta con profesores, estudiantes, proyectos y más</h2>
                <p></p>
            </div>
        </section>
    )
}

export default SuperQuality