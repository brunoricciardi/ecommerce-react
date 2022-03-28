import React from 'react'
import { Navbar,Container,Nav, } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">La Tienda De Bruno</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <FaShoppingCart className="svg"/>
    </Container>
  </Navbar></div>
  )
}

export default Header