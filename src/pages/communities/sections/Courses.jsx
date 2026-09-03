import { useOutletContext } from "react-router-dom"
import Course from "../components/Course"
import EmptyDynamicSection from "../components/EmptyDynamicSection";

function Courses () {

  const data = useOutletContext()
  if (data.isDynamic) return <EmptyDynamicSection label="cursos" />;
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
