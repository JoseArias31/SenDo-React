import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/navBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navBarContainer">
      <Container>
        <Navbar.Brand className="NavText" href="#home">SenDo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="NavText" href="#features">Menu</Nav.Link>
            <Nav.Link className="NavText" href="#pricing">Services</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link className="NavText" href="#deets">Why Us?</Nav.Link>
            <Nav.Link  className="NavText" eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;