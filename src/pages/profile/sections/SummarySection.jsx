import { useOutletContext } from "react-router-dom"
import Education from "../components/Education"
import CommunitieRole from "../components/CommunitieRole"

const SummarySection = () => {

  const data = useOutletContext()

  return (
    <div className="p-4 rounded-xl border-2 bg-white flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Acerca de</h1>
      <h2 className="font-semibold text-xl">Descripción</h2>
      <p className="opacity-85 mb-2">{data.summary}</p>
      <h2 className="font-semibold text-xl">Intereses</h2>
      <ul className="list-disc">
        {
          data.interests.map((interest) => (
            <li>{interest}</li>
          ))
        }
      </ul>      
      <h2 className="font-semibold text-xl">Educación</h2>
      <div className="flex flex-col gap-2">
        {
          data.educations.map((education) => (
            <Education key={education.major} {...education}/>
          ))
        }
      </div>
      {
        data.communities && 
        <>
          <h2 className="font-semibold text-xl">Miembro de</h2>
          <div className="flex flex-col gap-2">
            {
              data.communities.map((communitie) => (
                <CommunitieRole key={communitie.name} {...communitie} />
              ))
            }
          </div>
        </>
      }
      
    </div>
  )
}

export default SummarySection