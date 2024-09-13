import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; // Make sure this file exists
import Contact from './Components/Contact'; // Make sure this file exists
import About from './Components/About'; // Make sure this file exists
import Navbar from './Components/Navbar';
import Card from './Components/Card';
const App = () => {
  return (
    <Router>
      <Navbar />

      <div id="container">
        <Card />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
