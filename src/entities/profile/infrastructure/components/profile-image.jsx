import React from "react";
import { useSelector } from "react-redux";

const ProfileImage = () => {
  const {
    user: { avatar_url, login, name },
  } = useSelector((state) => state.LoginReducer);

  return (
    <figure className="profile-header">
      <img
        src={avatar_url}
        width="80"
        height="80"
        className="profile-image"
        alt="profile`s image"
      />
      <figcaption>
        <h1 className="profile-name">{name}</h1>
        <h2 className="profile-id">{login}</h2>
      </figcaption>
    </figure>
  );
};

export default ProfileImage;
