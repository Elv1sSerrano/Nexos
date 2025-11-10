import savedPosts from "../../data/savedPosts"
import HeadlessPost from "../../components/ui/HeadlessPost"
import { SearchPath } from "../../constants/iconPaths"

function Saved () {
  return (
    <div>
      <div className="flex flex-row justify-center mb-4">
        <button className="absolute left-4 top-3.5"><Icon className="text-[#171616ff] hover:text-purple-500" paths={SearchPath}/></button>
        <input type="text" name="text" placeholder="Buscar" className="pl-12 border rounded-full p-3 w-[470px] max-sm:w-full outline-none placeholder:font-montserrat"/>
      </div>
      <div className="flex flex-col items-center gap-3">
        {savedPosts.map((post) => (
          <HeadlessPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default Saved