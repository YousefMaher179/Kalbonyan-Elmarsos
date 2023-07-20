import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact section">
      <motion.div
        className="container"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="section-title padding padding">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padding padding">
          Have You Any Questions ?
        </h3>
        <h4 className="contact-sub-title">Let's Work Togther!!</h4>
        <div className="row">
          <div className="contact-info-item">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#37b24d" }} />
              <h4>Phone</h4>
              <a href="whatsapp://send?phone=+20 10-9676-4514" className="btn">
                Chat With Me!
              </a>
            </div>
          </div>
          <div className="contact-info-item padding">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#37b24d" }} />
              <h4>Gmail</h4>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=Yousef.Maher.Elkhayt@gmail.com"
                target="_blank"
                className="btn"
              >
                Send Mail!
              </a>
            </div>
          </div>
          <div className="contact-info-item padding">
            <div className="icon">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#37b24d" }}
              />
              <h4>Linkedin</h4>
              <a
                href="https://www.linkedin.com/in/yousef-maher-el-khayat-79281922a/"
                target="_blank"
                className="btn"
              >
                Watch Linkedin!
              </a>
            </div>
          </div>
          <div className="contact-info-item padding">
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} style={{ color: "#37b24d" }} />
              <h4>Github</h4>
              <a
                href="https://github.com/YousefMaher179"
                target="_blank"
                className="btn"
              >
                Watch Github!
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
