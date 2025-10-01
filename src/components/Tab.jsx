const Tabs = ({imgURL, title, description}) => {
    return (
        <div className="flex flex-row gap-4 p-4 bg-white-400 border shadow-md rounded-lg items-center">
            <div className="">
                <img src={imgURL} alt="pasos" className="w-32 h-32 md:w-10 md:h-10 sm:w-40 sm:h-40 rounded-lg 
                bg-purple-100 max-lg:px-2 max-lg:py-2 lg:p-1"/>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="font-semibold font-palanquin max-lg:text-xl">{title}</h2>
                <p className="text-slate-gray font-montserrat max-lg:text-sm max-lg:mt-2">{description}</p>
            </div>
        </div>
    )
}

export default Tabs