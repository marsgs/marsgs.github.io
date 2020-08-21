import React from "react";
import "../styles/Projects.css";
import cases from "../images/thumbnails/cases.gif";
import qup from "../images/thumbnails/qup.png";
import map from "../images/thumbnails/map.png";
import meal from "../images/thumbnails/meal.gif";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <div className="projects offset">
        <div class="section-text hi">
          <h1 class="p-h1">Projects</h1>
        </div>

        <div className="project-1">
          <div className="card">
            <a className="project-link" href="https://covid19-mapdata.web.app/">
              <div
                className="project-thumb"
                style={{ backgroundImage: `url(${cases})` }}
              ></div>
              <article>
                <h6>Web development</h6>
                <h1>Covid-19 Case Tracker</h1>
                <p>
                  Interactive way to see the amount of covid-19 case increase
                  per day in every country.
                </p>
                <br />
                <p>
                  Project created following an online tutorial to practice the
                  basics of react, such as JSX, and how to utilize the state and
                  effect hooks. I also learned how to use MaterialUI to create
                  cards and menu items. <br />
                  <br />
                  LeafletJS was used to create the map and display the circles
                  and pop-ups.
                </p>
              </article>
            </a>
            <article>
              <span>
                <p>React / MaterialUI / LeafletJS</p>
              </span>
            </article>
          </div>
        </div>

        <div className="project-2">
          <div className="card">
            <a
              className="project-link"
              href="https://devpost.com/software/queue-up-ik08jn"
            >
              <div
                className="project-thumb"
                style={{ backgroundImage: `url(${qup})` }}
              ></div>

              <article>
                <h6>Web Development</h6>
                <h1>Queue Up</h1>
                <p>
                  Grocery store queue management platform for mitigating large
                  crowds and practicing safe distancing outside and inside the
                  store.
                </p>

                <br />
                <p>
                  This project was created in a three week period for Hack
                  Quarantine, contributions included creating the visual layout
                  of the website on Figma and then using HTML/CSS and Bootstrap
                  to create it.
                </p>
                <br />
                <p>
                  We used Flask for our backend framework and MySql to hold our
                  data.
                </p>
              </article>
            </a>
            <article>
              <span>
                <p>Fask / Python / Bootstrap / Twilio / MySql</p>
              </span>
            </article>
          </div>
        </div>

        <div className="project-3">
          <div className="card">
            <a
              className="project-link"
              href="https://github.com/marsgs/migrant-visualization"
            >
              <div
                className="project-thumb"
                style={{ backgroundImage: `url(${map})` }}
              ></div>
              <article>
                <h6>Data Visualization</h6>
                <h1>Migrant Project</h1>
                <p>
                  A Visualization of missing and dead migrants between the years
                  of 2014 and 2019.
                </p>
                <br />
                <p>
                  This was a solo project I did using python to sort the dataset
                  in a format to easily generate graphs in Unity. Mapbox was
                  used to plot markers based on coordinates.
                </p>
                <br />
              </article>
            </a>
            <article>
              <span>
                <p>Python / Mapbox / Unity3D</p>
              </span>
            </article>
          </div>
        </div>

        <div className="project-4">
          <div className="card">
            <a
              className="project-link"
              href="https://github.com/marsgs/MealShare"
            >
              <div
                className="project-thumb"
                style={{ backgroundImage: `url(${meal})` }}
              ></div>
              <article>
                <h6>Web Development</h6>
                <h1>MealShare</h1>
                <p>
                  Website created for the purpose of connecting grocery stores
                  and restaurants to food pantries with excess food items.
                </p>
                <br />
                <p>
                  This was created using Nodejs, MongoDB, HTML/CSS, and
                  javascript. My role in this group project was to develop the
                  user interface using Bootstrap, CSS and HTML.
                </p>
              </article>
            </a>
            <article>
              <span>
                <p>Bootstrap / NodeJS / MongoDB</p>
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
