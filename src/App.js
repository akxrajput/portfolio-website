import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Intro />
              <Projects />     {/* ✅ Add this */}
              <Blog />         {/* ✅ Add this */}
              <Contact />
              <Social />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
