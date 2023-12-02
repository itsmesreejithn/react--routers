import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>Dash Board</Nav.Link>
            <Button variant="outline-primary" className="ms-2">
              LogIn
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
