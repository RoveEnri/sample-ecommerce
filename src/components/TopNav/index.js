import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>Simple E-Commerce</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>
            Store
          </Nav.Link>
          <Nav.Link as={Link} to='/cart'>
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
