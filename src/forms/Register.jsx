import { Link } from 'react-router-dom';
import { ReactComponent as Illustration } from '../Assets/Svg/illustration.svg';

const Register = () => {
  return (<div className='flex flex-row'>
     <div className='flex-1'>
    <div className="text-white pt-28 pb-8 pl-24 flex flex-col   ">
    <span className="text-6xl  font-bold">REGISTER</span>
    <span className='pb-8 pt-2 font-bold text-xl'>Welcome to IEEE'S EventHub</span>
    <span  className="text-dull text-xl w-96">Register yourself to make the most of our website and get full access to all the content! </span>
    
    
 </div>
 <span className="flex flex-col ">
 <button className="ml-32 mb-8 text-xl align-middle w-56 h-12 bg-buttonColor hover:bg-buttonColor text-black font-bold  border border-blue-700  rounded-xl">
 REGISTER USER
</button>
<button className=" ml-32 mb-8 text-xl  align-middle w-56 h-12 bg-buttonColor hover:bg-buttonColor text-black font-bold  border border-blue-700  rounded-xl">
  REGISTER CLUB
</button>
</span>
<span className='text-dull  text-xl ml-28'>Existing User?<Link className='underline px-2 text-white' to="/register">Log in</Link>instead.</span>
</div>
<Illustration className='flex-1 h-72 mt-32'/>
</div>
  );
};

export default Register;
