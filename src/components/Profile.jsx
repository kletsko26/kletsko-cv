import React from "react";
import { profileData } from "../cv";
import Title from "./Shared/Title";
const Profile = () => {
  return (
    <section className="profile section" id="profile">
      <Title title={profileData.title} />
      {profileData.descriptions.map((describe, i) => (
        <p
          key={i}
          className="profile__description"
          dangerouslySetInnerHTML={{ __html: describe }}
        />
      ))}
    </section>
  );
};

export default Profile;
