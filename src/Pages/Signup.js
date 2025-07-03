import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Signup = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ width: '100%', maxWidth: '500px' }}
      >
        <Card className="p-4 shadow-lg border-0 rounded-4">
          <h3 className="text-center mb-4 fw-bold text-primary">Create an Account</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 py-2 rounded-pill fs-5">
              Sign Up
            </Button>
          </Form>
          <div className="text-center mt-4">
            Already have an account? <a href="/login">Log In</a>
          </div>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Signup;
