function Event ({image, title}) {
  return (
    <div className="relative">
      <img className="h-[500px] w-[300px] object-cover brightness-75" src={image} alt={title} />
      <div className="absolute top-0">
        <h3 className="bg-purple-700 text-white font-bold p-4">{title}</h3>
      </div>      
    </div>
  )
}

export default Event