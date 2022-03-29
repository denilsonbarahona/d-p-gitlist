import React from "react";
import "../styles/profile-layout.scss";

const ProfileLayout = ({ children }) => {
  return <main className="layout">{children}</main>;
};

export default ProfileLayout;
