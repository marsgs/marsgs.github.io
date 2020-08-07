import React from "react";
import "./Projects.css";
import cases from "../../images/thumbs/cases.gif";
import qup from "../../images/thumbs/qup.png";
import map from "../../images/thumbs/map.png";
import meal from "../../images/thumbs/meal.gif";

function Projects() {
    return (
        <section id="projects" className="projects-wrapper">
              <div className="projects offset">
                <div className="project-1">
                    <div className="card">
                        <a className="project-link" href="https://covid19-mapdata.web.app/">
                            <div className="project-thumb" style={{backgroundImage: `url(${cases})`}}>
                            </div>
                            <article>
                                <h6>Web development</h6>
                                <h1>Covid-19 Case Tracker</h1>
                                <p>
                                    Web app created using react and various libraries to map the amount of covid-19 case increase per day in every country.
                                </p> 
                            </article>
                        </a>
                        <article><span>React, JSX</span></article>
                    </div>
                </div>

                <div className="project-2">
                    <div className="card">
                        <a className="project-link" href="https://devpost.com/software/queue-up-ik08jn">
                            <div className="project-thumb" style={{backgroundImage: `url(${ qup })`}}>
                            </div>
                            
                            <article>
                                <h6>Web Development</h6>
                                <h1>Queue Up</h1>
                                <p>
                                    Hackathon project, this is a line managment application created using Flask, HTML, CSS and Javascript.
                                </p>
                            </article>
                        </a>
                        <article><span>Flask, Python</span></article>
                    </div>
                </div>

                <div className="project-3">
                    <div className="card">
                        <a className="project-link" href="https://github.com/marsgs/migrant-visualization">
                            <div className="project-thumb" style={{ backgroundImage: `url(${ map })` }}>
                            </div>
                            <article>
                                <h6>Data Visualization</h6>
                                <h1>Migrant Project</h1>
                                <p>
                                    A Visualization of missing and dead migrants between the years of 2014 and 2019. Created using mapbox and Unity3D.
                                </p>
                            </article>
                        </a>
                        <article><span>Python, Mapbox</span></article>
                    </div>
                </div>

                <div className="project-4">
                    <div className="card">
                        <a className="project-link" href="https://github.com/marsgs/MealShare">
                            <div className="project-thumb" style={{ backgroundImage: `url(${ meal })` }}>
                            </div>
                            <article>
                                <h6>Web Development</h6>
                                <h1>MealShare</h1>
                                <p>
                                    Web application created for the purpose of connecting grocery stores and restaurants to food pantries with excess food items.
                                    Created using nodejs, mongodb and html/css, javascript.
                                </p>
                            </article>
                        </a>
                        <article><span>Bootstrap, Nodejs</span></article>
                    </div>
                </div>                
              </div>
          </section>
    );
}

export default Projects;