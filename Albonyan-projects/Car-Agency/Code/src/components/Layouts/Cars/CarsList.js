import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import Slider from "react-slick";
import classes from "./CarsList.module.css";
import "slick-carousel/slick/slick1.css";
import "slick-carousel/slick/slick-theme1.css";

const CarsList = (props) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("Cars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlides: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Cars" className={classes.container}>
      <div className={classes.header}>
        <h1>CARS</h1>
        <p>Cars</p>
      </div>
      <div className={classes["car-lists"]}>
        <Slider {...settings}>
          {data &&
            data.length > 0 &&
            data.map((card) => (
              <CarCard
                key={card.id}
                id={card.id}
                image={card.image}
                name={card.name}
                class={card.class}
                description={card.description}
                seats={card.seats}
                luggage={card.luggage}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarsList;
