import { Link /*useLocation*/ } from 'react-router-dom';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => (
  <nav
    className="flex justify-between items-center h-16 relative shadow-sm font-semibold text-fontblack bg-navbarbg"
    role="navigation"
  >
    <div>
      <Link to="/" className="pl-4">
        Home
      </Link>
      <Link to="/events" className="pl-4">
        Events
      </Link>
      <Link to="/events/create-event" className="pl-4">
        CreateEvent
      </Link>
      <Link to="/calendar" className="pl-4">
        Calendar
      </Link>
    </div>
    <div>
      {/* add this back in once finalised, for now seems to break some weird margin stuff */}
      {/* {useLocation().pathname === '/events' ? <AiOutlineSearch /> : <></>} */}
      <Link to="/login" className="pr-4">
        Login
      </Link>
      <Link to="/register" className="pr-4">
        Register
      </Link>
    </div>
  </nav>
);
export default Navbar;
