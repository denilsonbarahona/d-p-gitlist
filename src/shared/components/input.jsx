import React from "react";
import "@styles/input.scss";

const Input = ({ type, name, id, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="input"
      type={type}
      name={name}
      id={id}
    />
  );
};

export default Input;
