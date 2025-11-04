import { useOutletContext } from "react-router-dom"
import Course from "../components/Course"

function Courses () {

  const data = useOutletContext()
  const courses = data.courses

  return (
    <div className="flex flex-col gap-2">
      {
        courses.map((course) => (
          <Course link={course.link} image={course.image}  title={course.title} description={course.description} 
          author={course.author} date={course.date} recomendations={course.recomendations}
          />
        ))
      }
    </div>
  )
}

export default Courses