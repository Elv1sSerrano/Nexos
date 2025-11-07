import Icon from "../../../components/ui/Icon"
import { educationPath } from "../../../constants/iconPaths"

const Education = ({institution, major}) => {
  return (
    <div className="flex flex-row gap-4 p-4 items-center">
      <Icon className={"bg-purple-900"} paths={educationPath} />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{major}</h3>
        <p className="opacity-85">{institution}</p>
      </div>      
    </div>
  )
}

export default Education