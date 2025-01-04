import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SocialMediaLinks = () => {
  const [links, setLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    youtube: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value
    }));
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8} lg={6}>
          <h3>Social Media Links</h3>
          <div className="social-media-icons">
            <Button
              variant="link"
              className="social-btn"
              href={links.facebook || '#'}
              target="_blank"
              disabled={!links.facebook}
            >
              <FaFacebookF size={30} />
            </Button>
            <Button
              variant="link"
              className="social-btn"
              href={links.twitter || '#'}
              target="_blank"
              disabled={!links.twitter}
            >
              <FaTwitter size={30} />
            </Button>
            <Button
              variant="link"
              className="social-btn"
              href={links.instagram || '#'}
              target="_blank"
              disabled={!links.instagram}
            >
              <FaInstagram size={30} />
            </Button>
            <Button
              variant="link"
              className="social-btn"
              href={links.linkedin || '#'}
              target="_blank"
              disabled={!links.linkedin}
            >
              <FaLinkedinIn size={30} />
            </Button>
            <Button
              variant="link"
              className="social-btn"
              href={links.youtube || '#'}
              target="_blank"
              disabled={!links.youtube}
            >
              <FaYoutube size={30} />
            </Button>
          </div>
          <Form className="mt-4">
            <Form.Group controlId="facebookLink">
              <Form.Label>Facebook URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Facebook URL"
                name="facebook"
                value={links.facebook}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="twitterLink">
              <Form.Label>Twitter URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Twitter URL"
                name="twitter"
                value={links.twitter}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="instagramLink">
              <Form.Label>Instagram URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Instagram URL"
                name="instagram"
                value={links.instagram}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="linkedinLink">
              <Form.Label>LinkedIn URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter LinkedIn URL"
                name="linkedin"
                value={links.linkedin}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="youtubeLink">
              <Form.Label>YouTube URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter YouTube URL"
                name="youtube"
                value={links.youtube}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaLinks;
