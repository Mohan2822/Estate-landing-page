import React from 'react';
import { motion } from 'framer-motion';
import brandImg from '../assets/brand_img.png';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">
            About <span className="text-primary text-decoration-underline">Our Brand</span>
          </h2>
          <p className="text-muted">Passionate About Properties, Dedicated to Your Vision</p>
        </motion.div>

        <div className="row align-items-center">
          {/* Left Side - Image */}
          <motion.div
            className="col-md-6 text-center mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={brandImg}
              alt="Our Brand"
              className="img-fluid"
              style={{ width: '80%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Right Side - Text & Stats */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="row mb-4">
              <div className="col-6">
                <h4 className="fw-bold">10+</h4>
                <p className="text-muted">Years of Excellence</p>
              </div>
              <div className="col-6">
                <h4 className="fw-bold">12+</h4>
                <p className="text-muted">Projects Completed</p>
              </div>
              <div className="col-6">
                <h4 className="fw-bold">20+</h4>
                <p className="text-muted">Mn. Sq. Ft. Delivered</p>
              </div>
              <div className="col-6">
                <h4 className="fw-bold">25+</h4>
                <p className="text-muted">Ongoing Projects</p>
              </div>
            </div>

            <p className="text-muted">
              We combine innovative design with timeless elegance to deliver spaces that redefine living.
              From concept to completion, our dedication ensures quality, transparency, and customer satisfaction.
            </p>

            <motion.button
              className="btn btn-primary mt-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
