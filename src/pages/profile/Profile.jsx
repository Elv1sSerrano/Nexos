import { Outlet, useParams } from "react-router-dom"
import { users } from "../../data"
import { tabs } from "./constants"
import Tab from "../../components/ui/Tab"

function Profile () {

  const { userId } = useParams()
  const data = users[userId]
  
  console.log(data)
  
  return (
    <section className="p-4 flex flex-col gap-2">
      <h1 className="font-bold text-[35px] mb-8">Perfil</h1>
      <div className="flex flex-col items-center gap-2">
        <img src={data.image} className="w-[200px] h-[200px] rounded-full object-cover" />
        <h3 className="font-semibold text-2xl">{data.name}</h3>
        <p className="font-medium opacity-80">{data.description}</p>
      </div>
      <ul className="flex flex-row justify-around my-6 mx-16">
        {
          tabs.map((tab) => (
            <Tab key={tab.name} name={tab.name} />
          ))
        }
      </ul>
      <div className="ml-[-288px]">            
        <Outlet context={data} />
      </div>
    </section>
  )
}

export default Profile