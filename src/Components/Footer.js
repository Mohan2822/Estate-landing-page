import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../index.css'

const Footer = () => {
  return (
    <footer className="bg-black text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="justify-content-between">
          
          {/* Estate Section */}
          <Col md={4} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: '32px', height: '32px' }}
              >
                <span className="text-light">⚡</span>
              </div>
              <h5 className="ms-2 mb-0 fw-bold fs--4">Estate</h5>
            </div>
            <p className="text-secondary m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </Col>

          {/* Company Section */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold fs-5 mb-3">Company</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#home" className="footer-link  text-decoration-none">Home</a></li>
              <li><a href="#about" className="footer-link  text-decoration-none">About us</a></li>
              <li><a href="#contact" className="footer-link  text-decoration-none">Contact us</a></li>
              <li><a href="#privacy" className="footer-link  text-decoration-none">Privacy policy</a></li>
            </ul>
          </Col>

          {/* Newsletter Section */}
          <Col md={4} className="mb-4">
            <h6 className="fw-bold fs-5 mb-3">Subscribe to our newsletter</h6>
            <p className="text-secondary m-0">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <Form className="d-flex flex-column flex-sm-row mt-2">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className=" input me-sm-2 mb-2 mb-sm-0  border-0 "
              />
              <Button variant="primary">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <hr className="text-secondary my-4" />
        <p className="mb-0 text-center text-secondary small">
          © {new Date().getFullYear()} GreatStack. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
