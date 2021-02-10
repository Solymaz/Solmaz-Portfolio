import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import "./App.css";

function calculateCorrectViewHeight() {
  // Set correct view height for mobile devices
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
function App() {
  const location = useLocation();

  // Re calculate the view height when resizing the window
  useEffect(() => {
    window.addEventListener("resize", calculateCorrectViewHeight);
    return () =>
      window.removeEventListener("resize", calculateCorrectViewHeight);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
