import React from "react";
import { useAppContext } from "../context/AppContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComments,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Aside = () => {
  const { showSidebar, hideSidebar, toggleSidebar } = useAppContext();

  return (
    <>
      <aside className={showSidebar ? "aside hidden" : "aside"}>
        <div className="logo">
          <a href="/">
            <span>Y</span>M
          </a>
        </div>
        <ul className="nav">
          <li>
            <NavLink to="/" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faHome} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faUser} />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faList} />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBriefcase} />
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faComments} />
              Contact
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
