import React, { useState } from "react";
import { Row, Col, Card, Image, Table, Form, Button } from "react-bootstrap";
import "../CSS/IdolObjectDetails.css"

import { GoDotFill } from "react-icons/go";


function IdolObjectDetails() {
  const [expandedKey, setExpandedKey] = useState("0");

  const handleToggle = (key) => {
    setExpandedKey((prevKey) => (prevKey === key ? null : key));
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    alert(`You selected: ${selectedOption}`);
  };
  return (
    <div className="ObjectDetailsClassname">
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title
                className="text-center mb-4"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Three Mukhi Round (Nepal)
              </Card.Title>
              {/* <Card.Subtitle
                className="mb-3 text-center"
                style={{ fontSize: "1.1rem", color: "#6c757d" }}
              >
                <strong>Presiding Deity:</strong> Surya
              </Card.Subtitle> */}

              <Row>
                <Col md={12}>
                  <Image
                    src="https://bejandaruwalla.com/cdn/shop/files/1MukhiRudraksha_d46d2d0a-0a89-426b-8ca6-fd71a7e3dac3_large.jpg?v=1710835371"
                    alt="Surya Deity"
                    fluid
                    style={{ borderRadius: "8px", marginBottom: "20px" }}
                  />
                </Col>
              </Row>

              <Card.Text style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                The Mukhi (One-faced) Rudraksha is one of the most revered and
                powerful beads in Hinduism. As the name suggests, it has a
                single facet or "mukh," making it unique compared to other
                Rudraksha beads that have multiple faces. This particular
                Rudraksha is highly auspicious and is believed to symbolize the
                oneness of Lord Shiva, the supreme deity in Hinduism. It is said
                to hold the energy of the universe and represents the embodiment
                of spiritual awakening. Wearing the Mukhi Rudraksha is
                considered a direct connection with Lord Shiva, and it is
                believed to help in spiritual progress, enlightenment, and the
                removal of negative energies. It is especially beneficial for
                individuals seeking to enhance their meditation practice, as it
                is thought to promote inner peace and focus. In terms of
                benefits, the Mukhi Rudraksha is said to bring mental clarity,
                boost self-confidence, and help with overcoming obstacles. It is
                also believed to protect the wearer from external harm and
                negativity. Physically, it is said to have healing properties
                that can help with various ailments, especially those related to
                the mind and emotions. This Rudraksha is rare and highly sought
                after, making it a prized possession for spiritual seekers and
                devotees of Lord Shiva.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mt-3">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary">
                Order this Product
              </Card.Title>
              <hr />
              <div className="mb-3">
                <p className="mb-1">
                  <strong>Three Mukhi from Nepal</strong>{" "}
                  <span className="text-muted">(N)</span>
                </p>
                <p className="text-success fw-bold">₹ 950.00/-</p>
              </div>
              <div>
                <p className="mb-1">
                  <strong>Three Mukhi from Nepal silver capping</strong>{" "}
                  <span className="text-muted">(N)</span>
                </p>
                <p className="text-success fw-bold">₹ 1200.00/-</p>
              </div>
              <Button
                style={{
                  backgroundColor: "#f24141",
                  color: "white",
                  fontWeight: "800px",
                  borderColor: "#f24141",
                }}
                className="w-100"
                disabled={!selectedOption}
              >
                Add to Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default IdolObjectDetails;
