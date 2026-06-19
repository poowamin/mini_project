import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  /* const pageItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Skills" },
    { id: 4, title: "Projects" },
    { id: 5, title: "Experience" },
    { id: 6, title: "Contact" },
  ]; */

  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
