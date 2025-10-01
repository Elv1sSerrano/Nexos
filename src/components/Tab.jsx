const Tabs = ({imgURL, title, description}) => {
    return (
        <div className="flex flex-row gap-4 p-4 bg-white-400 border shadow-md rounded-lg">
            <div className="">
                <img src={imgURL} alt="pasos" className="w-16 h-16 rounded-lg bg-purple-100 p-3"/>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="font-semibold font-palanquin max-lg:text-md">{title}</h2>
                <p className="text-slate-gray font-montserrat max-lg:text-[12px]">{description}</p>
            </div>
        </div>
    )
}

export default Tabs