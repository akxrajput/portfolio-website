import React from 'react'
import {Button, Link} from 'react-scroll';
import weblogo from "./weblogo.png"
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className='navbar' style={{ color:"white"}}>

        {/* image part of website */}
        <img   src={weblogo} className='logo' alt='logo'/>

        <div className='nav-menu-main'>
          <Link className='nav-menu'>HOME</Link>
          <Link className='nav-menu'>CLIENTS</Link>
          <Link className='nav-menu'>ABOUT</Link>
          <Link className='nav-menu'>PORTFOLIO</Link>
        </div>

        <button className='nav-btn'>
           <a href="https://linkedin.com/in/akshay-girase-318136246"> <img src=""   className='nav-btn-img'/>Contact Me</a> 
        </button>

    </nav>
  )
}

export default Navbar
