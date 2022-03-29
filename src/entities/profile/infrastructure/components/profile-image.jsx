import React from "react";

const ProfileImage = () => {
  return (
    <figure className="profile-header">
      <img
        width="80"
        height="80"
        className="profile-image"
        alt="profile`s image"
      />
      <figcaption>
        <h1 className="profile-name">Denilson Barahona</h1>
        <h2 className="profile-id">denilsonbarahona</h2>
      </figcaption>
    </figure>
  );
};

export default ProfileImage;
