import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
