import React from "react";
import "../CSS/Login/Login.css"
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={5}>
          <div className="p-4 border rounded shadow-sm">
            <h2 className="m-3 text-primary text-center">Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address/Phone:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link to="/" className="float-end">
                  Forgot Your Password
                </Link>
              </Form.Group>
              {/* Login Button on its own line, centered */}
              <Form.Group className="mt-2">
                <Button type="submit" className="w-100 login-button">
                  Login
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="login-footer">
            <p className="text-center login-footer-content">
              Don't have an Account?
              <span className="form-footer">Register</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
