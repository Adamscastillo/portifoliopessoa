// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MinhaHistoria from './components/MinhaHistoria';
import Cursos from './components/Cursos';
import FaleComigo from './components/FaleComigo';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-historia" element={<MinhaHistoria />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/fale-comigo" element={<FaleComigo />} />
      </Routes>
    </Router>
  );
}

export default App;
