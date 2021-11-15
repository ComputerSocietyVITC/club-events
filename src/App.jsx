import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Login from './auth/Login';
import Register from './forms/Register';
import Home from './content/Home';
import Events from './content/events/Events';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </Router>
);

export default App;
