const Button = ({label, iconURL}) => {
    return (
        <button className="flex justify-center items-center gap-2 
        px-7 py-4 border font-montserrat text-lg leading-none bg-purple-700 
        rounded-full text-white border-purple-700">
            {label}
            <img 
            src={iconURL} 
            alt="arrow right" 
            className="ml-2 rounded-full w-5 h-5 bg-white"
            />
        </button>
    );
}

export default Button