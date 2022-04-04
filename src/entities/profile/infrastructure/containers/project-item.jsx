import React from "react";

import "../styles/project-item.scss";

const ProjectItem = ({ children }) => {
  return <div className="item">{children}</div>;
};

export default ProjectItem;
