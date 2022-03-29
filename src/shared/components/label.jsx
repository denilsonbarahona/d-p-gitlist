import React from "react";
import "@styles/label.scss";

const Label = ({ children, className }) => {
  return <label className={className}>{children}</label>;
};

export default Label;
