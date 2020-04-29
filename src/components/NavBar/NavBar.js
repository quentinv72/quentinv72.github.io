import React from "react";
import "./NavBar.css";
import EmailInput from "../EmialInput/EmailInput";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  // const handleHomeClick = (e) => {
  //   e.target.style.backgroundColor = "#e54120";
  //   e.target.style.color = "white";
  // };
  // const handleProjectsClick = (e) => {
  //   e.target.style.backgroundColor = "#579d1f";
  //   e.target.style.color = "white";
  // };
  // const handleInterestsClick = (e) => {
  //   e.target.style.backgroundColor = "#0459db";
  //   e.target.style.color = "white";
  // };

  return (
    <div id='nav-container'>
      <nav>
        <Link to='/' id='home'>
          Home
        </Link>
        <Link id='projects' to='/projects'>
          Projects
        </Link>
        <Link id='interests' to='/interests'>
          Interests
        </Link>
      </nav>
      <EmailInput />
    </div>
  );
}
