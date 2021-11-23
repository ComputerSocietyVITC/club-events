import { ReactComponent as Blob1 } from '../Assets/Svg/blob1.svg';
import { ReactComponent as Blob2 } from '../Assets/Svg/blob2.svg';
import { ReactComponent as Illustration } from '../Assets/Svg/illustration.svg';

const EventInfo = () => (
  <div className="mt-3  text-xs  text-white  max-w-9/10 md:text-base ml-5 mmd:text-xl mmd:mt-4 mmd:pt-8 pb-8">
    <p>club events info to be added here here</p>
    <p>club events info to be added here here</p>
    <p>club events info to be added here here</p>
    <p>club events info to be added here here</p>
  </div>
);

const Home = () => {
  return (
    <div className="w-100vh flex flex-1 flex-col h-full overflow-hidden">
      <div className="flex flex-col justify-start">
        <Blob1 className="h-40 w-48 msm:h-48 msm:w-56 mmd:h-72 mmd:w-80 mlg:h-sm mlg:w-md" />
        <div className="ml-8 mt-8 text-4xl absolute text-white font-bold msm:text-5xl mmd:text-6xl mmd:mt-16 mlg:mt-28 mlg:ml-24 mlg:text-8xl ">
          <h1>Vit Chennai</h1>
          <h1>Club Events</h1>
        </div>
        <EventInfo />
        <button className="ml-6 mt-2 h-8 mb-4 w-32 bg-lightergreen hover:bg-green-500 text-black font-bold text-sm border border-blue-700 rounded-full mmd:w-60 mmd:h-16 mmd:text-2xl mlg:h-20 mlg:w-72 ">
          Let's Go!
        </button>
      </div>
      <div />
      <div className="flex justify-end mxl:-mt-40">
        <Illustration className="h-64 w-48 absolute -mt-28 msm:w-64 mmd:h-72 mmd:w-80  mmd:-mt-36 mlg:h-sm mlg:w-md mlg:-mt-64" />
        <Blob2 className="h-40 w-52 msm:h-40 msm:w-48 mmd:h-64 mmd:w-72 mlg:h-md mlg:w-lg" />
      </div>
    </div>
  );
};

export default Home;
