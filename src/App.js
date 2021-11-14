import './index.css';
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import './App.css';
function App() {
  return (
    <Router>
    <div>
    <Navbar />
     <Routes>
        <Route path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
