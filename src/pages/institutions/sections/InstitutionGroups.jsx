import { Link, useOutletContext } from "react-router-dom"
import { semilleros } from "../../../data"

const InstitutionGroups = () => {

  const data = useOutletContext()
  const researchGroupsId = data.researchGroups
  const baseUrl = "/app/semillero"

  return (
    <section className="grid grid-cols-4 gap-8 mt-10">
      {
        researchGroupsId.map((groupId) => (
          <Link to={`${baseUrl}/${groupId}`} replace>
            <div key={groupId} className="flex flex-col items-center gap-2">
              <img src={semilleros[groupId].logo} alt={semilleros[groupId].name} className="w-[300px] h-[270px] rounded-2xl" />
              <h3 className="font-semibold text-xl">{semilleros[groupId].name}</h3>
              <p className="opacity-85 text-sm">{semilleros[groupId].description}</p>
            </div>        
          </Link>
        ))
      }
    </section>
  )
}

export default InstitutionGroups