import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
