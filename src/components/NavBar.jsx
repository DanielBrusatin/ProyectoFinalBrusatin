import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import '../styles-sheets/NavBar.css'

function NavBar() {
  return (
    <Navbar expand='md' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href=''><h1>KOKE-Design</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav >
            <li><Nav.Link href=''>Baño</Nav.Link></li>
            <li><Nav.Link href=''>Cocina & comedor</Nav.Link></li>
            <li><Nav.Link href=''>Living & dormitorio</Nav.Link></li>
            <li><Nav.Link href=''>Materas & lonas</Nav.Link></li>
            <li><Nav.Link href=''>Complementos</Nav.Link></li>
          </Nav>
        </Navbar.Collapse>
      <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;