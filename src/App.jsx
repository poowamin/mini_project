import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
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
