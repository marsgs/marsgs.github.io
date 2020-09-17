import React from "react";
import "../styles/about.css";
import resume from "../Marisol-Garcia-Resume.pdf";

function About() {
  return (
    <section id="about">
      <div class="container about">
        <div class="about-heading">
          <h2>About</h2>
        </div>
        <div class="about-body">
          <p>
            Hello! I recently graduated from the University of North Carolina at
            Charlotte with a degree in computer science focusing in software
            engineering and a minor in mathematics. Take a look at my{" "}
            <a class="link" href={resume}>
              Resumé
            </a>
            .
          </p>
          <p>
            My experience includes working as a teachers assistant for Girls Who
            Code, where I helped teach highschool students various programming
            languages, some of which included Python, Javascript, HTML and CSS.
            Also, during my time at UNCC, I held mentoring positions for
            students in introductory computer science courses and for students
            who where underperforming academically.
          </p>
          <p>
            I am enthusiastic about learning web technologies and prepared to
            take on new challenges. When I am not coding you can find me
            spending my free time drawing or playing video games with friends.
          </p>
          <p>
            You can also find me on{" "}
            <a class="link" href="https://www.linkedin.com/in/marisolsgarcia/">
              LinkedIn
            </a>
            ,{" "}
            <a class="link" href="https://github.com/marsgs">
              Github
            </a>
            , and{" "}
            <a class="link" href="https://dribbble.com/marsgs">
              Dribbble
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
