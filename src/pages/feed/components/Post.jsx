import Icon from '../../../components/Icon'
import { commentPath, likePath, savedPath, sendPath } from '../../../constants/iconPaths'

function Post ({profilePicture, author, date, body, image}) {
  return (
    <div className="border-2 rounded-lg w-[600px]">
      <div className="p-2 flex flex-row justify-start items-center">
        <img className="w-8 object-cover rounded-full mr-2" src={profilePicture} alt=""/>
        <div className="flex flex-col">
          <p className="text-[16px] font-semibold m-0">{author}</p>
          <p className="text-[12px] font-normal m-0">{date}</p>
        </div>
      </div>
      <p className="p-3.5 text-sm">{body}</p>
      <img className="" src={image} alt="" />
      <div className='flex flex-row p-4 justify-around'>
        <button className='flex flex-row gap-1'>
          <Icon paths={likePath}/>
          <p>Me gusta</p>
        </button>
        <button className='flex flex-row gap-1'>
          <Icon paths={commentPath}/>
          <p>Comentar</p>
        </button>        
        <button className='flex flex-row gap-1'>
          <Icon paths={sendPath}/>
          <p>Enviar</p>
        </button>                                    
        <button>
          <Icon paths={savedPath}/>
        </button>        
      </div>
    </div>
  )
}

export default Post