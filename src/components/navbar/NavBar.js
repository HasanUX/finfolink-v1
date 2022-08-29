import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import "../../css/navbar/navbar.css";
import navLogo from "../../img/navlogo.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={navLogo} alt="nav-logo" className="nav-logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Link to="/">
              <span className="text-dark nav-link">Home</span>
            </Link>
            <Link to="/goal">
              <span className="text-dark nav-link">About us </span>
            </Link>
            <Link to="/contact">
              <span className="text-dark nav-link">Contact us </span>
            </Link>
            {/*<a href="https://mail.google.com/mail/#compose" target="__blank">
              {" "}
              <span className="text-dark nav-link">Contact us</span>
            </a>*/}
            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Nav.Item className="d-flex">
            <Nav.Link
              href="https://facebook.com/finfolink"
              target="__blank"
              className="btn-regular-outline"
            >
              Connect @fb
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
