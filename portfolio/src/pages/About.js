import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about section">
      <motion.div
        className="container"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="section-title padding">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padding">
            <div className="row">
              <div className="about-text padding">
                <h3>
                  I'm Yousef Maher and <span>MERN Stack Developer</span>
                </h3>
                <p>
                  I am a passionate MERN stack web developer with expertise in
                  building dynamic and interactive web applications. With a
                  strong foundation in front-end and back-end development, I
                  bring a comprehensive set of skills to create robust and
                  efficient web solutions.
                  <br />
                  <br />
                  In the front-end, I excel in crafting elegant user interfaces
                  using modern JavaScript frameworks such as React.js. I have a
                  deep understanding of HTML5, CSS3, and responsive design
                  principles, ensuring seamless user experiences across devices
                  and browsers. Through my proficiency in Redux, I efficiently
                  manage state and create scalable applications.
                  <br />
                  <br /> On the back-end, I specialize in Node.js, Express.js,
                  and MongoDB, collectively forming the MERN stack. I have
                  hands-on experience in designing and developing RESTful APIs
                  and integrating them with the front-end, enabling smooth data
                  flow and real-time updates. I am adept at working with
                  databases, implementing authentication and authorization
                  mechanisms, and optimizing performance for efficient
                  application operation.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padding">
                <div className="row">
                  <div className="info-item padding">
                    <p>
                      Email: <span>Yousef.Maher.Elkhayat@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padding">
                    <p>
                      Feild: <span>CS</span>
                    </p>
                  </div>
                  <div className="info-item padding">
                    <p>
                      Phone: <span>+20 10-9676-4514</span>
                    </p>
                  </div>
                  <div className="info-item padding">
                    <p>
                      Address: <span>Egypt, Menoufia, Menouf</span>
                    </p>
                  </div>
                  <div className="info-item padding">
                    <p>
                      Work: <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padding">
                    <a
                      href="files/resume.pdf"
                      className="btn"
                      title="My Resume"
                      target="_blank"
                      download
                    >
                      Download CV
                    </a>
                    <NavLink to="/contact" className="btn hire-me">
                      Hire Me
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="skills padding">
                <div className="skill-item padding">
                  <h5>HTML5</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "90%" }}></div>
                    <div className="skill-percent">90%</div>
                  </div>
                </div>
                <div className="skill-item padding">
                  <h5>CSS3</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "85%" }}></div>
                    <div className="skill-percent">85%</div>
                  </div>
                </div>
                <div className="skill-item padding">
                  <h5>JS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "70%" }}></div>
                    <div className="skill-percent">70%</div>
                  </div>
                </div>
                <div className="skill-item padding">
                  <h5>React.js</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "70%" }}></div>
                    <div className="skill-percent">70%</div>
                  </div>
                </div>
                <div className="skill-item padding">
                  <h5>Node.js</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "75%" }}></div>
                    <div className="skill-percent">75%</div>
                  </div>
                </div>
                <div className="skill-item padding">
                  <h5>Express.js</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "75%" }}></div>
                    <div className="skill-percent">75%</div>
                  </div>
                </div>
                <div className="skill-item padding">
                  <h5>TypeScript</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "55%" }}></div>
                    <div className="skill-percent">55%</div>
                  </div>
                </div>
                <div className="skill-item padding">
                  <h5>MongoDB</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "50%" }}></div>
                    <div className="skill-percent">50%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="education padding">
                <h3 className="title">Eduaction</h3>
                <div className="row">
                  <div className="timeline-box padding">
                    <div className="timeline shadow">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <FontAwesomeIcon icon={faCalendar} /> 2018 - 2021
                        </h3>
                        <h4 className="timeline-title">High School degree</h4>
                        <p className="timeline-text">Ahmed Salama School</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <FontAwesomeIcon icon={faCalendar} /> 2021 - 2026
                        </h3>
                        <h4 className="timeline-title">
                          Cyber Security degree
                        </h4>
                        <p className="timeline-text">
                          Faculty Of Elctronic Engineering
                          <br /> Cyber Security Program
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padding">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padding">
                    <div className="timeline shadow">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <FontAwesomeIcon icon={faCalendar} /> 2021 - 2022
                        </h3>
                        <h4 className="timeline-title">intro to web</h4>
                        <p className="timeline-text">Udacity, GDSC</p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <FontAwesomeIcon icon={faCalendar} /> 2022 - 2023
                        </h3>
                        <h4 className="timeline-title">MERN Stack Training</h4>
                        <p className="timeline-text">
                          Kalbonyan Elmarsos Compition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
