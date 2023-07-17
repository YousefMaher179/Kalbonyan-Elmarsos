import React from "react";
import classes from "./Companies.module.css";
import img1 from "../../../assests/companies/img1.png";
import img2 from "../../../assests/companies/img2.png";
import img3 from "../../../assests/companies/img3.png";
import img4 from "../../../assests/companies/img4.png";
import img5 from "../../../assests/companies/img5.png";
import img6 from "../../../assests/companies/img6.png";
import img7 from "../../../assests/companies/img7.png";
import img8 from "../../../assests/companies/img8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Companies = () => {

  return (
        <section className={classes["images-container"]}>
          <div className={classes.image}>
            {images.map((img, index) => (
              <img key={index} src={img} alt="car-photo" />
            ))}
          </div>
        </section>
  );
};

export default Companies;
