import Icon from "../../../components/ui/Icon"
import { educationPath } from "../../../constants/iconPaths"

const Education = ({institution, major}) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Icon className={"bg-purple-900 rounded-full"} paths={educationPath} />
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-lg font-medium">{major}</h3>
        <p className="opacity-85">{institution}</p>
      </div>      
    </div>
  )
}

export default Education