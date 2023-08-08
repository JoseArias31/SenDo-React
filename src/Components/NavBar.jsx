import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../Styles/NavBar.module.css';
import PropTypes from 'prop-types';
function NavBar({ isHomePage }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navBarContainer">
      <Container>
        <Navbar.Brand className={isHomePage ? styles.NavText : styles.NavText2} href="#home">SenDo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={isHomePage ? styles.NavText : styles.NavText2} href="#features">Menu</Nav.Link>
            <Nav.Link className={isHomePage ? styles.NavText : styles.NavText2} href="#pricing">Services</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link className={isHomePage ? styles.NavText : styles.NavText2} href="#deets">Why Us?</Nav.Link>
            <Nav.Link  className={isHomePage ? styles.NavText : styles.NavText2} eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  isHomePage: PropTypes.bool.isRequired
};

export default NavBar;