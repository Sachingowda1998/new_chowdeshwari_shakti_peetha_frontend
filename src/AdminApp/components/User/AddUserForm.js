import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../CSS/admin-AddUserForm.css";

const AddUserForm = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} sm={12} className="border p-4 shadow-sm rounded">
          <h2 className="text-center text-primary mb-4 font-weight-bold">
            Add User
          </h2>
          <Form>
            <Row className="mb-3">
              <Col md={6} sm={12}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="formPhoneNo">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6} sm={12}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="formDateOfRegister">
                  <Form.Label>Date of Register</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="w-50">
                  Add User
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUserForm;
