import React from "react";
import "../CSS/Signup/Signup.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function SignUp() {
  return (
    <div className="sign-main">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5}>
            <div className="p-4 border rounded shadow-sm">
              <h2 className="m-3 text-primary text-center">Sign UP</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Your Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Your Phone:</Form.Label>
                  <Form.Control type="Number" placeholder="Enter Phone" />
                  <Form.Text className="text-muted">
                    We'll never share your PhoneNumber with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mt-2">
                  <Button type="submit" className="w-100 login-button">
                    SignUp
                  </Button>
                </Form.Group>
              </Form>
            </div>
            <div className="login-footer">
              <p className="text-center login-footer-content">
                Already have an Account?
                <span className="form-footer">Login</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
