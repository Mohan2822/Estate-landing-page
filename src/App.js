import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavCarousel from "./Components/NavCarousel";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Testimonial from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* Landing page route */}
        <Route path="/" element={
          <>
            <NavCarousel />
            <About />
            <Projects />
            <Testimonial />
            <Contact />
            <Footer />
          </>
        } />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Router>
  );
}

export default App;
