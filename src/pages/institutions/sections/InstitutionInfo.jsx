import { useOutletContext } from "react-router-dom"

const InstitutionInfo = () => {

  const data = useOutletContext()
  const info = data.info  

  return (
    <section className="p-4 border-2 border-[#e3d8f3] rounded-lg bg-white-400 flex flex-col gap-3">
      {
        info.map((sec, index) => (
          <section key={index}>
            {sec.title && <h2 className="text-xl font-semibold mb-1">{sec.title}</h2>}
            {sec.content && <p className="opacity-95">{sec.content}</p>}
            {sec.url && <a href={sec.url} className="hover:underline text-purple-600" target="_blank">{sec.url}</a>} 
          </section>
        ))
      }
    </section>
  )
}

export default InstitutionInfo