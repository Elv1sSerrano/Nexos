const ExternalLink = ({site, url}) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-medium">{site}</h4>
      <a href={url} target="_blank" className="opacity-85 text-purple-800 hover:text-purple-950">{url}</a>
    </div>
  )
}

export default ExternalLink