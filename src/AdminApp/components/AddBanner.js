import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

const AddBanner = () => {
  const [bannerData, setBannerData] = useState({
    image: null,
    imagePreview: "",
    h3Text: "",
    pText: "",
    buttonType: "",
  });

  const handleInputChange = (field, value) => {
    setBannerData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBannerData((prev) => ({
          ...prev,
          image: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("New Banner Data:", bannerData);
    alert("Banner Added Successfully!");
    setBannerData({
      image: null,
      imagePreview: "",
      h3Text: "",
      pText: "",
      buttonType: "",
    });
  };

  return (
    <Container className="my-4">
      <h2 className="font-weight-bold text-primary mb-4 ">Add New Banner</h2>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-lg p-4">
            <Form>
              <Form.Group controlId="h3Text" className="mb-3">
                <Form.Label>Heading</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter heading"
                  value={bannerData.h3Text}
                  onChange={(e) => handleInputChange("h3Text", e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="pText" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={bannerData.pText}
                  onChange={(e) => handleInputChange("pText", e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="buttonType" className="mb-3">
                <Form.Label>Button Text</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter button text"
                  value={bannerData.buttonType}
                  onChange={(e) =>
                    handleInputChange("buttonType", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group controlId="image" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Form.Group>
              {bannerData.imagePreview && (
                <div className="text-center mb-3">
                  <Card.Img
                    src={bannerData.imagePreview}
                    alt="Preview"
                    className="img-fluid rounded"
                  />
                </div>
              )}
              <div className="text-center">
                <Button variant="primary" onClick={handleSave}>
                  Add Banner
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBanner;
