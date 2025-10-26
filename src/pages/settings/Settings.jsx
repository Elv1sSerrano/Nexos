import { tabs } from "./constants"
import Tab from "../../components/Tab";
import { Outlet } from "react-router-dom";

function Settings () {
  return (
    <section className="p-4">
      <h1 className="font-bold text-[35px]">Ajustes</h1>
      <ul className="flex flex-row justify-between max-w-[400px] my-6">          
        {
          tabs.map((tab) => (
            <Tab name={tab.name}/>
          ))
        }                             
      </ul>
      <Outlet />
    </section>    
  );
}

export default Settings