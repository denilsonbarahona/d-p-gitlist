import React from "react";
import "../../styles/button.scss";

const Button = (props) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
