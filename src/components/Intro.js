import React from "react";
import './intro.css';
import owner from  '../images/owner_myportfolio.png';


function Intro() {
  return (
    <>
    <div className="mainOne">
        <div className="leftpart">
            <span className="hello">Hello.!</span> 
            <span className="Im">I'M <span  className="name">Akshay</span></span> 
            <span className="pos">Full-Stack Developer</span> 
            <p className="description">I'm skilled and professional Web Designer <br /> with experience of creating beautiful websites</p>
            <button className="btn-hire">Hire Me</button>
        </div>
        <div className="rightpart">
            <img src={owner} alt="owner" className="ownerImg" />
        </div>
    </div>
    </>
  )
}

export default Intro
