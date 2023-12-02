import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="navLink">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/profile" className="navLink">
              <Nav.Link>Profile</Nav.Link>
            </Link>
            <Link to="/dashboard" className="navLink">
              <Nav.Link>Dash Board</Nav.Link>
            </Link>
            <Link to="/login" className="navLink">
              <Button variant="outline-primary" className="ms-2">
                LogIn
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
