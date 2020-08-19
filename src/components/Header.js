import React from "react";
import "../styles/Header.css";

function Header () {
    return (
        <div>
            <header id="header" className="header" style={{padding: "6vw 0px"}}>
            <div className="header-text-wrapper">
                <h1 class="header-text">
                    
                Hi, I'm Marisol Garcia.<br/>I'm a front-end web developer.
                </h1>
                <p class="subtext"><a class="link" href="#about" >More about me.</a></p>
            </div>
            <div className="header-image-wrapper">
                <div className="header-image">
                </div>
            </div>
          </header>

        </div>

    );
}

export default Header;