import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div class="container footer">
        <div>
          <a href="https://github.com/marsgs">
            <img src={require("../images/icons/github.svg")} alt="github" />
          </a>
          <a href="https://codepen.io/marsgs">
            <img src={require("../images/icons/codepen.svg")} alt="codepen" />
          </a>
          <a href="https://www.linkedin.com/in/marisolsgarcia/">
            <img src={require("../images/icons/linkedin.svg")} alt="linkedin" />
          </a>
          <a href="https://dribbble.com/marsgs">
            <img src={require("../images/icons/dribbble.svg")} alt="dribbble" />
          </a>
        </div>
        <h4>Created by Marisol Garcia.</h4>
      </div>
    </footer>
  );
}

export default Footer;
