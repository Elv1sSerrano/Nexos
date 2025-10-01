import Button from "../components/Button.jsx"
import { arrowRight } from "../assets/icon"
import { heroImage } from "../assets/images";

const Hero = () => {
    return (
        <section id="home" className="w-full p-2 flex xl:flex-row flex-col justify-center 
        min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-purple-700">Our summer collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-none font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10">The New Arrival</span> 
                    <br />
                    <span className="text-purple-700 inline-block mt-3">Nike</span> shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish nike arrivals, quality comfort,
                    and innovative designs for your active life.
                </p>
                <Button  label="Recorre la plataforma" iconURL={arrowRight}/>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={heroImage} alt="Red social"
                className="object-contain relative z-10"
                />
            </div>
        </section>
    );
}

export default Hero