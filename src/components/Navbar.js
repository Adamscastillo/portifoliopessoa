// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importar o arquivo de estilos CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/minha-historia" className="nav-link">Minha História</Link>
        </li>
        <li className="nav-item">
          <Link to="/cursos" className="nav-link">Cursos</Link>
        </li>
        <li className="nav-item">
          <Link to="/fale-comigo" className="nav-link">Fale Comigo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
