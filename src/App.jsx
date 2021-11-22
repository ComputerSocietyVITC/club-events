import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
//we don't want navbar and footer to be lazy loaded

//lazy load all routes when the user actually navigates to them -- better UX
//ALL imports MUST be default for this to work. Only do `export default Component`
const Login = lazy(() => import('./auth/Login'));
const Register = lazy(() => import('./forms/Register'));
const Home = lazy(() => import('./content/Home'));
const Events = lazy(() => import('./content/events/Events'));
const EventAnalytics = lazy(() => import('./content/events/analytics'));
const IndividualEvent = lazy(() => import('./content/events/IndivualEvent'));
const CreateEvent = lazy(() => import('./content/events/CreateEvent'));

const App = () => {
  useEffect(() => (document.body.style.background = '#0F313E'));
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        {/*^^^ design loading screen properly*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/create-event" element={<CreateEvent />} />
          <Route path="/events/:eventId/:eventName" element={<IndividualEvent />} />
          <Route path="/events/:eventId/:eventName/analytics" element={<EventAnalytics />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
