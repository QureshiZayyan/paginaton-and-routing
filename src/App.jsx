import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; // Make sure this file exists
import Contact from './Components/Contact'; // Make sure this file exists
import About from './Components/About'; // Make sure this file exists
import Navbar from './Components/Navbar';
import Card from './Components/Card';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <div id="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cards" element={<Card />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
