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
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
      <FaShoppingCart className="svg"/>
    </Container>
  </Navbar></div>
  )
}

export default Header