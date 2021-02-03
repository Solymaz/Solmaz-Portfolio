import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MouseTracker from "./components/MouseTracker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MouseTracker />
    </div>
  );
}

export default App;
