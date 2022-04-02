import React, { forwardRef } from "react";
import "@styles/form.scss";

const Form = forwardRef(({ children, className, role, onSubmit }, ref) => {
  return (
    <form ref={ref} onSubmit={onSubmit} role={role} className={className}>
      {children}{" "}
    </form>
  );
});

export default Form;
