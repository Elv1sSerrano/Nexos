import { useOutletContext } from "react-router-dom"
import Project from "../components/Project"
import EmptyDynamicSection from "../components/EmptyDynamicSection";
import Carousel from "../../../components/ui/Carousel";

function Projects () {

  const data = useOutletContext()
  if (data.isDynamic) return <EmptyDynamicSection label="proyectos" />;
  const projects = data.projects

  return (
    <Carousel title="Proyectos" items={projects} type={Project} variant="project" />
  )
}

export default Projects
