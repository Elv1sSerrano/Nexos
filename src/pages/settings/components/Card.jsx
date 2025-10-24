import Icon from "../../../components/Icon";
import { rightArrowPath } from "../../../constants/iconPaths";

function Card ({title, field, value}) {
  return (
    <section>      
      {title && <h2 className="font-semibold text-lg my-3">{title}</h2>}
      <button className="w-full flex flex-row my-5 justify-between rounded-md bg-gray-100 p-4">
        <h3>{field}</h3>
        <div className="flex flex-row gap-2 items-center text-gray-500">
          <p>{value}</p>
          <Icon paths={rightArrowPath}/>
        </div>
      </button>
    </section>
  )
}

export default Card;