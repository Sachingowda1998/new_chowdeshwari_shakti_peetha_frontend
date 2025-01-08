import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "../CSS/Nav-tabs.css";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <div className="d-none d-md-inline navbarclassname">
      <div
        className="d-flex justify-content-between align-items-center"
        id="navtab-background"
      >
        <Nav>
          <Nav.Item>
            {/* <LinkContainer
              to="/"
              style={{ textDecoration: "none", cursor: "pointer" }}
            > */}
            <img
              src="/assets/Logo/IMG-20241128-WA0001.jpg"
              alt="not found"
              width={460}
              height={100}
              style={{ cursor: "pointer" }}
            />
            {/* </LinkContainer> */}
          </Nav.Item>
        </Nav>

        <Nav className=" pt-2 " activeKey="/home">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="navlinkscstome orange-color">
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/objectsofpuja" className="navlinkscstome orange-color">
              All Poojas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/idolsobjectsloop"
              className="navlinkscstome orange-color"
            >
              Shops
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/talktoastroguru" className="navlinkscstome orange-color">Astro guru</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/subscribe"   className="navlinkscstome orange-color">Subscribe</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/imagedisplay"  className="navlinkscstome orange-color">Gallery</Nav.Link>
          </Nav.Item>     
        </Nav>
      </div>
    </div>
  );
}

export default NavTab;
