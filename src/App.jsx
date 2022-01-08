import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

import { AuthContext } from './contexts/Auth';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

//we don't want navbar and footer to be lazy loaded

//lazy load all routes when the user actually navigates to them
//ALL imports MUST be default for this to work. Only do `export default Component`
const Login = lazy(() => import('./auth/Login'));
const Register = lazy(() => import('./forms/Register'));
const Home = lazy(() => import('./content/Home'));
const Events = lazy(() => import('./content/events/Events'));
const EventAnalytics = lazy(() => import('./content/events/analytics'));
const IndividualEvent = lazy(() => import('./content/events/Details'));
const CreateEvent = lazy(() => import('./content/events/CreateEvent'));
const Dashboard = lazy(() => import('./content/Dashboard'));
const Calendar = lazy(() => import('./content/Calendar'));
const CreateForm = lazy(() => import('./content/CreateForm'));

const App = () => {
  useEffect(() => (document.body.style.background = '#0F313E'));
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        {/*^^^ design loading screen properly*/}
        <AuthContext.Provider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            {/* Wrap any auth required route in <Private> </Private>.
            That is all that is required */}
            <Route path="/events/create-event" element={<CreateEvent />} />
            <Route path="/events/:eventId/:eventName" element={<IndividualEvent />} />
            <Route path="/events/:eventId/:eventName/analytics" element={<EventAnalytics />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/createform" element={<CreateForm />} />
          </Routes>
        </AuthContext.Provider>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
