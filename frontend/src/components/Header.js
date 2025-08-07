import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

/**
 * Header component with application title and navigation
 */
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo192.svg"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Portfolio Analytics Logo"
          />
          Indian Stock Portfolio Analytics
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;