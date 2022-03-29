import React from "react";
import "@styles/form.scss";

const Form = ({ children, className, role }) => {
  return (
    <form role={role} className={className}>
      {children}{" "}
    </form>
  );
};

export default Form;
