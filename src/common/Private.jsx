import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/Auth';

const Private = () => (useAuth().user ? <Outlet /> : <Navigate to="/" />);

export default Private;
