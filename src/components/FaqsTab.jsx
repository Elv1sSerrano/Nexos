import { plus, x, circle } from "../assets/icon"

const FaqsTab = ({question, answer}) => {
    return (
        <div className="flex flex-row gap-6 items-center bg-white-400 border shadow-md rounded-lg 
        w-[700px] p-4 relative max-md:w-full max-md:gap-2 cursor-pointer">
            <img src={circle} alt="Circle"/>
            <p className="font-semibold justify-start text-left font-montserrat 
            text-lg max-md:text-[10px] max-md:max-w-[200px]">{question}</p>
            <img src={plus} alt="Más" className="absolute right-1"/>
        </div>
    )
}

export default FaqsTab