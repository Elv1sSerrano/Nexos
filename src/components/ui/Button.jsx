import Icon from "./Icon"

const Button = ({label, iconPath}) => {
    return (
        <button className="flex justify-center items-center gap-2 
        px-7 py-4 border font-montserrat text-lg leading-none bg-purple-700 
        rounded-full text-white border-purple-700">
            {label}
            <Icon paths={iconPath} className={"ml-2 rounded-full w-5 h-5 bg-white text-purple-700"} />            
        </button>
    );
}

export default Button