const CommunitieRole = ({logo, name, role}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img src={logo} alt={name} className="w-30"/>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="opacity-85">{role}</p>
      </div>
    </div>
  )
}

export default CommunitieRole