import ReactPlayer from 'react-player';
import Account from './Account';

const StorieContainer = ({url, account}) => {
  return (
    <div className='flex flex-col p-4 bg-slate-300 rounded-xl'>      
      <Account additionalImageStyle={"w-18"} additionalStyle={"text-12"} {...account} />   
      <br></br>   
      <div className='flex justify-center'>
        <ReactPlayer         
          src={url}
          playing={true}
          volume={null}
          controls={false}
          width={960}
          height={540}
        />
      </div>
    </div>
  )
}

export default StorieContainer