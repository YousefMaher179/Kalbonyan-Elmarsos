import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import classes from "./Testimonials.module.css";
import carImg from "../../../assests/cardcar.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick2.css";
import "slick-carousel/slick/slick-theme2.css";

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const getData = () => {
    fetch("testimonials.json", {
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlides: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % data.length);
    }, settings.autoplaySpeed);
    return () => clearInterval(interval);
  }, [currentSlide, data.length, settings.autoplaySpeed]);

  return (
    <section className={classes.container}>
      <div className={classes["testimonial-header"]}>
        <h1>TESTIMONIALS</h1>
        <p>Testimonials</p>
      </div>
      <div className={classes.cards}>
        <Slider {...settings}>
          {data &&
            data.length > 0 &&
            data.map((card) => (
              <TestimonialCard
                key={card.id}
                name={card.name}
                description={card.description}
                area={card.area}
              />
            ))}
        </Slider>
        <img src={carImg} alt="car photo" />
      </div>
    </section>
  );
};

export default Testimonials;
