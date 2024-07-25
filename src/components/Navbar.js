import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="brand-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            width="70"
            height="70"
            className="d-inline-block align-top logo-image"
            alt="School Logo"
          />{' '}
          <span className="brand-name">Springdale Public School</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
            <Nav.Link as={Link} to="/admission">Admission</Nav.Link>
            <Nav.Link as={Link} to="/faculty">Faculty</Nav.Link>
            <Nav.Link as={Link} to="/students">Students</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
