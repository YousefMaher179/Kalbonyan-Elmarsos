import React, { useState } from "react";
import classes from "./Hero.module.css";
import Header from "./Header";
import HeroContent from "../Layouts/Hero/HeroContent";
import Cart from "./Cart";

function Hero() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };
  return (
    <div className={classes.hero}>
      <Header onShow={showCart} />
      {cartIsShown && <Cart onClose={hideCart} />}
      <HeroContent />
    </div>
  );
}

export default Hero;
