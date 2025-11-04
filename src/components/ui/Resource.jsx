import Icon from "./Icon";
import { arrowUpRight } from "../../constants/iconPaths";

function Resource ({image, title, category, description, url}) {
  return (
    <div>      
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[200px] w-[350px] object-cover rounded-lg"
        />
      </div>      
      <div className="mt-6">
        <div className="text-gray-900 mb-0.5 hover:text-purple-700 transition duration-300">
          <a href={url} target="_blank" className="flex flex-row gap-2">
            <h3 className="text-lg font-semibold">
              {title}
            </h3>                  
            <Icon paths={arrowUpRight} className={""} />
          </a>
        </div>        
        <p className="text-sm opacity-50 font-medium mb-3">{category}</p>        
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Resource;