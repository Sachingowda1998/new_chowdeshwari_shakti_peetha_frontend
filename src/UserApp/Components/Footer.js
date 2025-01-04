import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* About Us */}
          <Col md={3} sm={12} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing the best products and services to
              our customers. Learn more about our journey, values, and mission.
            </p>
          </Col>

          <Col md={3} sm={12} className="mb-4">
            <h5>Categories</h5>
            <ListGroup>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Ganapathi Homam
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Navagraha Homam
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Maha Lakshmi Homam
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Rudra Homam
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3} sm={12} className="mb-4">
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Myshop
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Astroguru
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Temple visit
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark border-0 text-white d-flex align-items-center p-1">
                <FaChevronRight className="me-2" size={16} /> Contact us
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Social Media */}
          <Col md={3} sm={12} className="mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <div className="mb-4">
              <p className="mb-2">
                <strong>Address:</strong> Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Reprehenderit hic deserunt amet
                iure sequi nemo mollitia.
              </p>
              <p className="mb-2">
                <strong>Phone:</strong>
                <a
                  href="tel:1234567890"
                  className="text-decoration-none text-white"
                >
                  1234567890
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:email@gmail.com"
                  className="text-decoration-none text-white"
                >
                  email@gmail.com
                </a>
              </p>
            </div>
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex">
              <a href="/" className="text-white me-3" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="/" className="text-white me-3" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="/" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="/" className="text-white" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Puja. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
