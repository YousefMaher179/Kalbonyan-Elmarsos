import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import Navbar from "./Navbar";

const Header = (props) => {
  // const [scrolled, setScrolled] = useState(false);
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 300) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header>
      <Navbar onShow={props.onShow} />
    </header>
  );
};

export default Header;
