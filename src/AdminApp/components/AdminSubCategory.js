import React, { useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  {
    slno: 1,
    category: "Regular Pujas",
    subcategory: "Daily Puja",
    serviceType: "Puja",
  },
  {
    slno: 2,
    category: "Regular Pujas",
    subcategory: "Weekly Puja",
    serviceType: "Puja",
  },
  {
    slno: 3,
    category: "Regular Pujas",
    subcategory: "Monthly Puja",
    serviceType: "Puja",
  },
  {
    slno: 4,
    category: "Regular Pujas",
    subcategory: "Festivals Puja",
    serviceType: "Puja",
  },
  {
    slno: 5,
    category: "Special Occasion Pujas",
    subcategory: "Birthday Puja",
    serviceType: "Puja",
  },
  {
    slno: 6,
    category: "Special Occasion Pujas",
    subcategory: "Anniversary Puja",
    serviceType: "Puja",
  },
  {
    slno: 7,
    category: "Special Occasion Pujas",
    subcategory: "Housewarming Puja",
    serviceType: "Puja",
  },
  {
    slno: 8,
    category: "Special Occasion Pujas",
    subcategory: "Namkaran Puja",
    serviceType: "Puja",
  },
];

const AdminSubCategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState({
    category: "",
    subcategory: "",
  });
  const [editMode, setEditMode] = useState(false);

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
      <h2 className="my-4 text-center">Categories and Subcategories</h2>
      <Row className="d-flex">
        <Col md={3} className="ms-auto mb-2">
          <Button
            variant="success"
            type="submit"
            className="w-100 h-sm-50 btn-custom"
            onClick={() => handleModalShow()}
          >
            <FaPlusCircle className="me-2" />
            Add Subcategory
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead className="table-white">
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Service Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item) => (
                <tr key={item.slno}>
                  <td>{item.slno}</td>
                  <td>{item.category}</td>
                  <td>{item.subcategory}</td>
                  <td>{item.serviceType}</td>
                  <td>
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => handleModalShow(item)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.slno)}
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

      {/* Modal for adding/editing subcategory */}
      <Modal show={showModal} onHide={handleModalClose}>
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
                  <option key={category.slno} value={category.category}>
                    {category.category}
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

            {/* <Form.Group controlId="serviceType" className="mb-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                name="serviceType"
                value={newSubCategory.serviceType}
                onChange={handleInputChange}
                placeholder="Enter Service Type"
              />
            </Form.Group> */}

            <Button variant="primary" type="submit">
              {editMode ? "Update Subcategory" : "Save Subcategory"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminSubCategory;
