import React from "react";
import "../styles/projects.css";
import todo from "../images/thumbnails/todo.gif";
import cases from "../images/thumbnails/cases.gif";
import qup from "../images/thumbnails/qup.png";
import map from "../images/thumbnails/map.png";
import google from "../images/thumbnails/gugol.gif";
import card from "../images/thumbnails/card.gif";

function Projects() {
  return (
    <section id="projects">
      <div class="container">
        <div class="title">
          <h2>Projects</h2>
        </div>
        <div class="grid">
          <a href="https://react-todo-d4f7c.web.app/">
            <div class="card">
              <div
                class="project-thumb"
                style={{ backgroundImage: `url(${todo})` }}
              ></div>
              <article>
                <h6>Web Development</h6>
                <h2>To Do List</h2>
                <p>
                  A regular to-do list made with React. Utilized localstorage to
                  keep to-dos.
                </p>
              </article>
            </div>
          </a>

          <a href="https://codepen.io/marsgs/full/bGpaoxY">
            <div class="card">
              <div
                class="project-thumb"
                style={{ backgroundImage: `url(${card})` }}
              ></div>
              <article>
                <h6>UI Design</h6>
                <h2>Blog Card</h2>
                <p>
                  Card layout template with cursor hover effects built with CSS
                  Grid
                </p>
              </article>
            </div>
          </a>

          <a href="https://devpost.com/software/queue-up-ik08jn">
            <div class="card">
              <div
                class="project-thumb"
                style={{ backgroundImage: `url(${qup})` }}
              ></div>
              <article>
                <h6>Web Development</h6>
                <h2>Queue Up</h2>
                <p>Website built with Flask, MySQL, and Bootstrap.</p>
              </article>
            </div>
          </a>

          <a href="https://github.com/marsgs/MealShare">
            <div class="card">
              <div
                class="project-thumb"
                style={{ backgroundImage: `url(${google})` }}
              ></div>
              <article>
                <h6>UI Design</h6>
                <h2>Pixel Google Widget</h2>
                <p>
                  Widget built with CSS Grid and Flexbox. Icons created using
                  digital art software.
                </p>
              </article>
            </div>
          </a>

          <a href="https://github.com/marsgs/migrant-visualization">
            <div class="card">
              <div
                class="project-thumb"
                style={{ backgroundImage: `url(${map})` }}
              ></div>
              <article>
                <h6>Data Visualization</h6>
                <h2>Migrant Project</h2>
                <p>
                  Interactive visualization of missing and dead migrants, built
                  with Unity3D.
                </p>
              </article>
            </div>
          </a>

          <a href="https://covid19-mapdata.web.app/">
            <div class="card">
              <div
                class="project-thumb"
                style={{ backgroundImage: `url(${cases})` }}
              ></div>
              <article>
                <h6>Web development</h6>
                <h2>Covid-19 Case Tracker</h2>
                <p>
                  React application using desease.sh API to create an
                  interactive layout.
                </p>
              </article>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
