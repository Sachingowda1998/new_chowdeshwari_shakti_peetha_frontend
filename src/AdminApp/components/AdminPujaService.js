import React, { useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Accordion
} from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPlusCircle, FaInfoCircle } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const categories = [
    {
      id: 1,
      title: "Ganapathi Homam",
      description:
        "Performed to invoke Lord Ganesha for removing obstacles and seeking blessings for new beginnings.",
      price: "₹5,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 10
    },
    {
      id: 2,
      title: "Navagraha Homam",
      description:
        "Conducted to appease the nine planets and seek their blessings for prosperity and harmony.",
      price: "₹8,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 20
    },
    {
      id: 3,
      title: "Lakshmi Kubera Homam",
      description:
        "Dedicated to Goddess Lakshmi and Kubera for wealth and financial stability.",
      price: "₹10,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 10
    },
    {
      id: 4,
      title: "Maha Sudarshana Homam",
      description:
        "Performed for protection, health, and success by invoking Lord Sudarshana.",
      price: "₹12,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 20
    },
    {
      id: 5,
      title: "Saraswathi Homam",
      description:
        "Conducted for students and professionals seeking wisdom and knowledge.",
      price: "₹6,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 10
    },
    {
      id: 6,
      title: "Rudra Homam",
      description:
        "Performed to please Lord Shiva for purification, health, and overall well-being.",
      price: "₹15,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 20
    },
    {
      id: 7,
      title: "Chandi Homam",
      description:
        "Dedicated to Goddess Durga for overcoming obstacles and ensuring success.",
      price: "₹20,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 10
    },
    {
      id: 8,
      title: "Vastu Shanti Homam",
      description:
        "Conducted to nullify Vastu doshas and ensure harmony in homes and offices.",
      price: "₹7,500",
      servicetype: "puja",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI-JUXeg98GiTRmWbEanqFpLISGmRr7eSyg&s",
      AvailableSlots: 20
    },
    {
      id: 9,
      title: "Dhanvantri Homam",
      description: "Performed to invoke Lord Dhanvantri for health and wellness.",
      price: "₹9,000",
      servicetype: "puja",
      image: "",
      AvailableSlots: 10
    },
    {
      id: 10,
      title: "Pitra Dosh Nivaran Homam",
      description:
        "Conducted to seek blessings and relieve ancestral karmic issues.",
      price: "₹11,000",
      servicetype: "puja",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSiLPGVXCWHSIRuxtfoVJDmiUXUjRZwHJDaw&s",
      AvailableSlots: 20
    }
  ];
  
   

  const AdminPujaService = () => {
    const [showModal, setShowModal] = useState(false);
    const [newSubCategory, setNewSubCategory] = useState({
      category: "",
      subcategory: "",
    });
    const [editMode, setEditMode] = useState(false);
    const navigate=useNavigate()
  
    const handleModalClose = () => {
      setShowModal(false);
      setEditMode(false);
    };
  
    const handleModalShow = (item = null) => {
      if (item) {
        setNewSubCategory({ ...item });
        setEditMode(true);
      } else {
        setNewSubCategory({
          category: "",
          subcategory: "",
        });
        setEditMode(false);
      }
      setShowModal(true);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewSubCategory({ ...newSubCategory, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (editMode) {
        console.log("Updated Subcategory:", newSubCategory);
      } else {
        console.log("New Subcategory Added:", newSubCategory);
      }
      setShowModal(false);
    };
  
    const handleDelete = (id) => {
      console.log("Deleted subcategory ID:", id);
    };
  
    return (
      <Container fluid>
        <h2 className="my-4 text-center">Service/Puja</h2>
        <Row className="d-flex">
          <Col md={3} className="ms-auto mb-2">
            <Button
              variant="success"
              className="w-100 h-sm-50 btn-custom"
              onClick={() => navigate("/admin/v1/adminaddpuja")}
            >
              <FaPlusCircle className="me-2" />
              Add New Puja Service
            </Button>
          </Col>
        </Row>

        <Row className="mx-auto">
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
          {/* <Col md={6} className="p-0" lg={6} sm={12}>
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
          </Col> */}
          <Col md={2} className="pl-1" lg={2} sm={12}>
            <Button variant="primary" className="w-100 btn-custom">
              Export to Excel
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-white">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>AvailableSlots</th>
                  <th>Option 1 Price</th>
                  <th>Service Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <FaInfoCircle className="me-2" />
                            View Description
                          </Accordion.Header>
                          <Accordion.Body>
                            {item.description}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </td> */}
                    <td>{item.AvailableSlots}</td>
                    <td>{item.price}</td>
                    <td>{item.servicetype}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={() => navigate("/admin/v1/admineditpuja")}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
  
       
        {/* <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editMode ? "Edit Subcategory" : "Add Subcategory"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="category" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={newSubCategory.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
  
              <Form.Group controlId="subcategory" className="mb-3">
                <Form.Label>Subcategory</Form.Label>
                <Form.Control
                  type="text"
                  name="subcategory"
                  value={newSubCategory.subcategory}
                  onChange={handleInputChange}
                  placeholder="Enter Subcategory"
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                {editMode ? "Update Subcategory" : "Save Subcategory"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal> */}
      </Container>
    );
  };
  

export default AdminPujaService;
