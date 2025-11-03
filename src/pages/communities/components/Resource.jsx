function Resource ({image, title, category, description}) {
  return (
    <div>      
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-[350px] object-cover rounded-lg"
        />
      </div>      
      <div className="p-5">        
        <h3 className="text-lg font-semibold text-gray-900 mb-0.5">{title}</h3>        
        <p className="text-sm opacity-50 font-medium mb-3">{category}</p>        
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Resource;