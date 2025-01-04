import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom"; // For extracting ID from URL

const EditBannerForm = () => {
  const { id } = useParams(); // Assuming you use React Router to extract the ID
  const [carouselData, setCarouselData] = useState([
    {
      slno: 1,
      image: "assets/subsciption/Festival.png",
      h3Text: "Puja - The Divine Connection",
      pText:
        "Engaging in Puja is a way of connecting with the divine, offering prayers and gratitude for the blessings received.",
      buttonType: "Book Now",
    },
  ]);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const selectedItem = carouselData.find((item) => item.slno === parseInt(1));
    if (selectedItem) setCurrentItem(selectedItem);
  }, [id, carouselData]);

  const handleInputChange = (field, value) => {
    setCurrentItem((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const updatedData = carouselData.map((item) =>
      item.slno === parseInt(id) ? currentItem : item
    );
    setCarouselData(updatedData);
    console.log("Updated Carousel Data:", updatedData);
    alert("Data Saved Successfully!");
  };

  if (!currentItem) {
    return (
      <Container className="my-4 text-center">
        <h4>Loading data...</h4>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Edit Carousel Item</h2>
      <Card className="shadow-lg p-3">
        <Card.Img
          variant="top"
          src={currentItem.image}
          alt={currentItem.h3Text}
          className="img-fluid rounded"
        />
        <Card.Body>
          <Form>
            <Form.Group controlId="h3Text" className="mb-3">
              <Form.Label>Heading</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.h3Text}
                onChange={(e) => handleInputChange("h3Text", e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="pText" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentItem.pText}
                onChange={(e) => handleInputChange("pText", e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="buttonType" className="mb-3">
              <Form.Label>Button Text</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.buttonType}
                onChange={(e) => handleInputChange("buttonType", e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image Path</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
              />
            </Form.Group>
          </Form>
          <div className="text-center mt-3">
            <Button variant="success" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditBannerForm;
