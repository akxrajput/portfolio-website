import React from 'react'
import { FaInstagram , FaLinkedin , FaGithub } from 'react-icons/fa';
import './social.css';

function Social() {
  return (
    <>
    <div className='main-links'>
    <a href="https://instagram.com/akx.rajput" className='sublinksInsta'> <h1>  <FaInstagram/></h1> </a>
    <a href="https://linkedin.com/in/akshay-girase-318136246"  className='sublinksLinkdin'><h1> <FaLinkedin  /> </h1></a>
    <a href="https://github.com/akxrajput"  className='sublinksgithub'> <h1> <FaGithub/> </h1> </a>
    </div>
    
    
    </>
  )
}

export default Social
