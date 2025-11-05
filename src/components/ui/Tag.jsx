import Icon from "./Icon"

const Tag = ({bg, icon, category}) => {
  return (
    <div className={`${bg} rounded-3xl flex flex-row gap-2 p-2 max-w-[150px] my-2`}>
      <Icon paths={icon} className={"text-white"} />
      <p className="text-white">{category}</p>
    </div>
  )
}

export default Tag