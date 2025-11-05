const AccountsList = ({profilePicture, name}) => {
  return (
    <div className="flex flex-col gap-1 items-center max-w-14">
      <img className="w-14 rounded-full border-2 border-gray-300" src={profilePicture} alt={name} />
      <p className="opacity-75 text-center leading-none">{name}</p>
    </div>
  )
}

export default AccountsList