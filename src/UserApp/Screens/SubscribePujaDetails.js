import React, { useState } from "react";
import { Row, Col, Card, Image, Table, Form, Button } from "react-bootstrap";
// import SidebarAccordion from "../Components/ObjectsofPujasSections/SidebarAccordion";
// import "../CSS/SidebarAccordion.css";
import "../CSS/Subscribedetails.css"

// import SubScriptionSidebar from "../Components/SubScriptionSibebar";

function SubScribePujaDetails() {
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
                className="text-center mb-4 subscribedetailtitle"
                // style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Housewarming Puja (Griha Pravesh Puja)
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
                    src="assets/subsciption/Housewarming.png"
                    alt="Surya Deity"
                    fluid
                    width={250}
                    height={300}
                    style={{ borderRadius: "8px", marginBottom: "20px" }}
                  />
                </Col>
              </Row>

              <Card.Text className="subscibedetailstext"
              // style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                A Housewarming Puja, known as Griha Pravesh Puja, is an
                important Hindu ritual performed when entering a newly
                constructed or purchased home. This puja is believed to purify
                the house, ward off negative energies, and invite positive
                vibes, prosperity, and blessings from the divine. Traditionally,
                the puja begins by selecting an auspicious day, often based on
                the Hindu calendar and a consultation with a priest. The
                ceremony includes Ganesh Puja (to remove obstacles), Vastu
                Shanti Puja (to harmonize energies), and a Havan (fire ritual)
                to invoke divine blessings. Family members also participate in
                chanting mantras and offering prayers to deities. During the
                ceremony, milk is boiled to symbolize prosperity, and the house
                is decorated with rangoli, flowers, and mango leaves. Guests are
                invited for blessings and a celebratory meal. Performing this
                ritual ensures happiness, health, and harmony in the new home.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* column 3 */}

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                
              </Card.Title>
              <Form>
                
                <Col
                  md={12}
                  className="mx-auto p-4 shadow rounded"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <h4 className="text-center mb-4" style={{ color: "#2c3e50" }}>
                    Subscribe Info
                  </h4>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: "#34495e" }}>
                     Date 
                      </Form.Label>
                      <Form.Control type="date" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: "#34495e" }}>
                        Name 
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" value="john" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: "#34495e" }}>
                        Address 
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter Address" value="john@gmail.com" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3">
                      <Form.Label style={{ color: "#34495e" }}>
                        State 
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter State" />
                    </Form.Group> */}

                   
{/* 
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: "#34495e" }}>
                        Additional Info
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder=""
                      />
                    </Form.Group> */}


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
                      Subscribe
                    </Button>
                  </Form>
                </Col>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SubScribePujaDetails;
