import React from "react";
import "../../styles/button.scss";

const Button = ({ children, className, title }) => {
  return (
    <button className={className} title={title}>
      {children}
    </button>
  );
};

export default Button;
