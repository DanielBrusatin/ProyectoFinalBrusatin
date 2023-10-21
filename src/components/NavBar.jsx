import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import '../styles-sheets/NavBar.css'

function NavBar() {
  return (
    <Navbar expand='md' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand as={NavLink} to={'/'}><h1>KOKE-Design</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav >
            <Nav.Link as={NavLink} to={'/category/baño'}>Baño</Nav.Link>
            <Nav.Link as={NavLink} to={'/category/cocina'}>Cocina & comedor</Nav.Link>
            <Nav.Link as={NavLink} to={'/category/living'}>Living & dormitorio</Nav.Link>
            <Nav.Link as={NavLink} to={'/category/materas'}>Materas & lonas</Nav.Link>
            <Nav.Link as={NavLink} to={'/category/complementos'}>Complementos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={NavLink} to={'/cart'}>
          <CartWidget />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;