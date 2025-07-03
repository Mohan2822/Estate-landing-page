import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import profile_img_1 from '../assets/profile_img_1.png';
import profile_img_2 from '../assets/profile_img_2.png';
import profile_img_3 from '../assets/profile_img_3.png';

const testimonials = [
  {
    name: "Donald Jackman",
    role: "Marketing Manager",
    image: profile_img_1,
    rating: 5,
    feedback: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    role: "UI/UX Designer",
    image: profile_img_2,
    rating: 4,
    feedback: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    role: "Co-Founder",
    image: profile_img_3,
    rating: 5,
    feedback: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

const StarRating = ({ count }) => (
  <div className="text-danger mb-2">
    {"★".repeat(count)}{"☆".repeat(5 - count)}
  </div>
);

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Testimonial = () => {
  return (
    <Container id="testimonials" className="my-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2><strong>Customer</strong> <u>Testimonials</u></h2>
        <p className="text-muted">Real Stories from Those Who Found Home with Us</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row className="justify-content-center">
          {testimonials.map((item, index) => (
            <Col md={6} lg={6} className="mb-4" key={index}>
              <motion.div variants={cardVariants}>
                <Card className="shadow-sm border-1 text-center h-100">
                  <Card.Body>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-circle mb-3"
                      width="80"
                      height="80"
                    />
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.role}</Card.Subtitle>
                    <StarRating count={item.rating} />
                    <Card.Text>{item.feedback}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Testimonial;
