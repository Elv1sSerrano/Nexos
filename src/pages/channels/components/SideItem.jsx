import Icon from "../../../components/ui/Icon"
import { hashtagPath } from "../../../constants/iconPaths"

const SideItem = ({item}) => {

  const items = item.items

  return (
    <section>
      <h3 className="mb-2">{item.name}</h3>
      <ul className="flex flex-col gap-3">
        <li>      
          {
            items.map((item) => (
              <section className="flex flex-row gap-2">
                <Icon paths={hashtagPath} />
                <p>{item.name}</p>
              </section>          
            ))
          }
        </li>
        <hr className="border-t-2 border-gray-300 w-full my-2" />   
      </ul>
    </section>
  )
}

export default SideItem