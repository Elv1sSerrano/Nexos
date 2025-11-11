import { useParams, Outlet } from "react-router-dom";
import { institutions } from "../../data";
import { tabs } from "./constants";
import Tab from "../../components/ui/Tab";

const Institution = () => {

  const { institutionId } = useParams()
  const data = institutions[institutionId]

  return (
    <section>
      <div className="h-56 w-full relative z-10">   
        <img className="w-full max-h-56 object-cover object-top" src={data.banner}/>     
        <div className="w-48 h-48 absolute bottom-[-150px] left-14 z-20">
          <img className="rounded-full" src={data.logo} />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="ml-72 mt-6 w-full">
          <div className="flex flex-row gap-8 items-center">
            <h1 className="font-bold text-4xl">{data.name}</h1>
            <div className="flex flex-row gap-3 items-center">
              <button className="text-white bg-purple-500 px-4 py-2 rounded-md">Seguir</button>
              <button className="border-2 px-4 py-[7px] rounded-md border-gray-700 text-gray-700">Mensaje</button>
            </div>          
          </div>          
          <hr className="border-t-2 border-gray-300 w-full my-4" />
          <ul className="flex flex-row justify-between my-6 mx-14 text-lg">
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
      </div>      
    </section>
  )
}

export default Institution;