import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card, Table } from "react-bootstrap";

const AdminEditPuja = () => {
  const [puja, setPuja] = useState({
    id: 8,
    title: "Vastu Shanti Homam",
    description:
      "Conducted to nullify Vastu doshas and ensure harmony in homes and offices.",
    price: "₹7,500",
    servicetype: "puja",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI-JUXeg98GiTRmWbEanqFpLISGmRr7eSyg&s",
    AvailableSlots: 20,
    homamOptions: [
      {
        id: 1,
        priests: 1,
        chants: 108,
        time: "45min - 1hr",
        charges: "₹7000/-",
      },
      {
        id: 2,
        priests: 2,
        chants: 216,
        time: "1hr - 1:15mins",
        charges: "₹11000/-",
      },
      {
        id: 3,
        priests: 4,
        chants: 432,
        time: "1:30mins - 1:45mins",
        charges: "₹16000/-",
      },
    ],
    homamVideosCharge: "₹2000/-",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPuja({ ...puja, [name]: value });
  };

  const handleOptionChange = (id, field, value) => {
    const updatedOptions = puja.homamOptions.map((option) =>
      option.id === id ? { ...option, [field]: value } : option
    );
    setPuja({ ...puja, homamOptions: updatedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Puja Data:", puja);
    alert("Puja details updated successfully!");
  };

  return (
    <Container>
      <Card className="p-4 shadow-sm mt-4">
        <h2 className="text-center mb-4">Edit Puja Service</h2>
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
              {puja.homamOptions.map((option) => (
                <tr key={option.id}>
                  <td>Option {option.id}</td>
                  <td>
                    <Form.Control
                      type="number"
                      value={option.priests}
                      onChange={(e) =>
                        handleOptionChange(option.id, "priests", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={option.chants}
                      onChange={(e) =>
                        handleOptionChange(option.id, "chants", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={option.time}
                      onChange={(e) =>
                        handleOptionChange(option.id, "time", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={option.charges}
                      onChange={(e) =>
                        handleOptionChange(option.id, "charges", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminEditPuja;
