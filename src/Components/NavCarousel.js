import React, { useState, useEffect } from 'react'; // ✅ Add useState and useEffect
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import header_img from '../assets/header_img.png';
import logo from '../assets/logo.svg';
import '../index.css';

const NavCarousel = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Add background if scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="home"
      className="text-white"
      style={{
        backgroundImage: `url(${header_img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Navbar
        expand="lg"
        variant="dark"
        className={`w-100 fixed-top z-3 ${scrolled ? 'navbar-scrolled' : ''}`} // ✅ Toggle class
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Estate Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 fw-bold fs-5">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-auto d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
              <Nav.Link as={Link} to="/signup">
                <Button variant="light" className="rounded-pill px-4 py-2 fw-bold w-100 w-lg-auto">
                  Sign up
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-light" className="rounded-pill px-4 py-2 fw-bold w-100 w-lg-auto">
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <motion.div
        className="hero d-flex flex-column justify-content-center align-items-center text-center h-100"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.h1
          className="display-1 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore homes that<br />fit your dreams
        </motion.h1>

        <motion.div
          className="mt-4 d-flex flex-column flex-sm-row gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button href="#projects" variant="primary" className="px-4 fw-bold fs-5">
            Projects
          </Button>
          <Button href="#contact" variant="outline-light" className="px-4 fw-bold fs-5">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default NavCarousel;
