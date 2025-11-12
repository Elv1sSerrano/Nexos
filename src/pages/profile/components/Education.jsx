import Icon from "../../../components/ui/Icon"
import { educationPath } from "../../../constants/iconPaths"

const Education = ({institution, major}) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="p-3 rounded-full bg-purple-500">
        <Icon paths={educationPath} />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-lg font-medium">{major}</h3>
        <p className="opacity-85">{institution}</p>
      </div>      
    </div>
  )
}

export default Education