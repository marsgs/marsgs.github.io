import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";
import resume from "../Marisol-Garcia-Resume.pdf"


function Navigation() {
  return (
    <div>
      <nav className="navigation nav-block">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#illustrations">Illustrations</a>
        <a href={ resume } >Resume</a>
        <a href= "mailto:marsgsn@gmail.com" >Email</a>
    
</nav>
    </div>
  );
}

export default Navigation;
