import { useOutletContext } from "react-router-dom"
import Course from "../components/Course"
import EmptyDynamicSection from "../components/EmptyDynamicSection";
import Carousel from "../../../components/ui/Carousel";
import OvaProductCard from "../components/OvaProductCard";

function Courses () {

  const data = useOutletContext()
  if (data.isDynamic) return <EmptyDynamicSection label="productos" />;
  const products = data.products;
  const courses = data.courses || [];

  if (products?.length) {
    return (
      <div className="space-y-6">
        <section className="surface-card p-5 sm:p-7"><p className="text-center text-3xl font-bold text-[#2e86c1]">OVAs</p><p className="mt-5 text-sm leading-7 text-[#454245] sm:text-base">Los Objetos Virtuales de Aprendizaje son herramientas educativas digitales interactivas, modulares y reutilizables. Integran recursos como videos, simulaciones y ejercicios para favorecer una experiencia de aprendizaje autónoma, flexible y dinámica.</p><h1 className="mt-7 text-xl font-bold text-[#1f618d] sm:text-2xl">Nuestros OVAs</h1><p className="mt-3 border-l-4 border-[#2e86c1] bg-[#f9f9f9] p-3 text-sm leading-6 text-[#555]">En esta plataforma encontrarás una colección de OVAs desarrollados con un enfoque pedagógico para apoyar un aprendizaje efectivo, claro y entretenido.</p></section>
        <Carousel title="Productos de aprendizaje" items={products} type={OvaProductCard} variant="product" />
      </div>
    );
  }

  return (
    <Carousel title="Productos" items={courses} type={Course} variant="course" />
  )
}

export default Courses
