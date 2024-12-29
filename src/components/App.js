import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./../styles/App.css";
import Home from "./Home";
import About from "./About"; // Updated import path

const App = () => {
  return (
    <div>
      {/* Navigation Links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
