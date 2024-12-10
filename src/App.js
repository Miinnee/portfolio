
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react';

import Home from './vue/Home';
import Formation from './vue/Formation';



function App() {
  return (
    <div className="App">

      <Router basename="/portfolio"> {/* Le basename est essentiel pour GitHub Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formation" element={<Formation />} />

          {/*<Route path="*" element={<NotFound />} />} {/* Route pour les pages non trouvées */}
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
