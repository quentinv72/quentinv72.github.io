import React from "react";
import NavBar from "../NavBar/NavBar";
import Text from "./PageContent/Text";
import "./Home.css";
import ProfilePic from "./ProfilePic/ProfilePic";

export default function Home(props) {
  return (
    <div className='home-grid'>
      <ProfilePic />
      <Text />
    </div>
  );
}
