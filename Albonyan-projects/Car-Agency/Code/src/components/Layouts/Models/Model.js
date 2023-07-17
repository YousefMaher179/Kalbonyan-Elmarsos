import React from "react";
import car3 from "../../../assests/cars/Car1.png";
import car2 from "../../../assests/cars/Car2.png";
import car1 from "../../../assests/cars/Car3.png";
import car6 from "../../../assests/cars/Car4.png";
import car4 from "../../../assests/cars/Car5.png";
import car9 from "../../../assests/cars/Car6.png";
import car8 from "../../../assests/cars/Car7.png";
import car7 from "../../../assests/cars/Car8.png";
import car5 from "../../../assests/cars/Tesla.png";
import classes from "./Model.module.css";

const images = [car1, car2, car3, car4, car5, car6, car7, car8, car9];

const Model = () => {
  return (
        <section className={classes["model-container"]}>
          <div className={classes["images-container"]}>
            {images.map((img, index) => (
              <div key={index} className={classes.gallary}>
                <div className={classes["image-section"]}>
                  <img src={img} alt="car-photo" />
                </div>
                <div className={classes.caption}>
                  <h2>Tesla Model 3</h2>
                  <p>Disruptive, avant-garde, futuristic, innovative.</p>
                  <button>Contact</button>
                </div>
              </div>
            ))}
          </div>
        </section>
  );
};

export default Model;
