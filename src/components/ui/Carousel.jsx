import Icon from "./Icon"
import { caretLeftPath, caretRightPath } from "../../constants/iconPaths";
import Post from "./Post";
import Resource from "../../pages/communities/components/Resource";
import Event from "../../pages/communities/components/Event"

function Carousel ({title, items, Type}) {

  function renderItems() {
    switch (Type) {
      case Post:
        return (
          <div className="flex flex-row gap-2">
            {items.map((item, index) => (          
              <Type key={index} {...item}/>
            ))}
          </div>          
        ) 
      case Resource:
        return (
          <div className="flex flex-row gap-2">
            {items.map((item, index) => (          
              <Type key={index} {...item}/>
            ))}
          </div> 
        )
      case Event:
        return (
          <div className="flex flex-row gap-2">
            {items.map((item, index) => (          
              <Type key={index} {...item}/>
            ))}
          </div> 
        )               
    }
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex flex-row gap-2">
          <button><Icon paths={caretLeftPath} /></button>
          <button><Icon paths={caretRightPath}/></button>
        </div>        
      </div>
      {renderItems()}      
    </div>
  )
}

export default Carousel;