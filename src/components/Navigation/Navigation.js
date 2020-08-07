import React from "react";
import "./Navigation.css";
import resume from "../../Marisol-Garcia-Resume.pdf"
import githubIcon from "../../images/icons/github.svg";
import linkedinIcon from "../../images/icons/linkedin.svg"
import dribbbleIcon from "../../images/icons/dribbble.svg"


function Navigation() {
  return (
    <div>
      <nav className="navigation nav-block">
    <div className="top-nav">
        <a href="index.html" style ={{width: "42px"}}>Home</a>
        <a href="#projects" style ={{width: "83px"}}>Projects</a>
        <a href="#illustrations" style ={{width: "134px"}}>Illustrations</a>
        <a href={ resume } >Resume</a>
        <a href= "mailto:marsgsn@gmail.com" >Email</a>
    </div>              

    <div className="bottom-nav">
        <a className="social" href="https://www.linkedin.com/in/marisolsgarcia/" >
          <img src={ linkedinIcon } alt="LinkedIn"/></a>
        <a className="social" href="https://github.com/marsgs">
            <img src={ githubIcon } alt="Github"/></a>
        <a className="social" href="https://dribbble.com/marsgs">
        <img src={ dribbbleIcon } alt="Dribbble"/></a>
    </div>
</nav>
    </div>
  );
}

export default Navigation;
