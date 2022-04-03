import React from "react";

import Filter from "../components/profile-filter";
import ProfileLayout from "../layout/profile-layout";
import ProjectItem from "../containers/project-item";
import ProfileHeader from "./profile-header";

const Profile = () => {
  return (
    <ProfileLayout>
      <ProfileHeader />
      <div>
        <Filter />
        <ProjectItem />
      </div>
    </ProfileLayout>
  );
};

export default Profile;
