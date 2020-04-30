import React from "react";
import "./Text.css";
import { Link } from "react-router-dom";

function Text(props) {
  return (
    <div className='text'>
      <h1>
        Hello, I'm <span id='first-name'>Quentin</span>{" "}
      </h1>
      <p className='description-text'>
        I am a coder and a problem solver. I am mostly interested in full stack
        web development technologies.
      </p>
      <p className='description-text'>
        I graduated from the department of Mathematics at the University of
        Toronto in 2019.
      </p>
      <p className='description-text'>
        Check out some of my projects in the{" "}
        <Link
          className='highlight'
          style={{ backgroundColor: "#579d1f" }}
          to='/projects'>
          Projects
        </Link>{" "}
        section <span>&#128526;</span>.
      </p>
    </div>
  );
}

export default Text;
