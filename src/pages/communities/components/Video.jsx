function Video ({image, date, title, author}) {
  return (
    <div className="p-4">      
        <div className="flex flex-row gap-3">
          <img className="rounded-2xl w-1/2" src={image} alt={title}/>
          <div className="flex flex-col gap-1 justify-center">            
            <h1 className="font-bold mb-1">{title}</h1>                                                
            <p className="opacity-70">{author}</p>            
            <p>{date}</p>            
          </div>
        </div>      
    </div>
  )
}

export default Video;