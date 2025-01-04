import React, { useState } from "react";
import { Table, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa"; // Using react-icons for icons

const AdminPujaCategories = () => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false); // Track if we are editing or adding a category
  const [categoryName, setCategoryName] = useState("");
  const [serviceType, setServiceType] = useState("Puja");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // Store the category ID for editing
  const [categories, setCategories] = useState([
    { id: 1, name: "Regular Pujas", serviceType: "Puja" },
    { id: 2, name: "Special Occasion Pujas", serviceType: "Puja" },
    { id: 3, name: "Vedic Pujas", serviceType: "Puja" },
    { id: 4, name: "Personal Pujas", serviceType: "Puja" },
    { id: 5, name: "Temple Services", serviceType: "Puja" },
  ]);

  const handleEdit = (category) => {
    // Set the selected category details to state
    setCategoryName(category.name);
    setServiceType(category.serviceType);
    setSelectedCategoryId(category.id);
    setEditMode(true); // Switch to edit mode
    setShowModal(true); // Open the modal
  };

  const handleDelete = (id) => {
    if (
      window.confirm(`Are you sure you want to delete category with ID: ${id}?`)
    ) {
      setCategories(categories.filter((category) => category.id !== id));
      alert(`Category with ID: ${id} deleted.`);
    }
  };

  const handleAddCategory = () => {
    if (categoryName) {
      const newCategory = { id: Date.now(), name: categoryName, serviceType };
      setCategories([...categories, newCategory]);
      setCategoryName("");
      setServiceType("Puja");
      setShowModal(false);
    } else {
      alert("Please enter a category name");
    }
  };

  const handleUpdateCategory = () => {
    if (categoryName) {
      const updatedCategories = categories.map((category) =>
        category.id === selectedCategoryId
          ? { ...category, name: categoryName, serviceType }
          : category
      );
      setCategories(updatedCategories);
      setCategoryName("");
      setServiceType("Puja");
      setSelectedCategoryId(null);
      setEditMode(false); // Reset edit mode
      setShowModal(false); // Close the modal
    } else {
      alert("Please enter a category name");
    }
  };

  return (
    <div className="mt-4">
      <h2 className="font-weight-bold text-primary mb-4">Puja Categories</h2>
      {/* <Row className="d-flex">
        <Col className="ms-auto">
          <Button variant="success" onClick={() => { setShowModal(true); setEditMode(false); }} className="mb-3">
            <FaPlusCircle className="me-2" />
            Add Category
          </Button>
        </Col>
      </Row> */}

      <Row className="d-flex">
        <Col md={2} className="ms-auto mb-2">
          <Button
            variant="success"
            type="submit"
            className="w-100 h-sm-50"
            onClick={() => {
              setShowModal(true);
              setEditMode(false);
            }}
          >
            <FaPlusCircle className="me-2" />
            Add Category
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Service Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.serviceType}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(category)}
                  className="me-2"
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(category.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? "Edit Category" : "Add New Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="serviceType" className="mt-3">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                as="select"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="Puja">Puja</option>
                <option value="Special Occasion Pujas">
                  Special Occasion Pujas
                </option>
                <option value="Vedic Pujas">Vedic Pujas</option>
                <option value="Personal Pujas">Personal Pujas</option>
                <option value="Temple Services">Temple Services</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={editMode ? handleUpdateCategory : handleAddCategory}
          >
            {editMode ? "Update Category" : "Add Category"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPujaCategories;
