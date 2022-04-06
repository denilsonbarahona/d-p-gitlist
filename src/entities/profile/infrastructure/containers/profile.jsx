import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Helmet from "react-helmet";
import { getRepos } from "../../core/actions";
import Filter from "../components/profile-filter";
import ProjectItemDescription from "../components/project-item-description";
import ProjectItemActions from "../components/project-item-actions";
import Pagination from "../components/profile-pagination";
import ProfileLayout from "../layout/profile-layout";
import ProjectItem from "../containers/project-item";
import ProfileHeader from "./profile-header";
import Header from "@shared/components/header";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    user: { repos_url },
  } = useSelector((state) => state.LoginReducer);
  const { repos, page } = useSelector((state) => state.ProfileReducer);
  useEffect(() => {
    dispatch(getRepos(repos_url));
  }, []);

  return (
    <>
      <Header />
      <ProfileLayout>
        <Helmet>
          <title>Your repositories</title>
          <meta
            name="description"
            content="GitList is the best hub in the word to store your projects"
          />
        </Helmet>
        <ProfileHeader />
        <div>
          <Filter />
          {repos[page] &&
            repos[page].map((item) => (
              <ProjectItem key={item.id}>
                <ProjectItemDescription {...item} />
                <ProjectItemActions />
              </ProjectItem>
            ))}
          <Pagination />
        </div>
      </ProfileLayout>
    </>
  );
};

export default Profile;
