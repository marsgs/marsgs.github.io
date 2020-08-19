import React from "react";
import "../styles/Gallery.css";

function Gallery() {
    return(
        <section id="illustrations"className="gallery-wrapper">
              <div className= "gallery offset">
                <div class="section-text"><h1>Illustrations</h1>
                </div>

                  <div className="row"> 
                    <div className="column">
                    <img src={require("../images/gallery/fish-hair.png")} style={{width: "100%"}} alt=""/>

                    <img src={require("../images/gallery/octopus.jpeg")} style={{width: "100%"}} alt=""/>

                        {/* <img src={require("../images/gallery/orb.jpg")} style={{width: "100%"}} alt=""/>       */}
                        <img src={require("../images/gallery/neon-girl.png")} style={{width: "100%"}} alt=""/>      


                    </div>

                    <div className="column">
                    <img src={require("../images/gallery/chicks.png")} style={{width: "100%"}} alt=""/>  


                        <img src={require("../images/gallery/blue-whale.jpg")} style={{width: "100%"}} alt=""/>

                        <img src={require("../images/gallery/boat.png")} style={{width: "100%"}} alt=""/>

                        {/* <img src={require("../images/gallery/portrait.png")} style={{width: "100%"}} alt=""/> */}

                        {/* <img src={require("../images/gallery/pink.png")} style={{width: "100%"}} alt=""/> */}
      
                    </div>  
                  </div>
              </div>
          </section>
    );

}

export default Gallery;