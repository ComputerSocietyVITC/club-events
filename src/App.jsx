import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Login from './auth/Login';
import Register from './forms/Register';
import Home from './content/Home';
import Events from './content/events/Events';
import EventAnalytics from './content/events/analytics';
import IndividualEvent from './content/events/IndivualEvent';
import Footer from './footer/Footer';
import CreateEvent from './content/events/CreateEvent';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => (document.body.style.background = '#0F313E'));
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/CreateEvent" element={<CreateEvent />} />
        <Route path="/events/:eventId/:eventName" element={<IndividualEvent />} />
        <Route path="/events/:eventId/:eventName/Analytics" element={<EventAnalytics/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
