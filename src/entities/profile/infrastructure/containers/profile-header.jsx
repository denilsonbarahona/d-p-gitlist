import React from "react";
import Button from "@shared/components/button";
import ProfileDescription from "../components/profile-description";
import ProfileImage from "../components/profile-image";
import "../styles/profile-header.scss";

const ProfileHeader = () => {
  return (
    <div className="profile">
      <ProfileImage />
      <div className="profile-actions">
        <Button className="button button--isBase">Follow</Button>
        <Button className="button button--isBase">
          <i className="icon icon--Ispink icon-heart" />
          Sponsor
        </Button>
      </div>
      <ProfileDescription />
    </div>
  );
};

export default ProfileHeader;
