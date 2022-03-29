import React from "react";
import Label from "@shared/components/label";

const ProfileDescription = () => {
  return (
    <div className="profile-description">
      <Label className="label">Software Engineer, Professor</Label>
      <div className="profile-follow">
        <Label className="label">
          <i className="icon-users" />
          <span>3</span> Followers
        </Label>
        <Label className="label">
          <span>8</span> Following
        </Label>
      </div>
      <Label className="label">
        <i className="icon-location" />
        Ciudad de México
      </Label>
      <Label className="label">
        <i className="icon-link" />
        https://leonidasesteban.com
      </Label>
      <Label className="label">
        <i className="icon-twitter" />
        @LeonidasEsteban
      </Label>
    </div>
  );
};

export default ProfileDescription;
