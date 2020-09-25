import React from "react";
import "../styles/navigation.css";
import resume from "../Marisol-Garcia-Resume.pdf";
import icon from "../images/icons/icon.png";

function Navigation() {
  return (
    <div>
      <nav>
        <div class="container">
          <div class="nav">
            <div>
              <img class="icon" src={icon} alt="porfile icon" />
            </div>
            <div>
              <ul>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#illustrations">Illustrations</a>
                </li>
                <li>
                  <a href={resume}>Resumé</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
