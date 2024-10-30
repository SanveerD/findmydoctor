import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-container">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={
              <header id="home">
                <h1>App in Development</h1>
              </header>
            } />
          </Routes>

          <footer>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3>Policies</h3>
              <ul>
                <li><a href="#opt-out">Opt-out Policy</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;