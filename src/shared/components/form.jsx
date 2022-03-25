import React from "react";
import "@styles/form.scss";

const Form = ({ children, className }) => {
  return <form className={className}>{children} </form>;
};

export default Form;
