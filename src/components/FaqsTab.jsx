import { plus, x, circle } from "../assets/icon"

const FaqsTab = ({question, answer}) => {
    return (
        <div className="flex flex-row gap-6 items-center bg-white-400 border shadow-md rounded-lg w-[700px] p-4 relative">
            <img src={circle} alt="Circle"/>
            <p className="font-semibold font-montserrat text-lg">{question}</p>
            <img src={plus} alt="Más" className="absolute right-1"/>
        </div>
    )
}

export default FaqsTab