import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Condidature from './components/pages/Condidature';
import Services from './components/pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/condidature" element={<Condidature />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



