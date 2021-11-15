import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => (
  <nav
    className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono bg-navbarbg"
    role="navigation"
  >
    <Link to="/" className="pl-8">
      Home
    </Link>
    <Link to="/events" className="pl-8">
      Events
    </Link>
    <div className="cursor-pointer ml-auto p-4">
      <AiOutlineMenu />
    </div>
    {useLocation().pathname === '/events' ? <AiOutlineSearch /> : <></>}
    <div>
      <Link to="/login" className="p-4">
        Login
      </Link>
      <Link to="/register" className="p-4">
        Register
      </Link>
    </div>
  </nav>
);
export default Navbar;
