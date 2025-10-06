import { plus, x, circle } from "../assets/icon"

const FaqsTab = ({index, activeIndex, setActiveIndex, question, answer}) => {
    const isActive = index === activeIndex;

    const toggleTab = () => {
        if(isActive) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }
    return (
        <div>
            <div onClick={toggleTab}  
            className="flex flex-row gap-6 items-center bg-white-400 border shadow-md rounded-lg 
            w-[700px] p-4 relative max-md:w-full max-md:gap-2 cursor-pointer">
                <img src={circle} alt="Circle"/>
                <p className="font-semibold justify-start text-left font-montserrat 
                text-lg max-md:text-[10px] max-md:max-w-[200px]">{question}</p>
                <img src={isActive ? x : plus} alt={isActive ? 'Cerrar' : "abrir"} className="absolute right-1"/>
            </div>

            {isActive && (
                <div className="bg-white-200 border shadow-md rounded-lg 
                w-[700px] p-4 relative max-md:w-full max-md:gap-2">
                    <p className="font-normal justify-start text-left font-montserrat 
                    text-md max-md:text-[10px] max-md:max-w-[200px]">{answer}</p>
                </div>
            )}
        </div>        
    )
}

export default FaqsTab