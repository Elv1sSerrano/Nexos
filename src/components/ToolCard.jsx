const ToolCard = ({ imgURL, name, description }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-20 h-20 rounded-lg bg-purple-700 p-3"/>
            <div>
                <h3 className="mt-5 font-palanquin font-semibold text-xl">{name}</h3>
                <p className="mt-2 font-montserrat leading-normal text-sm">{description}</p>
            </div>
        </div>
    )
}

export default ToolCard
