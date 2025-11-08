const CommunitieRole = ({logo, name, role}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img src={logo} alt={name} className="w-8 rounded-full"/>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="opacity-85">{role}</p>
      </div>
    </div>
  )
}

export default CommunitieRole