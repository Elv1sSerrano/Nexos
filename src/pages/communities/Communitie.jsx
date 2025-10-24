import Tab from "../../components/Tab";
import { tabs } from "./constants";

function Communitie () {
  return (
    <section>
      <div className="bg-black h-48 w-full relative z-10">
        <div className="rounded-full bg-slate-400 w-48 h-48 absolute bottom-[-150px] left-14 z-20"></div>
      </div>
      <div className="ml-72 mt-6 max-w-[650px]">
        <div className="flex flex-row gap-8 items-center">
          <h1 className="font-bold text-4xl">Virtual Aprende</h1>
          <button className="text-white bg-purple-500 px-4 py-2 rounded-md">Seguir</button>
          <button className="border-2 px-4 py-2 rounded-md border-gray-700 text-gray-700">Mensaje</button>
        </div>
        <p className="mt-2">El Grupo de investigación interinstitucional en ambientes virtuales de aprendizaje "Virtus" es una organización avalada por ... ver más</p>
        <hr class="border-t-2 border-gray-300 w-full my-4" />
        <ul className="flex flex-row justify-between my-6">
          {
            tabs.map((tab) => (
              <Tab name={tab.name} />
            ))
          }
        </ul>        
      </div>
    </section>
  );
}

export default Communitie