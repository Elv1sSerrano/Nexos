import { useParams } from "react-router-dom"
import SideItem from "./components/SideItem"
import Icon from "../../components/ui/Icon"
import { hashtagPath, SearchPath } from "../../constants/iconPaths"
import { institutions } from "../../data"
import { logoEtitc } from "../../assets/images"

const Channel = () => {
  const { institutionId } = useParams()
  const data = institutions[institutionId]

  const channel = data.channel 

  return (
    <section className="grid grid-cols-8">
      <aside className="col-span-2 flex flex-col gap-3 bg-[#F5F5F0] p-2 border-l-2 border-t-2 border-b-2 overflow-auto  h-screen">
        {
          channel.map((item) => (
            <SideItem item={item} />
          ))
        }
      </aside>
      <main className="w-[900px] bg-[#F9F8F6] col-span-6">
        <header className="p-2 flex flex-row items-center justify-between border-t-2 border-l-2 border-r-2">
          <section className="flex flex-row gap-2">
            <Icon paths={hashtagPath} />
            <h2>Facultad de sistemas</h2>
          </section>
          <section className="relative flex flex-row justify-center">
            <button className="absolute left-4 top-3.5">
              <Icon className="text-[#171616ff] hover:text-purple-500" paths={SearchPath}/>
            </button>
            <input type="text" name="text" placeholder="Buscar" className="pl-12 border rounded-full p-3 w-[470px] max-sm:w-full outline-none placeholder:font-montserrat"/>
          </section>
        </header>
        <section className="relative p-2 border-2">
          <div>
            <div>
              <div className="flex flex-row gap-2 relative">
                <img className="w-11 rounded-full absolute" src={logoEtitc} />
                <div className="flex flex-col gap-2 ml-14 mb-4">
                  <h2 className="text-lg font-medium">Mesa de ayuda</h2>
                  <p className="opacity-90">
                    Reciban un cordial saludo, Nos permitimos informar que el día 05 de noviembre de 2025, se realizarán actividades de mantenimiento y actualización del sistema de información de atención al ciudadano SIAC. Razón por la cual se generara indisponibilidad del servicio.
                    De antemano presentamos excusas por los posibles inconvenientes y agradecemos su comprensión, estamos trabajando para mejorar continuamente.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 relative">
                <img className="w-11 rounded-full absolute" src={logoEtitc} />
                <div className="flex flex-col gap-2 ml-14">
                  <h2 className="text-lg font-medium">Auxiliar Sistemas</h2>
                  <p className="opacity-90">
                    En el marco de nuestro compromiso con la mejora continua de la calidad educativa, solicitamos su valiosa colaboración brindándonos su opinión sobre el desarrollo de las clases y el cumplimiento de los horarios de las asignaturas que cursa durante este semestre.
                  </p>
                  <p>
                    Su retroalimentación es fundamental, ya que nos permitirá evaluar si las clases se han llevado a cabo de manera presencial y en los tiempos establecidos, así como conocer su nivel de satisfacción con la asignatura en general.
                  </p>
                  <p>
                    Agradecemos que dedique unos minutos para diligenciar el siguiente formulario:
                  </p>
                  <a className="text-blue-600 underline">
                    https://forms.office.com/r/wXBUny8wBJ
                  </a>
                  <p>
                    Le aseguramos que las observaciones serán analizadas y compartidas con los docentes para su consideración, garantizando en todo momento la confidencialidad de su identidad.
                  </p>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
          <section className="sticky bottom-3 flex flex-row items-center gap-3 rounded-md border-2 min-w-full p-2">
            <button className="text-2xl opacity-70">+</button>
            <input type="text" placeholder="Mensaje"/>
          </section>
        </section>
      </main>
    </section>
  )
}

export default Channel