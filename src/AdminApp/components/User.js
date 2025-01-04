import React from "react";
import Table from "react-bootstrap/Table";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../CSS/Admin-UserList.css";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa"; // Using react-icons for icons

const data = [
  {
    id: 1,
    name: "Mark",
    phoneNo: "1234567890",
    email: "mark@gmail.com",
    date: "12/3/2024",
  },
  {
    id: 2,
    name: "John",
    phoneNo: "1234567890",
    email: "john@gmail.com",
    date: "7/10/2024",
  },
  {
    id: 3,
    name: "Smith",
    phoneNo: "1234567890",
    email: "smith@gmail.com",
    date: "5/6/2024",
  },
];

function User() {
  const navigate = useNavigate();
  return (
    <div className="check-user">
      <h2 className="font-weight-bold text-primary mb-4">User Management</h2>
      <div className="w-100 mb-3">
        {/* <Row>
          <Col md={2} className="ms-auto mb-2">
            <Button variant="success" type="submit" className="w-100 h-sm-50 btn-custom" onClick={()=>navigate("/admin/v1/adduserform")}>
            <FaPlusCircle className="me-2" />
              Add User
            </Button>
          </Col>
        </Row> */}

        <Row className="d-flex">
          <Col md={2} className="ms-auto mb-2">
            <Button
              variant="success"
              type="submit"
              className="w-100 h-sm-50"
              onClick={() => navigate("/admin/v1/adduserform")}
            >
              <FaPlusCircle className="me-2" />
              Add User
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={4} sm={12}>
            <Form inline className="d-flex w-100 g-1">
              <Form.Control
                type="text"
                placeholder="Search"
                className="w-100 form-control-custom"
              />
              <Button type="submit" className="w-50 h-sm-50 btn-custom">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="p-0" lg={6} sm={12}>
            <Row className="g-0">
              <Col>
                <Form.Group controlId="formDate1" className="w-100">
                  <Form.Control type="date" className="form-control-custom" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDate2" className="w-100">
                  <Form.Control type="date" className="form-control-custom" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col md={2} className="pl-1" lg={2} sm={12}>
            <Button variant="primary" className="w-100 btn-custom">
              Export to Excel
            </Button>
          </Col>
        </Row>
      </div>

      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>PhoneNo</th>
            <th>Email</th>
            <th>Date of Register</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phoneNo}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              {/* <td className="text-center">
                <i className="fa fa-trash text-danger cursor-pointer"></i>
                <i
                  className="fa fa-edit text-info cursor-pointer"
                  onClick={() => navigate("/admin/v1/edituserform")}
                ></i>
              </td> */}
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => navigate("/admin/v1/edituserform")}
                  className="me-2"
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                 
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default User;
