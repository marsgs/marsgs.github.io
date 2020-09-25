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
          <figure class="item-1">
            <img
              src={require("../images/gallery/chicks.png")}
              alt="chick emojis"
            />
          </figure>
          <figure class="item-2">
            <img
              src={require("../images/gallery/blue-whale.jpg")}
              alt="blue whale"
            />
          </figure>
          <figure class="item-3">
            <img
              src={require("../images/gallery/fish-hair.png")}
              alt="fish hair girl"
            />
          </figure>
          <figure class="item-4">
            <img
              src={require("../images/gallery/octopus.jpeg")}
              alt="octopus tentacles"
            />
          </figure>
          <figure class="item-5">
            <img
              src={require("../images/gallery/mushroom.png")}
              alt="girl with mushroom hair"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
