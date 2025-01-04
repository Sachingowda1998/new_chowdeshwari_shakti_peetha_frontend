import React from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import "../CSS/banner.css";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const carouselData = [
    {
      slno: 1,
      image: "assets/subsciption/Festival.png",
      h3Text: "Puja - The Divine Connection",
      pText:
        "Engaging in Puja is a way of connecting with the divine, offering prayers and gratitude for the blessings received.",
      buttonType: "Book Now",
    },
    {
      slno: 2,
      image: "assets/subsciption/Birthday.png",
      h3Text: "Lord Krishna's Blessings",
      pText:
        "May the blessings of Lord Krishna guide you toward peace and prosperity. Embrace the divine wisdom and love.",
      buttonType: "Subscribe Now",
    },
    {
      slno: 3,
      image: "assets/subsciption/Housewarming.png",
      h3Text: "Goddess Lakshmi - Goddess of Wealth",
      pText:
        "Worship Goddess Lakshmi to seek her blessings for abundance, wealth, and happiness in your life.",
      buttonType: "Buy Now",
    },
    {
      slno: 4,
      image: "assets/subsciption/Festival.png",
      h3Text: "Lord Shiva - The Supreme Lord",
      pText:
        "Lord Shiva represents the destruction of evil and the creation of good. Invoke his name for spiritual growth and tranquility.",
      buttonType: "Talk More",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="table-responsive">
      <h2 className="font-weight-bold text-primary mb-4">Banners</h2>

      <Row className="d-flex">
        <Col md={2} className="ms-auto mb-2">
          <Button
            variant="success"
            type="submit"
            className="w-100 h-sm-50 btn-custom"
            onClick={() => navigate("/admin/v1/addbanner")}
          >
            <FaPlusCircle className="me-2" />
            Add Banner
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Image</th>
            <th>Heading</th>
            <th>Description</th>
            <th>Button</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {carouselData.map((item, index) => (
            <tr key={index}>
              <td>{item.slno}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.h3Text}
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
              <td>{item.h3Text}</td>
              <td>{item.pText}</td>
              <td>
                {/* <button className="btn btn-primary">{item.buttonType}</button> */}
                {item.buttonType}
              </td>
              <td>
                <button
                  title="Edit"
                  onClick={() => navigate("/admin/v1/editbannerform")}
                >
                  <FaEdit />
                </button>
                <button
                  title="Delete"
                  onClick={() => alert(`Delete item ${item.slno}`)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Banner;
