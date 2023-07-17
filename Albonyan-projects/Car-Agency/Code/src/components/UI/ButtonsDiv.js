import React from "react";
import classes from "./ButtonsDiv.module.css";

const ButtonsDiv = (props) => {
  return (
    <div className={classes.counter}>
      <button className={classes["add-sub"]} onClick={props.onRemove}>
        -
      </button>
      <span id="amount" className={classes.number}>
        {props.amount}
      </span>
      <button className={classes["add-sub"]} onClick={props.onAdd}>
        +
      </button>
    </div>
  );
};

export default ButtonsDiv;
