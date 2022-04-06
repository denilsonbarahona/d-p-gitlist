import React from "react";
import Label from "@shared/components/label";
import Paragraph from "@shared/components/paragraph";
import { getTimeFormat } from "@shared/utils/dates";
import "../styles/project-description.scss";

const ProjectItemDescription = ({
  name,
  visibility,
  description,
  topics,
  language,
  stargazers_count,
  forks_count,
  pushed_at,
}) => {
  const Updated = new Date(pushed_at);
  const Now = new Date();
  const UpdatedString = `Updated ${getTimeFormat(Now, Updated)}`;

  return (
    <div className="description">
      <div className="description__header">
        <h3 className="description__title">{name}</h3>
        <Label className="label label--isRounded">{visibility}</Label>
      </div>
      <Paragraph>{description}</Paragraph>
      <div className="description__tags">
        {topics.map((item) => (
          <Label key={item} className="label label--isTag">
            {item}
          </Label>
        ))}
      </div>
      <div className="description__info">
        <Label className="label label--isCaption">{language}</Label>
        <Label className="label label--isCaption">
          <i className="icon-star-full" /> {stargazers_count}
        </Label>
        <Label className="label label--isCaption">
          <i className="icon-tree" /> {forks_count}
        </Label>
        <Label className="label label--isCaption">{UpdatedString}</Label>
      </div>
    </div>
  );
};

export default ProjectItemDescription;
