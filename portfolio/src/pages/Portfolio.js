import { faTvAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <motion.div
        className="container"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="section-title padding">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-heading padding">
            <h2>My Recent Projects :</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item padding">
            <div className="portfolio-item-inner shadow">
              <div className="portfolio-img">
                <img
                  src={require("../assests/images/projects/jobify.png")}
                  alt=""
                />
                <div className="text-container">
                  <a
                    href="https://jobify-application.onrender.com/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faTvAlt}
                      style={{ color: "#37b24d" }}
                    />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YousefMaher179/Jobify-app.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#37b24d" }}
                    />
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="langUsed">
              <p>MongoDB</p>
              <p>Express.js</p>
              <p>React.js</p>
              <p>Node.js</p>
            </div>
          </div>
          <div className="portfolio-item padding">
            <div className="portfolio-item-inner shadow">
              <div className="portfolio-img">
                <img
                  src={require("../assests/images/projects/cars.png")}
                  alt=""
                />
                <div className="text-container">
                  <a href="https://cars-strore.web.app/" target="_blank">
                    <FontAwesomeIcon
                      icon={faTvAlt}
                      style={{ color: "#37b24d" }}
                    />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YousefMaher179/Cars-Store.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#37b24d" }}
                    />
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="langUsed">
              <p>React.js</p>
              <p>Css</p>
            </div>
          </div>
          <div className="portfolio-item padding">
            <div className="portfolio-item-inner shadow">
              <div className="portfolio-img">
                <img
                  src={require("../assests/images/projects/notes.png")}
                  alt=""
                />
                <div className="text-container">
                  <a
                    href="https://notes-application-n7uy.onrender.com/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faTvAlt}
                      style={{ color: "#37b24d" }}
                    />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YousefMaher179/Notes-App.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#37b24d" }}
                    />
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="langUsed">
              <p>MongoDB</p>
              <p>Express.js</p>
              <p>React.js</p>
              <p>Node.js</p>
            </div>
          </div>
          <div className="portfolio-item padding">
            <div className="portfolio-item-inner shadow">
              <div className="portfolio-img">
                <img
                  src={require("../assests/images/projects/appie.png")}
                  alt=""
                />
                <div className="text-container">
                  <a
                    href="https://yousefmaher179.github.io/Appie/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faTvAlt}
                      style={{ color: "#37b24d" }}
                    />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YousefMaher179/Appie.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#37b24d" }}
                    />
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="langUsed">
              <p>Html</p>
              <p>Css</p>
            </div>
          </div>
          <div className="portfolio-item padding">
            <div className="portfolio-item-inner shadow">
              <div className="portfolio-img">
                <img
                  src={require("../assests/images/projects/ominoo.png")}
                  alt=""
                />
                <div className="text-container">
                  <a
                    href="https://omnifood-yousef179.netlify.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faTvAlt}
                      style={{ color: "#37b24d" }}
                    />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YousefMaher179/ominoo-food.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#37b24d" }}
                    />
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="langUsed">
              <p>Html</p>
              <p>Css</p>
            </div>
          </div>
          <div className="portfolio-item padding">
            <div className="portfolio-item-inner shadow">
              <div className="portfolio-img">
                <img
                  src={require("../assests/images/projects/kanban.png")}
                  alt=""
                />
                <div className="text-container">
                  <a
                    href="https://yousefmaher179.github.io/Task-of-level-2/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faTvAlt}
                      style={{ color: "#37b24d" }}
                    />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YousefMaher179/Task-of-level-2.git"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#37b24d" }}
                    />
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="langUsed">
              <p>Html</p>
              <p>Css</p>
              <p>Js</p>
              <p>OOP</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
