import { Link } from 'react-router-dom';
import useAuth from '../hooks/Auth';

const Navbar = () => {
  const { user, signOut } = useAuth();

  const onSignOut = async () => {
    const { error } = await signOut();
    if (!error) window.location.reload();
  };

  return (
    <nav
      className="flex justify-between items-center h-16 relative shadow-sm font-monty font-semibold text-fontblack bg-navbarbg"
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
      {user ? (
        <div>
          <Link to="/events" className="pr-4">
            My account
          </Link>
          <button className="pr-4" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login" className="pr-4">
            Login
          </Link>
          <Link to="/register" className="pr-4">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
