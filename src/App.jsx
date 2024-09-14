import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; // Make sure this file exists
import Contact from './Components/Contact'; // Make sure this file exists
import About from './Components/About'; // Make sure this file exists
import Navbar from './Components/Navbar';
import Card from './Components/Card';

import './script.JS'
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

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </>
  )
}
export default App;
