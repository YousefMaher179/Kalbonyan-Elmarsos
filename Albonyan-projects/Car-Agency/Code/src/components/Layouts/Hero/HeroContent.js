import React from "react";
import classes from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <div id="Home" className={classes["hero-content"]}>
      <div className={classes["hero-text-box"]}>
        <h2>
          Find the perfect car
          <br /> for you at YourCar.
        </h2>
        <p>
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
      </div>
      <div className={classes.button}>
        <p>Discover</p>
        <div>
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7.53961L7 21.5396M21 7.53961H9.33333M21 7.53961V19.2063"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
