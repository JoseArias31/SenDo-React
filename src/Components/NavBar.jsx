import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../Styles/NavBar.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavBar({ isHomePage }) {

 

  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary navBarContainer">
      <Container>
        <Link style={{ pointerEvents: 'none'}} className={isHomePage ? styles.NavText : styles.NavText2} to="/">SenDo</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={isHomePage ? styles.NavText : styles.NavText2} to="/">Menu</Link>
            <Link className={isHomePage ? styles.NavText : styles.NavText2} to="/Services">Services</Link >
           
          </Nav>
          <Nav>
            <Link className={isHomePage ? styles.NavText : styles.NavText2} to="/WhyUs">Why Us?</Link>
            <Link  className={isHomePage ? styles.NavText : styles.NavText2} eventKey={2} to="/Login">
              Login
            </Link>
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