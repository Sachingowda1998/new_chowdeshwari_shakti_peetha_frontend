import React, { useState } from "react";
import {
  Row,
  Col,

  Card,
  Button,

  Modal,
  Form,
} from "react-bootstrap";
// import SidebarAccordionIdels from "../Components/SidebarAccordionIdels";
import { useNavigate } from "react-router-dom";
import "../CSS/IdolsObjectsLoop.css";
import { items } from "../Data/data";
import { Link } from 'react-router-dom'


function IdolsObjectsLoop() {
  const [expandedKey, setExpandedKey] = useState("0");
  const navigate = useNavigate();

  // Function to handle accordion toggle
  const handleToggle = (key) => {
    setExpandedKey((prevKey) => (prevKey === key ? null : key)); // Toggle between expanded/collapsed
  };

  //modal open(code)
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    date: "",
    time: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
    handleClose(); // Close the modal after submission
  };

  return (
    <div
      className="IdelsObjectsLoopClassname"
      style={{
        // backgroundColor: "#FFF4E6",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
    <div class="puja-list-banner">
        <img src="/assetstwo/banner/deepa.jpg" alt="not found"  />
        <div className="banner-text">
          <h1>All Idols</h1>
          <p>
            Book a pooja online and receive divine solutions with blessed
            prasada.
          </p>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                All Idols
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <Row className="mt-3">
       

        <Col lg={12} sm={12} style={{ paddingLeft: "0" }}>
          <Row className="g-4">
            {items.map((item) => (
              <Col lg={3} md={6} sm={12} key={item.id}>
                <Card className="shadow-sm h-100">
                  <div
                    style={{
                      height: "200px",
                      backgroundColor: item.image ? "#FF9933" : "#FF9933",

                      // backgroundImage: `url('assets/weekly pooja.png')`,
                      backgroundImage: item.image
                        ? `url(${item.image})`
                        : "none",
                      backgroundSize: "100% 100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      textAlign: "center",
                      borderBottom: "1px solid #d6d4d4",
                    }}
                  ></div>

                  <Card.Body>
                    <Card.Title
                      className="mb-2"
                      style={{
                        color: "#343a40",
                        fontWeight: "bold",
                        fontFamily: "Space Grotesk",
                        height: "40px",
                      }}
                    >
                      {item.name}
                    </Card.Title>
                    {/* {item.associatedWith && (
                      <Card.Subtitle
                        className="text-muted mb-2"
                        style={{ fontStyle: "italic" }}
                      >
                        Associated with: {item.associatedWith}
                      </Card.Subtitle>
                    )}
                    {item.purpose && (
                      <Card.Text className="text-muted">
                        Purpose: {item.purpose}
                      </Card.Text>
                    )} */}
                    <h5
                      className="mt-3"
                      style={{
                        color: "rgb(1 109 41)",
                      
                        fontSize:"15px",
                        fontfamily: "Gowun Dodum  sans-serif",
                      }}
                    >
                      Price: {item.price}
                    </h5>
                    <Row className="idolsshopsbuttons">
                    {/* <Col className="idolsshopsbutn-section1">
                    <Button
                      className="mt-2"
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        backgroundColor: "#FF9933",
                        borderColor: "#FF9933",
                        fontFamily: "Times New Roman, Georgia, Garamond",
                      }}
                      onClick={handleShow}
                    >
                      Order Now
                    </Button>
                    </Col> */}
                    <Col className="idolsshopsbutn-section2">
                    <Button
                      className="mt-2"
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        backgroundColor: "#FF9933",
                        borderColor: "#FF9933",
                        fontFamily: "Times New Roman, Georgia, Garamond",
                      }}
                    onClick={()=>navigate("/IdolDetails")}
                    >
                      View details
                    </Button>
                    </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default IdolsObjectsLoop;
