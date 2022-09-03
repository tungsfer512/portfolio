import { NavLink, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header sticky-top shadow">
      <Navbar bg="light" expand="lg">
        <Container fluid="xxl">
          <Link to="/" className="navbar-brand">BUI VAN TUNG</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/projects" className="nav-link">Projects</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;