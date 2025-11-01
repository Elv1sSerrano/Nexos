function Resource ({image, title, category, description}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 w-[900px]">      
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
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