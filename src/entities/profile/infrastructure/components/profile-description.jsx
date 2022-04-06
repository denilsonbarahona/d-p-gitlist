import React from "react";
import Label from "@shared/components/label";
import Paragraph from "@shared/components/paragraph";
import { useSelector } from "react-redux";

const ProfileDescription = () => {
  const {
    user: { bio, followers, following, location, blog, twitter_username },
  } = useSelector((state) => state.LoginReducer);

  return (
    <div className="profile-description">
      <Paragraph className="label">{bio}</Paragraph>
      <div className="profile-follow">
        <Label className="label">
          <i className="icon-users" />
          <span>{followers}</span> Followers
        </Label>
        <Label className="label">
          -<span>{following}</span> Following
        </Label>
      </div>
      <Label className="label">
        <i className="icon-location" />
        {location}
      </Label>
      <Label className="label">
        <i className="icon-link" />
        {blog}
      </Label>
      <Label className="label">
        <i className="icon-twitter" />
        {twitter_username}
      </Label>
    </div>
  );
};

export default ProfileDescription;
