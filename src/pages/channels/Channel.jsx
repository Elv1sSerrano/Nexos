import { useParams } from "react-router-dom"
import SideItem from "./components/SideItem"
import Icon from "../../components/ui/Icon"
import { hashtagPath, SearchPath } from "../../constants/iconPaths"
import { institutions } from "../../data"

const Channel = () => {
  const { institutionId } = useParams()
  const data = institutions[institutionId]

  const channel = data.channel 

  return (
    <section className="grid grid-cols-8">
      <aside className="flex flex-col gap-3 bg-[#F5F5F0] p-2 border-l-2 border-t-2 border-b-2 overflow-auto fixed h-screen">
        {
          channel.map((item) => (
            <SideItem item={item} />
          ))
        }
      </aside>
      <main className="w-[920px] bg-[#F9F8F6] ml-[252px] fixed">
        <header className="p-2 flex flex-row items-center justify-between border-t-2 border-l-2 border-r-2">
          <section className="flex flex-row gap-2">
            <Icon paths={hashtagPath} />
            <h2>Hola</h2>
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
            <p>Hola</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>          
            <br/>          
            <br/>          
            <br/>          
            <br/>          
            <br/>          
            <br/>          
            <br/>          
            <br/>          
            <br/>          
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