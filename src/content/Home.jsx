import { ReactComponent as Blob1 } from '../Assets/Svg/blob1.svg';
import { ReactComponent as Blob2 } from '../Assets/Svg/blob2.svg';
import { ReactComponent as Illustration } from '../Assets/Svg/illustration.svg';
import EventInfo from '../Components/EventInfo';
import Button from '../Components/Button';



const Home = () => {
  return (
    <div className='w-full flex flex-row '>

      <div className='flex flex-col   flex-1'>
        <div className='absolute mmd:mt-4  '>

          <h1 className='md:text-3xl px-6 mt-8  font-bold text-white  mmd:mt-12 mmd:ml-8 mlg:text-6xl'>VIT CHENNAI</h1>
          <h1 className='md:text-3xl px-6 font-bold text-white  mmd:mt-2  mmd:ml-8 mlg:text-6xl '>CLUB EVENTS!</h1>

        </div>
        <Blob1 className='md:h-40 md:w-48 mmd:h-72 mmd:w-80 mmd:-mt-12' />
        <EventInfo />
        <Button />
      </div>

      <div className='flex-row  mmd:flex-1 mt-12 overflow-hidden '>


        <Illustration className=' xs:w-32 xs:h-64  md:h-64 md:w-64 mmd:h-96 mmd:w-96  ' />

        <Blob2 className=' md:h-0 md:w-0 mmd:h-96 mmd:w-80  lg:ml-32  overflow-hidden ' />

      </div>
    </div>









  )
}



export default Home;
