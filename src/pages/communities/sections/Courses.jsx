import Course from "../components/Course"
import { virtualAprendeCourses } from "../constants"

function Courses () {
  return (
    <div className="flex flex-col gap-2">
      {
        virtualAprendeCourses.map((course) => (
          <Course link={course.link} image={course.image}  title={course.title} description={course.description} 
          author={course.author} date={course.date} recomendations={course.recomendations}
          />
        ))
      }
    </div>
  )
}

export default Courses