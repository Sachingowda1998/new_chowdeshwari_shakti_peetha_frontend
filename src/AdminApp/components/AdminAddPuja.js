import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card, Table } from "react-bootstrap";

const AdminAddPuja = () => {
  const [puja, setPuja] = useState({
    title: "",
    description: "",
    price: "",
    servicetype: "",
    image: "",
    AvailableSlots: "",
    homamOptions: [],
    homamVideosCharge: "",
  });

  const [newOption, setNewOption] = useState({
    priests: "",
    chants: "",
    time: "",
    charges: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPuja({ ...puja, [name]: value });
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setNewOption({ ...newOption, [name]: value });
  };

  const addHomamOption = () => {
    const updatedOptions = [...puja.homamOptions, { ...newOption, id: puja.homamOptions.length + 1 }];
    setPuja({ ...puja, homamOptions: updatedOptions });
    setNewOption({ priests: "", chants: "", time: "", charges: "" }); // Reset new option form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Puja Data:", puja);
    alert("Puja added successfully!");
  };

  return (
    <Container>
      <Card className="p-4 shadow-sm mt-4">
        <h2 className="text-center mb-4">Add New Puja Service</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="pujaTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={puja.title}
                  onChange={handleInputChange}
                  placeholder="Enter puja title"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="pujaPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={puja.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="pujaServiceType">
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  type="text"
                  name="servicetype"
                  value={puja.servicetype}
                  onChange={handleInputChange}
                  placeholder="Enter service type"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="pujaSlots">
                <Form.Label>Available Slots</Form.Label>
                <Form.Control
                  type="number"
                  name="AvailableSlots"
                  value={puja.AvailableSlots}
                  onChange={handleInputChange}
                  placeholder="Enter available slots"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="pujaDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={puja.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="pujaImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={puja.image}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              required
            />
          </Form.Group>
          <h4 className="mt-4">Homam Options</h4>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Option</th>
                <th>No. of Priests</th>
                <th>No. of Chants</th>
                <th>Time</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              {puja.homamOptions.map((option, index) => (
                <tr key={index}>
                  <td>Option {option.id}</td>
                  <td>{option.priests}</td>
                  <td>{option.chants}</td>
                  <td>{option.time}</td>
                  <td>{option.charges}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control
                type="number"
                name="priests"
                value={newOption.priests}
                onChange={handleOptionChange}
                placeholder="Priests"
                required
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="number"
                name="chants"
                value={newOption.chants}
                onChange={handleOptionChange}
                placeholder="Chants"
                required
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="text"
                name="time"
                value={newOption.time}
                onChange={handleOptionChange}
                placeholder="Time"
                required
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="text"
                name="charges"
                value={newOption.charges}
                onChange={handleOptionChange}
                placeholder="Charges"
                required
              />
            </Col>
          </Row>
          <div className="text-center mb-3">
            <Button variant="secondary" onClick={addHomamOption}>
              Add Option
            </Button>
          </div>
          <Form.Group className="mb-3" controlId="homamVideosCharge">
            <Form.Label>Homam Videos Charge</Form.Label>
            <Form.Control
              type="text"
              name="homamVideosCharge"
              value={puja.homamVideosCharge}
              onChange={handleInputChange}
              placeholder="Enter Homam Videos charge"
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5">
              Add Puja
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminAddPuja;
