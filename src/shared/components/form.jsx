import React, { forwardRef } from "react";
import "@styles/form.scss";

const Form = forwardRef((props, ref) => {
  const { children, ...res } = props;
  return (
    <form ref={ref} {...res}>
      {children}
    </form>
  );
});

export default Form;
