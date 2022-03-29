import React from "react";
import Label from "@shared/components/label";
import Paragraph from "@shared/components/paragraph";
import "../styles/project-description.scss";

const ProjectItemDescription = () => {
  return (
    <div className="description">
      <div className="description__header">
        <h3 className="description__title">rock-paper-scissors-react</h3>
        <Label className="label label--isRounded">public</Label>
      </div>
      <Paragraph>Challenge #5 from Frontend Mentor</Paragraph>
      <div className="description__tags">
        <Label className="label label--isTag">javascript</Label>
        <Label className="label label--isTag">css</Label>
        <Label className="label label--isTag">html</Label>
      </div>
      <div className="description__info">
        <Label className="label label--isCaption">JavaScript</Label>
        <Label className="label label--isCaption">
          <i className="icon-star-full" /> 338
        </Label>
        <Label className="label label--isCaption">
          <i className="icon-tree" /> 19
        </Label>
        <Label className="label label--isCaption">updated 3 weeks ago</Label>
      </div>
    </div>
  );
};

export default ProjectItemDescription;
