import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Sale from './Sale';
import Sneakers from './Sneakers';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="routes">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sneakers" element={<Sneakers />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} >

          </Route>

        </Routes>

      </div>
    </Router>
    
  );
}

export default App;
