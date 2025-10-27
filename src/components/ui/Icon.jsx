function Icon ({ className, paths }) {
  if (!paths || paths.length === 0) {
    return null; 
  }

  return (
    <svg  
      className={className}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
      fill="currentColor" 
      viewBox="0 0 24 24" 
    >    
    {paths.map((path, index) => (
      <path key={index} d={path} />
    ))}
    </svg>
  );
}

export default Icon;