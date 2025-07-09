import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import from React Router
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* Logo and menu */}
      <div className='nav-menu-main'>
        <a className='nav-menu' href="#home">HOME</a>
        <a className='nav-menu' href="#clients">CLIENTS</a>
        <a className='nav-menu' href="#about">ABOUT</a>
        <a className='nav-menu' href="#portfolio">PORTFOLIO</a>
      </div>

      {/* ✅ Resume Button using React Router Link */}
      <button className='nav-btn'>
        <Link to="/resume" className='nav-link'>Resume</Link>
      </button>
    </nav>
  );
};

export default Navbar;
