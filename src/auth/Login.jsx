import { Link } from 'react-router-dom';
import { ReactComponent as Illustration } from '../Assets/Svg/illustration.svg';
import useAuth from '../hooks/Auth';

const Login = () => {
  const { signIn, user } = useAuth();
  const discordLogin = async () => {
    try {
      const { error } = await signIn({ provider: 'discord' });
      if (error) throw error;
    } catch {
      console.error('Error logging in with Discord');
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <div className="text-white pt-36 pb-8 pl-24 flex flex-col   ">
          <span className="text-6xl p-8  font-bold">LOG IN</span>
          <span className="text-2xl w-96">
            log in to your account to view your events (text to be modified){' '}
          </span>
        </div>
        <span className="flex flex-col">
          <button
            onClick={() => discordLogin()}
            className="ml-32 mb-8 text-xl align-middle w-48 h-12 bg-buttonColor hover:bg-buttonColor text-black font-bold  border border-blue-700  rounded-xl"
          >
            User Login
          </button>
          <button className=" ml-32 mb-8 text-xl  align-middle w-48 h-12 bg-buttonColor hover:bg-buttonColor text-black font-bold  border border-blue-700  rounded-xl">
            Club Login
          </button>

          <span className="text-dull  text-xl ml-28">
            New User?
            <Link className="underline px-2 text-white" to="/register">
              Register
            </Link>
            instead.
          </span>
        </span>
      </div>
      <Illustration className="flex-1 h-72 mt-32" />
    </div>
  );
};

export default Login;
