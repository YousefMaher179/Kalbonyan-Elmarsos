import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import CartIcon from "./CartIcon";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const clickHandle = () => {
    setClick(!click);
  };

  const closeHandle = () => {
    setClick(false);
  };

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? classes.sticky : classes.nav}>
      <div className={scrolled ? classes.main2 : classes.main}>
        <p>
          Your<span>Car</span>
        </p>
      </div>
      <div className={classes.container}>
        <div>
          <ul
            className={
              !scrolled && !click
                ? classes["nav-menu"]
                : scrolled && !click
                ? classes["nav-menu2"]
                : !scrolled && click
                ? classes["nav-menu-active"]
                : scrolled && click
                ? classes["nav-menu2-active"]
                : ""
            }
          >
            <li>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeHandle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeHandle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeHandle}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="Cars"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeHandle}
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeHandle}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <CartIcon onShow={props.onShow} />
        <div className={classes.hamburger} onClick={clickHandle}>
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
