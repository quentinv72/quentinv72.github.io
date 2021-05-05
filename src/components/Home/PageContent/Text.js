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
        I am a coder and a problem solver. I am currently working as a{" "}
        <span style={{ color: "#e54120" }}>backend engineer</span> on the catalog integration team
        at{" "}
        <a
          href='https://cornershopapp.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Cornershop
        </a>
        .
      </p>
      <p className='description-text'>
        I graduated from the department of Mathematics at the University of
        Toronto in 2019.
      </p>
      <p className='description-text'>You can check out some of my projects by clicking the <span style={{ color: "#0459db" }}>GitHub</span> icon below.</p>
      <p className="description-text">I hid a secret <span style={{ color: "#1ED760" }}>Spotify</span> playlist on this website. I hope you enjoy finding it and listening to it! <span>&#127926;</span></p>
    </div>
  );
}

export default Text;
