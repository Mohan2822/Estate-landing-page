import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import img1 from '../assets/project_img_1.jpg';
import img2 from '../assets/project_img_2.jpg';
import img3 from '../assets/project_img_3.jpg';
import img4 from '../assets/project_img_4.jpg';
import img5 from '../assets/project_img_5.jpg';
import img6 from '../assets/project_img_6.jpg';

const projects = [
  { img: img1, title: 'Skyline Haven', price: '$2,50,000', location: 'California' },
  { img: img2, title: 'Vista Verde', price: '$2,50,000', location: 'San Francisco' },
  { img: img3, title: 'Serenity Suites', price: '$2,50,000', location: 'Chicago' },
  { img: img4, title: 'Central Square', price: '$2,50,000', location: 'Los Angeles' },
  { img: img5, title: 'Palm Residences', price: '$2,50,000', location: 'Miami' },
  { img: img6, title: 'Lakeview Homes', price: '$2,50,000', location: 'Seattle' },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <section id="projects" className="px-5 py-5 text-center bg-white">
      <motion.h2
        className="fw-bold mb-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        viewport={{ once: true }}
      >
        <span className="text-dark">Projects</span> <u>Completed</u>
      </motion.h2>

      <motion.p
        className="text-muted mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </motion.p>

      <motion.div
        className="d-flex px-4"
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          paddingBottom: '1rem',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="me-3"
            variants={cardVariants}
            style={{ display: 'inline-block' }}
          >
            <Card
              style={{ width: '240px', display: 'inline-block', verticalAlign: 'top' }}
              className="shadow-sm border-0"
            >
              <Card.Img
                variant="top"
                src={project.img}
                style={{
                  height: '220px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '0.5rem',
                  borderTopRightRadius: '0.5rem',
                }}
              />
              <Card.Body className="text-center p-3">
                <Card.Title className="mb-1 fw-semibold">{project.title}</Card.Title>
                <Card.Text className="text-muted small">
                  {project.price} | {project.location}
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
