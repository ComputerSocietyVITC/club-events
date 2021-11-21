import { ReactComponent as Blob1 } from '../Assets/Svg/blob1.svg';
import { ReactComponent as Blob2 } from '../Assets/Svg/blob2.svg';
import { ReactComponent as Illustration } from '../Assets/Svg/illustration.svg';
import EventInfo from '../Components/EventInfo';
import Button from '../Components/Button';



const Home = () => {
  return (
    <div className='w-100vh flex flex-1 flex-col h-full overflow-hidden'>
      <div className='flex flex-col justify-start'>
        <Blob1 className='h-40 w-48 sm:h-48 sm:w-56 md:h-72 md:w-80 lg:h-sm lg:w-md' />
        <div className='ml-8 mt-8 text-4xl absolute text-white font-bold sm:text-5xl md:text-6xl md:mt-16 lg:mt-28 lg:ml-24 lg:text-8xl '>
          <h1>Vit Chennai</h1>
          <h1>Club Events</h1>
        </div>
        <EventInfo />


        <Button />
      </div>
      <div />
      <div className='flex justify-end  xl:-mt-40'>
        <Illustration className='h-64 w-48 absolute  -mt-28 sm:w-64 md:h-72 md:w-80  md:-mt-36 lg:h-sm lg:w-md lg:-mt-64' />
        <Blob2 className='h-40 w-52  sm:h-40 sm:w-48 md:h-64 md:w-72 lg:h-md lg:w-lg' />
      </div>
    </div >









  )
}



export default Home;
