import React from "react";
import ProjectItemDescription from "./project-item-description";
import ProjectItemActions from "./project-item-actions";
import "../styles/project-item.scss";

const ProjectItem = () => {
  return (
    <div className="item">
      <ProjectItemDescription />
      <ProjectItemActions />
    </div>
  );
};

export default ProjectItem;
