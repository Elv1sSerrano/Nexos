function Video ({image, title, author}) {
  return (
    <div className="p-4 flex flex-col gap-2 bg-slate-100">      
      <img className="rounded-2xl w-full h-[250px]" src={image} alt={title} />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="opacity-80">{author}</p>
    </div>
  )
}

export default Video;