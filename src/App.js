import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
