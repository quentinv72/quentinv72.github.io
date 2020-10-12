import React from "react";
import "./NavBar.css";
import EmailInput from "../EmailInput/EmailInput";
import resume from "./resume.pdf";
import { Link } from "react-router-dom";

export default function NavBar(props) {
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
      <div className='resume'>
        <a
          href={resume}
          className='resume-button'
          target='_blank'
          rel='noopener noreferrer'>
          Resume
        </a>
      </div>
    </div>
  );
}
