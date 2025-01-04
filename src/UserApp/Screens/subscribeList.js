import React, { useState } from "react";
import "../CSS/subscribe.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Puja Subscription Box",
    description:
      "A complete subscription box for daily puja essentials delivered to your doorstep.",
    subscriptionDetails:
      "Subscribe for a monthly puja box, which includes incense sticks, flowers, and other offerings.",
    price: "30/month",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Spiritual Meditation Kit",
    description:
      "A kit that includes everything you need for a peaceful and focused meditation session.",
    subscriptionDetails:
      "Receive a monthly kit with incense, meditation cushions, and other spiritual tools.",
    price: "40/month",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Yoga Essentials Pack",
    description:
      "A curated pack of yoga essentials including mats, blocks, and straps to enhance your practice.",
    subscriptionDetails:
      "Get a monthly subscription of premium yoga mats and accessories.",
    price: "50/month",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Ayurvedic Health Box",
    description:
      "A health box with natural ayurvedic remedies and supplements delivered monthly.",
    subscriptionDetails:
      "Subscribe to receive a curated selection of herbal teas, oils, and wellness products.",
    price: "25/month",
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
  },
];

const Subscribe = () => {

  const navigate=useNavigate()
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
    <div className="subscribeListclassname">
      <div class="puja-list-banner px-4 py-4">
        <img src="assetstwo/banner/deepa.jpg" alt="not found" />
        <div className="banner-text">
          <h1>All Subscription List</h1>
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
                All Pujas
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Container className="py-4">
        {/* <div className="title-main">
            <h3
              style={{
                color: "#ff6600",
                fontFamily: "'Merienda One', cursive",
              }}
            >
              subscription Lists
            </h3>

            <img
              src="assetstwo/backgroundimages/titleunderline-removebg.png"
              alt="not found"
              width={300}
            />
          </div> */}
        {products.map((product) => (
          <Card className="mb-4 shadow-sm" key={product.id}>
            <Row className="g-0 align-items-center">
              <Col
                md={8}
                className="p-4"
                style={{
                  backgroundColor: "#FFF8DC",
                  color: "#5A4633",
                  borderRight: "2px solid #E0C097",
                }}
              >
                <h4 style={{ color: "#5A4633" }}>{product.name}</h4>
                {/* <p style={{ color: "#6C584C" }}>{product.description}</p> */}
                <p style={{ color: "#6C584C",marginTop:"15px" }}>
                  <strong>Subscription Details:</strong>{" "}
                  {product.subscriptionDetails}
                </p>
                <h5 style={{ color: "#5A4633" }}>{product.price}</h5>
                <Button
                  variant="warning"
                  style=
                  {{ 
                    color: "#FFF", 
                    // backgroundColor: "#E0C097" 
                    backgroundColor: "rgb(116 99 77)" 
                    }}
                  onClick={()=>navigate("/SubScribePujaDetails")}
                >
                  View details
                </Button>
              </Col>

     
              <Col md={4} className="text-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{ padding: "1rem" }}
                />
              </Col>
            </Row>
          </Card>
        ))}
      </Container>

      {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}
    </div>
  );
};

export default Subscribe;
