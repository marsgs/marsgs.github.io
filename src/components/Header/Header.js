import React from "react";
import "./Header.css";

function Header () {
    return (
        <div>
            <header className="header" style={{padding: "6vw 0px"}}>
            <div className="header-text-wrapper">
                <h1 className="header-text">
                    Marisol Garcia,<br/>front end developer<span className="period">.</span>
                    <br/><span className="subtext"></span>
                </h1>
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