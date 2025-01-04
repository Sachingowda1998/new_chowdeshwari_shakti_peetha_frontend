import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Image,
  Table,
  Form,
  Button,
  Container,
} from "react-bootstrap";

import "../CSS/pujadetails.css";

function PujaDetails() {
  const [date, setDate] = useState("2024-12-12");
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
      <Container>
        <Row>
          <Col md={8}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title
                  className="text-center mb-4 pujadetailstitle"
                  // style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  Aditya Homam
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
                      src="https://www.saranam.com/asset/cmsimage/homam/8bc45cc286a35ef399deadd506a0dfd4_222_222_thumb.jpg"
                      alt="Surya Deity"
                      fluid
                      style={{ borderRadius: "8px", marginBottom: "20px" }}
                    />
                  </Col>
                </Row>

                <Card.Text 
                className="pujaDetailsdescription"
                // style={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  The homam is performed invoking the blessings of Aditya, the
                  sun god. He is also known as Surya or Ravi. Those who suffer
                  the ill effects of Surya dasai, Surya bukthi would benefit
                  from this homam. Resolution of issues related to father and
                  inheritance from paternal side, atma and physical strength,
                  alleviation of defects in the right eye are the benefits from
                  this homam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Homam Options
                </Card.Title>
                <Form>
                  <Table bordered responsive hover>
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check
                            type="radio"
                            name="homamOptions"
                            value="Option 1"
                            onChange={handleSelection}
                            className="objectdetails-options-radio"
                          />
                          Option 1
                        </td>

                        <td className="column-text-color">
                          <p>No. of Priests: 1</p>
                          <p>No. of Chants: 108</p>
                          <p>
                            Time:{" "}
                            <span className="highlight-time">45min - 1hr</span>
                          </p>
                          <p>
                            Charges:{" "}
                            <span className="highlight-price">₹7000/-</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check
                            type="radio"
                            name="homamOptions"
                            value="Option 2"
                            onChange={handleSelection}
                          />
                          Option 2
                        </td>

                        <td className="column-text-color">
                          <p>No. of Priests: 2</p>
                          <p>No. of Chants: 216</p>
                          <p>
                            Time:{" "}
                            <span className="highlight-time">
                              1hr - 1:15mins
                            </span>
                          </p>
                          <p>
                            Charges:{" "}
                            <span className="highlight-price">₹11000/-</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check
                            type="radio"
                            name="homamOptions"
                            value="Option 3"
                            onChange={handleSelection}
                          />
                          Option 3
                        </td>

                        <td className="column-text-color">
                          <p>No. of Priests: 4</p>
                          <p>No. of Chants: 432</p>
                          <p>
                            Time:{" "}
                            <span className="highlight-time">
                              1:30mins - 1:45mins
                            </span>
                          </p>
                          <p>
                            Charges:{" "}
                            <span className="highlight-price">₹16000/-</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check
                            type="checkbox"
                            name="homamOptions"
                            value="Homam Videos"
                            label="Homam Videos"
                          />
                        </td>

                        <td className="column-text-color">
                          <p>
                            Charges:{" "}
                            <span className="highlight-price">₹2000/-</span>
                          </p>
                          <p>Get a CD-ROM recording of the entire ritual.</p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Col
                    md={12}
                    className="mx-auto p-4 shadow rounded"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <h4
                      className="text-center mb-4"
                      style={{ color: "#2c3e50" }}
                    >
                      Puja Details
                    </h4>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "#34495e" }}>
                          Date to Perform the Puja
                        </Form.Label>
                        <Form.Control type="date" value={date}  />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "#34495e" }}>
                          Name (Homam will be performed in this Name)
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Col>
                        <Form.Group>
                          <Form.Label style={{ color: "#34495e" }}>
                            Nakshatra
                          </Form.Label>
                          <Form.Select>
                            <option>Select Nakshatra</option>
                            <option>Ashwini</option>
                            <option>Bharani</option>
                            <option>Krittika</option>
                            <option>Rohini</option>
                            <option>Mrigashira</option>
                            <option>Ardra</option>
                            <option>Punarvasu</option>
                            <option>Pushya</option>
                            <option>Ashlesha</option>
                            <option>Magha</option>
                            <option>Purva Phalguni</option>
                            <option>Uttara Phalguni</option>
                            <option>Hasta</option>
                            <option>Chitra</option>
                            <option>Swati</option>
                            <option>Vishakha</option>
                            <option>Anuradha</option>
                            <option>Jyeshtha</option>
                            <option>Mula</option>
                            <option>Purva Ashadha</option>
                            <option>Uttara Ashadha</option>
                            <option>Shravana</option>
                            <option>Dhanishta</option>
                            <option>Shatabhisha</option>
                            <option>Purva Bhadrapada</option>
                            <option>Uttara Bhadrapada</option>
                            <option>Revati</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label style={{ color: "#34495e" }}>
                            Rasi (Moon Sign)
                          </Form.Label>
                          <Form.Select>
                            <option>Select Rasi</option>
                            <option>Mesha (Aries)</option>
                            <option>Vrishabha (Taurus)</option>
                            <option>Mithuna (Gemini)</option>
                            <option>Karka (Cancer)</option>
                            <option>Simha (Leo)</option>
                            <option>Kanya (Virgo)</option>
                            <option>Tula (Libra)</option>
                            <option>Vrishchika (Scorpio)</option>
                            <option>Dhanu (Sagittarius)</option>
                            <option>Makara (Capricorn)</option>
                            <option>Kumbha (Aquarius)</option>
                            <option>Meena (Pisces)</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "#34495e" }}>
                          Additional Info
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="If star and rasi are unknown, enter place, time, and date of birth here."
                        />
                      </Form.Group>

               

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
                    </Form>
                  </Col>

                  {/* <Button
                  className="mt-3"
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={!selectedOption}
                  style={{ width: "100%" }}
                >
                  Confirm Selection
                </Button> */}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PujaDetails;
