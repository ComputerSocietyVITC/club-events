import { ReactComponent as Blob1 } from '../Assets/Svg/blob1.svg';
import { ReactComponent as Blob2 } from '../Assets/Svg/blob2.svg';
import { ReactComponent as Illustration } from '../Assets/Svg/illustration.svg';
import EventInfo from '../Components/EventInfo';
import Button from '../Components/Button';



const Home = () => {
  return (
    <div className='w-full flex flex-row h-full'>

      <div className='flex flex-col   flex-1 '>
        <div className='absolute mmd:mt-4  '>

          <h1 className='md:text-3xl px-6 mt-8  font-bold text-white  mmd:mt-12 mmd:ml-8 mmd:text-5xl mlg:text-6xl'>VIT CHENNAI</h1>
          <h1 className='md:text-3xl px-6 font-bold text-white  mmd:mt-2  mmd:ml-8   mmd:text-5xl mlg:text-6xl '>CLUB EVENTS!</h1>

        </div>
        <Blob1 className='md:h-40 md:w-48 mmd:h-96 mmd:w-96 mmd:-mt-12 mlg:h-96 mlg:w-1/2 mlg:mt-24' />
        <EventInfo />
        <Button />
      </div>

      <div className='flex-row mmd:flex-1 mt-12  overflow-hidden '>


        <Illustration className=' xs:w-32 xs:h-64 ml-0 md:h-64 md:w-64 mmd:h-96 w-sm mlg:absolute mlg:ml-16 mlg:w-sm' />

        <Blob2 className=' lg:h-0 lg:w-0 h-sm w-auto ml:64 mxl:ml-80  overflow-hidden  mlg:mt-48' />

      </div>
    </div>









  )
}



export default Home;
