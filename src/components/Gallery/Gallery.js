import React from "react";
import "./Gallery.css";

function Gallery() {
    return(
        <section id="illustrations"className="gallery-wrapper">
              <div className= "gallery offset">
                  

                  <div className="row"> 
                    <div className="column">
                        <img src={require("../../images/gallery/portrait.png")} style={{width: "100%"}}/>
                        <img src={require("../../images/gallery/fish-hair.png")} style={{width: "100%"}}/>
                        <img src={require("../../images/gallery/chicks.png")} style={{width: "100%"}}/>  
                        <img src={require("../../images/gallery/neon-girl.png")} style={{width: "100%"}}/>      
                    </div>

                    <div className="column">
                        <img src={require("../../images/gallery/octopus.jpeg")} style={{width: "100%"}}/>
                        <img src={require("../../images/gallery/whale-imaginary.png")} style={{width: "100%"}}/>
                        <img src={require("../../images/gallery/pink.png")} style={{width: "100%"}}/>      
                    </div>  
                  </div>
              </div>
          </section>
    );

}

export default Gallery;