import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const formVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Contact = () => {
  return (
    <div id="contact"> {/* ✅ Added for anchor scrolling */}
      <Container className="my-5">
        {/* Heading Animation */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            <strong>Contact</strong> <u>With Us</u>
          </h2>
          <p className="text-muted">Ready to Make a Move? Let’s Build Your Future Together</p>
        </motion.div>

        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <motion.div
                variants={formVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                variants={formVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            variants={formVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mb-3"
          >
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Message" />
            </Form.Group>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary" size="lg">
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
