function Project ({ background, date, projectName, projectType, projectPercentage, participants, projectProgressColor }) {
  return (
    <div className={`rounded-md max-w-96 p-2 shadow-md`} style={{backgroundColor : background}}>      
      <p className="text-slate-gray text-sm">{date}</p>
      <div className="flex flex-col items-center justify-center mt-1">
        <h3 className="font-bold text-lg">{projectName}</h3>
        <p className="text-base">{projectType}</p>
      </div>
      <div className="flex flex-col mt-1 gap-2">
        <h4 className="text-base font-semibold">Progreso</h4>
        <input 
        className="custom-range" 
        style={{ '--progress-value': `${projectPercentage}%`, '--progress-color': `${projectProgressColor}` }} 
        type="range" 
        value={projectPercentage} min={0} max={100}
        />
        <p className="font-semibold text-right">{projectPercentage}%</p>
      </div>
      <hr className="border-t-2 border-white w-full my-4" />   
      <h3 className="mb-2">Participantes</h3>
      <div className="flex flex-row gap-0.5">
        {
          participants.map((participant) => (
            <img key={participant.id} className="w-8 rounded-full" src={participant.picture} alt={participant.name} />
          ))
        }
      </div>
    </div>
  )
}

export default Project