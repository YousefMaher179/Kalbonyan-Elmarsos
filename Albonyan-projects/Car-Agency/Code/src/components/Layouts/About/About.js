import React from "react";
import carImg from "../../../assests/Group 1127.png";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <section id="About" className={classes.about}>
      <div>
        <div className={classes["about-header"]}>
          <span>ABOUT US</span>
          <p>About</p>
        </div>
        <div className={classes["about-text"]}>
          <p>
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety.
            <br />
            <br /> At YourCar, we are committed to creating a stress-free and
            enjoyable car buying experience. We understand that purchasing a
            luxury car can be a significant investment, which is why we offer
            flexible financing options to make the process more manageable. Our
            team is available to answer any questions and provide guidance
            throughout the entire buying process. We take pride in our
            outstanding customer service and attention to detail, and we are
            confident that our clients will be satisfied with their experience
            at YourCar.
          </p>
        </div>
      </div>
      <div className={classes.img}>
        <img src={carImg} alt="car" />
      </div>
    </section>
  );
};

export default About;
