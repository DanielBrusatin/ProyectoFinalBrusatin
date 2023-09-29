import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import '../styles-sheets/NavBar.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand='md' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand as={NavLink} to={'/'}><h1>KOKE-Design</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav >
            <li><Nav.Link as={NavLink} to={'/category/baño'}>Baño</Nav.Link></li>
            <li><Nav.Link as={NavLink} to={'/category/cocina'}>Cocina & comedor</Nav.Link></li>
            <li><Nav.Link as={NavLink} to={'/category/living'}>Living & dormitorio</Nav.Link></li>
            <li><Nav.Link as={NavLink} to={'/category/materas'}>Materas & lonas</Nav.Link></li>
            <li><Nav.Link as={NavLink} to={'/category/complementos'}>Complementos</Nav.Link></li>
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