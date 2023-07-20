import {
  faCodeBranch,
  faDatabase,
  faLaptopCode,
  faServer,
  faTachometerAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="services section">
      <motion.div
        className="container"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="section-title padding">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="service-item padding">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h4>Frontend development</h4>
              <p>
                I excel in creating highly interactive and user-friendly
                interfaces using React.js. I can develop responsive web designs,
                implement smooth navigation, and integrate various components to
                enhance the user experience.
              </p>
            </div>
          </div>
          <div className="service-item padding">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon icon={faServer} />
              </div>
              <h4>Backend development</h4>
              <p>
                With Node.js and Express.js, I can build robust and scalable
                server-side applications. I have experience in designing and
                developing APIs, handling data storage and retrieval using
                MongoDB, and implementing authentication and authorization
                mechanisms.
              </p>
            </div>
          </div>
          <div className="service-item padding">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon icon={faCodeBranch} />
              </div>
              <h4>RESTful API development</h4>
              <p>
                I can design and develop RESTful APIs to facilitate
                communication between frontend and backend components. Whether
                you need to integrate third-party services, create data
                endpoints, or enable data manipulation, I can build secure and
                efficient APIs.
              </p>
            </div>
          </div>
          <div className="service-item padding">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <h4>Database design and management</h4>
              <p>
                I have expertise in MongoDB, a NoSQL database, and can
                efficiently design data schemas and manage database operations.
                I can optimize queries, ensure data integrity, and implement
                data caching mechanisms for improved performance.
              </p>
            </div>
          </div>
          <div className="service-item padding">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon icon={faTachometerAlt} />
              </div>
              <h4>Performance optimization</h4>
              <p>
                I focus on optimizing web applications for speed, scalability,
                and efficiency. By analyzing code performance, identifying
                bottlenecks, and implementing performance-enhancing techniques,
                I can help improve the overall user experience and reduce load
                times.
              </p>
            </div>
          </div>
          <div className="service-item padding">
            <div className="service-item-inner">
              <div className="icon">
                <FontAwesomeIcon icon={faWrench} />
              </div>
              <h4>Maintenance and support</h4>
              <p>
                I offer ongoing maintenance and support services to ensure that
                your web application remains up-to-date, secure, and bug-free.
                Whether it's fixing issues, adding new features, or providing
                technical support, I am committed to the long-term success of
                your application.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
