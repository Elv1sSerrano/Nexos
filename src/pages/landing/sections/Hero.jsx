import Button from "../../../components/ui/Button.jsx"
import { arrowRight } from "../../../assets/icon/index.js"
import { heroImage } from "../../../assets/images/index.js";
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <section id="home" className="w-full p-2 flex xl:flex-row flex-col justify-center 
        min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-0">                
                <h1 className="mt-10 lg:w-[600px] font-palanquin text-8xl max-sm:text-[45px]  max-sm:leading-none font-bold max-sm:mt-32">
                    <span className=" text-nowrap relative z-10">El lugar donde</span> 
                    <br />
                    los <span className="text-purple-700 inline-block mt-3">semilleros</span> crecen juntos
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Descubre, comparte y colabora en proyectos de investigación que están transformando el futuro.
                </p>
                <NavLink to="/app/inicio">
                    <Button  label="Recorre la plataforma" iconURL={arrowRight}/>    
                </NavLink>                
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 max-sm:py-5">
                <img src={heroImage} alt="Red social"
                className="object-contain relative z-10"
                />
            </div>
        </section>
    );
}

export default Hero