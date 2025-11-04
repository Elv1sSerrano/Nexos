import { Outlet, useParams } from "react-router-dom";
import Tab from "../../components/ui/Tab";
import { tabs } from "./constants"
import Account from "../../components/ui/Account";
import { semilleros } from "../../data";

function Communitie () {

  const { semilleroId } = useParams()
  const data = semilleros[semilleroId]

  //simplificación de datos de la data
  const participants = data.participants
  const institutions = data.institutions

  if (!data) return <p className="text-4xl font-bold font-inter">No se encontró la página que estás buscando</p>

  return (
    <section>
      <div className="h-56 w-full relative z-10">   
        <img src={data.banner}/>     
        <div className="w-48 h-48 absolute bottom-[-150px] left-14 z-20">
          <img className="rounded-full" src={data.logo} />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="ml-72 mt-6 max-w-[650px]">
          <div className="flex flex-row gap-8 items-center">
            <h1 className="font-bold text-4xl">Virtual Aprende</h1>
            <div className="flex flex-row gap-3 items-center">
              <button className="text-white bg-purple-500 px-4 py-2 rounded-md">Seguir</button>
              <button className="border-2 px-4 py-[7px] rounded-md border-gray-700 text-gray-700">Mensaje</button>
            </div>          
          </div>          
          <hr class="border-t-2 border-gray-300 w-full my-4" />
          <ul className="flex flex-row justify-between my-6">
            {
              tabs.map((tab) => (
                <Tab key={tab.name} name={tab.name} />
              ))
            }
          </ul>
          <div className="ml-[-288px]">            
            <Outlet context={data} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="mt-10">
            <h3 className="font-semibold text-xl mb-3">Nexos</h3>
            <div className="flex flex-col gap-2">
              {institutions.map((nexo) => (
                <Account key={nexo.label} label={nexo.label} image={nexo.image} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">Miembros</h3>
            <div className="flex flex-col gap-5">
              {participants.map((participant) => (
                <Account key={participant.id} label={participant.name} image={participant.Picture} />
              ))}
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}

export default Communitie