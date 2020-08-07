import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header.js";
import Projects from "./components/Projects/Projects.js";
import Gallery from "./components/Gallery/Gallery.js";

function App() {
  return (
    <div className="page-wrapper">
      <Navigation />
      <Header/>
      <Projects/>
      <Gallery/>
    </div>
  );
}

export default App;
