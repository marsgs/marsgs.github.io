import React from "react";
import "../styles/gallery.css";

function Gallery() {
  return (
    <section id="illustrations">
      <div class="container">
        <div class="title">
          <h2>Illustrations</h2>
        </div>
        <div class="illustrations-grid">
          <div class="column-xs-12 column-md-12"></div>
          <figure class="item-1">
            <img src={require("../images/gallery/chicks.png")} />
          </figure>
          <figure class="item-2">
            <img src={require("../images/gallery/blue-whale.jpg")} />
          </figure>
          <figure class="item-3">
            <img src={require("../images/gallery/fish-hair.png")} />
          </figure>
          <figure class="item-4">
            <img src={require("../images/gallery/octopus.jpeg")} />
          </figure>
          <figure class="item-5">
            <img src={require("../images/gallery/neon-girl.png")} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
