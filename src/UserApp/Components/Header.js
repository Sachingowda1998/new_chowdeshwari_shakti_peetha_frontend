import { Container, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPhone,
  faEnvelope,
  faBars,
  faLocationPin,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dta = {
    val: 5,
  };

    const logout = () => {
      localStorage.removeItem('userToken');
      localStorage.removeItem("loginType");
      navigate('/');
  };

  return (
    <Navbar className="bg-body-tertiary custom-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-none d-md-flex">
          {/* <Nav className="me-auto "> */}
          <Nav.Link
            href="tel:+180042543333"
            className="navbarList-color d-flex align-items-center"
          >
            <FontAwesomeIcon
              icon={faPhone}
              style={{ marginRight: "5px" }}
              fontSize={12}
            />
            9342254946
          </Nav.Link>
          <Nav.Link
            href="mailto:help@epuja.co.in"
            className="navbarList-color d-flex align-items-center"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "5px" }}
              fontSize={13}
            />
            help@gmail.com
          </Nav.Link>
          <Nav.Link
            href=""
            className="navbarList-color d-flex align-items-center"
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: "5px" }}
              fontSize={13}
            />
            A.G.S. Layout (opp), Venkatappa Layout,Bangalore
          </Nav.Link>
        </Nav>

        <Nav className="ms-auto">
          <NavDropdown title="Select Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">kannada</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Hindi</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link
            href="#home"
            className="navbarList-color d-flex align-items-center"
            as={Link}
            to="/user/cartscreen"
          >
            <i
              className="fa badge fa-lg cart-icon"
              value={dta.val}
              style={{
                fontSize: "13px",
                paddingLeft: "6px",
              }}
            >
              &#xf07a;
            </i>
            <span className="d-none d-md-flex">My Cart</span>
          </Nav.Link>

          <Nav.Link className="navbarList-color" onClick={logout}>Logout</Nav.Link>

          {/* <Nav.Link className="navbarList-color">Register</Nav.Link> */}

          <Nav.Link
            as={Link}
            to="/user/clientdashboard"
            className="navbarList-color d-flex align-items-center"
          >
            <i class="fa fa-user" aria-hidden="true"></i>
          </Nav.Link>

          <Nav.Link
            className="d-inline d-md-none navbarList-color"
            onClick={handleShow}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faBars} className="ms-2" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* Collapse Content */}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="w-50 w-md-50 d-inline d-md-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul
            style={{ listStyle: "none", padding: 0, margin: 0 }}
            className="collapse-ul"
          >
            <li>
              <Link to="/" className="sideoverlay-List">
                Home
              </Link>
            </li>
            <li>
              <Link to="/user/objectsofpuja" className="sideoverlay-List">
                All Pujas
              </Link>
            </li>
            <li>
              <Link to="/user/idolsobjectsloop" className="sideoverlay-List">
                Idols
              </Link>
            </li>
            <li>
              <Link to="/user/talktoastroguru" className="sideoverlay-List">
                Astro guru
              </Link>
            </li>
            <li>
              <Link to="/user/imagedisplay" className="sideoverlay-List">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/user/subscribe" className="sideoverlay-List">
                Subscribe
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default Header;
