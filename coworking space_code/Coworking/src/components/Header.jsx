import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import white_logo from '../assets/white_logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" sticky="top" className="header-navbar">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={NavLink} to="/" className="header-brand">
          <img src={white_logo} loading="lazy" alt="iCity CoWorks Logo" />
        </Navbar.Brand>

        {/* Toggler for mobile */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapsible Nav */}
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto header-nav">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/workspaces"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Workspaces
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/partnerships"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Partnerships
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
