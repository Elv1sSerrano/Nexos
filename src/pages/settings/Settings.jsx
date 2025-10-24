import { NavLink } from "react-router-dom";
import Card from "./components/Card"
import { settingsFields, tabs } from "./constants"
import Tab from "../../components/Tab";

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
      {settingsFields.map((setting) => (
        <Card title={setting.title} field={setting.field} value={setting.value} />
      ))}
    </section>    
  );
}

export default Settings