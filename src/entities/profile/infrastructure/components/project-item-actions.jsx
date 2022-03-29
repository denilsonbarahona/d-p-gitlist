import React from "react";
import Button from "@shared/components/button";
import "../styles/project-actions.scss";

const ProjectItemActions = () => {
  return (
    <div className="actions">
      <Button className="button button--isBase button--isIconic">
        <i className="icon-star-full" />
        Start
      </Button>
      <svg width="190" height="25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="#204329" />
            <stop offset="70%" stopColor="#50994C" />
            <stop offset="100%" stopColor="#204329" />
          </linearGradient>
        </defs>
        <path
          d="M 10 20 H 100 C 110 10, 100 10, 110 20 H 200"
          stroke="url(#linear)"
          fill="transparent"
          strokeWidth="2px"
        />
      </svg>
    </div>
  );
};

export default ProjectItemActions;
