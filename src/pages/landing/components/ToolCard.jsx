import Icon from "../../../components/ui/Icon"

const ToolCard = ({ iconPath, name, description }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full bg-pinkToPurple bg-no-repeat bg-cover p-4 rounded-2xl">
      <div>                
        <Icon paths={iconPath} className={"w-20 h-20 rounded-full bg-purple-400 p-3"} />
      </div>            
      <div>
        <h3 className="mt-5 font-palanquin font-semibold text-white text-xl">{name}</h3>
        <p className="mt-2 font-montserrat leading-normal text-white-400 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ToolCard
