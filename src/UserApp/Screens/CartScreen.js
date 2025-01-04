import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

import style from "../CSS module/Cart.module.css";
import { useNavigate } from "react-router-dom";

const CartScreen = () => {
  // Sample cart items
  const cartItems = [
    {
      name: "Aditya Homam",
      ref: "HM115",
      homamFor: "Temp",
      date: "30 Nov 2024",
      priests: 1,
      chants: 108,
      time: "45min - 1hr",
      unitPrice: 7000,
      quantity: 1,
      totalPrice: 7000,
      note: "If the star and rasi are unknown, please enter the place, time and date of birth in the space provided for additional info. Please enter details of additional names, Nakshatra and rasi to be included in the sankalp.",
    },
    {
      name: "Shiva Homam",
      ref: "HM116",
      homamFor: "Family",
      date: "10 Dec 2024",
      priests: 2,
      chants: 216,
      time: "1hr - 1.5hr",
      unitPrice: 14000,
      quantity: 1,
      totalPrice: 14000,
      note: "If the star and rasi are unknown, please enter the place, time and date of birth in the space provided for additional info. Please enter details of additional names, Nakshatra and rasi to be included in the sankalp.",
    },
    {
      name: "Ganesh Homam",
      ref: "HM117",
      homamFor: "Business",
      date: "15 Dec 2024",
      priests: 1,
      chants: 108,
      time: "45min - 1hr",
      unitPrice: 5000,
      quantity: 1,
      totalPrice: 5000,
      note: "If the star and rasi are unknown, please enter the place, time and date of birth in the space provided for additional info. Please enter details of additional names, Nakshatra and rasi to be included in the sankalp.",
    },
    {
      name: "Three Mukhi Round (Nepal)",
      ref: "R03",
      part: "idols",
      category: "Individual Beads",
      productCode: "R03",
      description: "Three Mukhi from Nepal - N",
      unitPrice: 1500,
      quantity: 1,
      totalPrice: 1500,
      note: "A sacred Three Mukhi bead from Nepal, offering spiritual and healing benefits.",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState("");

  const [cart, setCart] = useState(cartItems);
  const [expandedKey, setExpandedKey] = useState("0");
  const navigate = useNavigate();

  // Function to handle accordion toggle
  const handleToggle = (key) => {
    setExpandedKey((prevKey) => (prevKey === key ? null : key)); // Toggle between expanded/collapsed
  };

  const handleClose = () => setShowModal(false);
  const handleShow = (note) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updatedCart[index].totalPrice =
      updatedCart[index].quantity * updatedCart[index].unitPrice;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].totalPrice =
        updatedCart[index].quantity * updatedCart[index].unitPrice;
      setCart(updatedCart);
    }
  };

  return (
    <div className="cartpageclassname-main">
    <Container fluid>
        <div className="title-main">
       
        <h3
          style={{
            color: "#ff6600",
            fontFamily: "'Merienda One', cursive",
          }}
        >
          Cart Page
        </h3>

        <img
          src="assetstwo/backgroundimages/titleunderline-removebg.png"
          alt="not found"
          width={150}
        />
      </div>
      <Row className="justify-content-center mt-4">
        {/* Right Column (Cart Table) */}
        <Col md={9}>
          <Table bordered hover responsive>
            <thead className="bg-light">
              <tr>
                <th className="text-center">#</th>
                <th>Product Details</th>
                <th className="text-center">Qty</th>
                <th className="text-center">Unit Price</th>
                <th className="text-center">Total Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>
                    <strong>{item.name}</strong>
                    <br />

                    {item.part !== "idols" && (
                      <>
                        <small>
                          <strong>Homam Ref:</strong> {item.ref}
                        </small>
                        <br />
                        <small>
                          <strong>Homam for:</strong> {item.homamFor}
                        </small>
                        <br />
                        <small>
                          <strong>Homam Date:</strong> {item.date}
                        </small>
                        <br />
                        <small>
                          <strong>Homam Option:</strong>
                        </small>
                        <br />
                        <small>No. of Priests: {item.priests}</small>
                        <br />
                        <small>No. of Chants: {item.chants}</small>
                        <br />
                        <small>Time: {item.time}</small>
                      </>
                    )}
                  </td>
                  <td className="text-center">
                    {item.part === "idols" ? (
                      <>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </Button>
                      </>
                    ) : (
                      item.quantity
                    )}
                  </td>
                  <td className="text-center">
                    ₹{item.unitPrice.toLocaleString()}
                  </td>
                  <td className="text-center">
                    ₹{item.totalPrice.toLocaleString()}
                  </td>
                  <td className="text-center">
                    {item.part === "idols" ? (
                      <>
                        <Button variant="danger" size="sm" className="mr-2">
                          Delete
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="danger" size="sm" className="mr-2">
                          Delete
                        </Button>
                        <Button
                          style={{
                            background: "black",
                            color: "white",
                            borderColor: "black",
                          }}
                          size="sm"
                          className="ml-2"
                          onClick={() => handleShow(item.note)}
                        >
                          Show Details
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row className="mt-4">
            <Col xs={12} className="text-right">
              <h4>
                Total: ₹
                {cartItems
                  .reduce((acc, item) => acc + item.totalPrice, 0)
                  .toLocaleString()}
              </h4>
            </Col>
          </Row>

          <div className="p-4">
            <h2 className="text-center mb-4" style={{ color: "#333" }}>
              Enter Shipping & Billing Address
            </h2>
            <Form>
              <Row>
                <Col md={6}>
                  <h5 style={{ color: "#555" }}>Billing Address</h5>
                  <div className="mt-lg-5">
                    <Form.Group controlId="billingEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="billToName" className="mb-3">
                      <Form.Label>Bill to Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="billingAddress" className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="billingCity" className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="Enter city" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="billingZip" className="mb-3">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter zip code"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="billingState" className="mb-3">
                          <Form.Label>State</Form.Label>
                          <Form.Control type="text" placeholder="Enter state" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="billingCountry" className="mb-3">
                          <Form.Label>Country</Form.Label>
                          <Form.Select>
                            <option>Select Country</option>
                            <option>India</option>
                            <option>USA</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group controlId="billingPhone" className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={6}>
                  <h5 style={{ color: "#555" }}>Shipping Address</h5>

                  <Form.Group controlId="sameAsBilling" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Shipping Address is same as Billing Address"
                    />
                  </Form.Group>
                  <Form.Group controlId="billingEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="shipToName" className="mb-3">
                    <Form.Label>Ship to Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="shippingAddress" className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="shippingCity" className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="shippingZip" className="mb-3">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter zip code"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="shippingState" className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter state" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="shippingCountry" className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Select>
                          <option>Select Country</option>
                          <option>India</option>
                          <option>USA</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="shippingPhone" className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      borderColor: "black",
                      height: "45px",
                      borderRadius: "2px",
                    }}
                    type="submit"
                    className="mt-4 w-100"
                  >
                    Confirm Order
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Modal for displaying Note details */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Homam Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Note:</strong>
          </p>
          <p className={style.additionalNote}>{selectedNote}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default CartScreen;
