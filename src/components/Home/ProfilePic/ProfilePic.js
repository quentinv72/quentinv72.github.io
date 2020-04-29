import React from "react";
import "./ProfilePic.css";
import profile from "./profile_pic.jpg";
function ProfilePic(props) {
  return (
    <div className='profile-picture'>
      <img src={profile} alt='Profile' id='profile-image' />
      <div className='overlay'>
        <div className='neural-text'>
          This image of me was generated using neural style transfer.
        </div>
      </div>
    </div>
  );
}

export default ProfilePic;
