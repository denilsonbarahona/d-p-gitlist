import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRepos } from "../../core/actions";
import Filter from "../components/profile-filter";
import ProjectItemDescription from "../components/project-item-description";
import ProjectItemActions from "../components/project-item-actions";
import Pagination from "../components/profile-pagination";
import ProfileLayout from "../layout/profile-layout";
import ProjectItem from "../containers/project-item";
import ProfileHeader from "./profile-header";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    user: { repos_url },
  } = useSelector((state) => state.LoginReducer);
  const { repos } = useSelector((state) => state.ProfileReducer);
  useEffect(() => {
    dispatch(getRepos(repos_url));
  }, []);

  return (
    <ProfileLayout>
      <ProfileHeader />
      <div>
        <Filter />
        {repos[0] &&
          repos[0].map((item) => (
            <ProjectItem key={item.id}>
              <ProjectItemDescription {...item} />
              <ProjectItemActions />
            </ProjectItem>
          ))}
        <Pagination />
      </div>
    </ProfileLayout>
  );
};

export default Profile;
