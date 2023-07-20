import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack Developer",
      ],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section">
      <motion.div
        className="container"
        initial={{ y: 800 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="home-info padding">
            <h3 className="hallo">
              Hello, My Name Is <span className="name">Yousef Maher</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing" ref={el}></span>
            </h3>
            <p>
              I'm MERN Stack Web Developer with extensive experience for over 2
              year. My expertise is to build and maintain websites...
            </p>
            <NavLink to="/contact" className="btn hire-me">
              Hire Me
            </NavLink>
          </div>
          <div className="home-img padding">
            <img src={require("../assests/images/hero.gif")} alt="" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
