import { useOutletContext } from "react-router-dom"
import Education from "../components/Education"
import CommunitieRole from "../components/CommunitieRole"
import ExternalLink from "../components/ExternalLink"

const SummarySection = () => {

  const data = useOutletContext()

  return (
    <div className="p-4 rounded-xl border-2 bg-white flex flex-col gap-2">      
      <h2 className="font-semibold text-2xl">Descripción</h2>
      <p className="opacity-85 mb-2">{data.summary}</p>
      <h2 className="font-semibold text-2xl">Intereses</h2>
      <ul className="list-disc pl-4 mb-2">
        {
          data.interests.map((interest) => (
            <li>{interest}</li>
          ))
        }
      </ul>      
      <h2 className="font-semibold text-2xl">Educación</h2>
      <div className="flex flex-col gap-2 mb-2">
        {
          data.educations.map((education) => (
            <Education key={education.major} {...education}/>
          ))
        }
      </div>
      {
        data.communities && (
          <>
            <h2 className="font-semibold text-2xl">Miembro de</h2>
            <div className="flex flex-col gap-2">
              {
                data.communities.map((communitie) => (
                  <CommunitieRole key={communitie.name} {...communitie} />
                ))
              }
            </div>
          </>
        )
      }
      {
        data.externalResources && (
          <>
            <h2 className="font-semibold text-2xl">Enlaces adicionales</h2>
            <div className="flex flex-col gap-2">
              {
                data.externalResources.map((resource) => (
                  <ExternalLink key={resource.site} {...resource} />
                ))
              }
            </div>
          </>
        )        
      }
    </div>
  )
}

export default SummarySection