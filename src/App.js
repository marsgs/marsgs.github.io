import React from "react";
import "./styles/type.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header.js";
import Projects from "./components/Projects.js";
import Gallery from "./components/Gallery.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Projects />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
