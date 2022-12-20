import React from "react";
import "./style.css";

const Button = (props: any) => {
  return (
    <button 
    value={props.number}
    type="button"
    className={props.active ? "active button-number" : "button-number"}
    onClick={props.onClick}
    >
      {props.number}
    </button>
  );
};

export default Button;
