import ReactPlayer from 'react-player';
import Account from './Account';

const StorieContainer = ({url, account}) => {
  return (
    <div className='flex flex-col p-4 bg-slate-300 rounded-xl'>      
      <div className='flex justify-center'>    
        <Account additionalImageStyle={"w-[50px]"} additionalStyle={"font-semibold text-[18px]"} {...account} />   
      </div>
      <br></br>   
      <div className='flex justify-center'>
        <ReactPlayer     
          src={url}
          playing={true}
          volume={0}
          controls={true}
          width={960}
          height={540}
        />
      </div>
    </div>
  )
}

export default StorieContainer