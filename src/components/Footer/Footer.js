import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

function Footer(props) {
  return (
    <div id='profile-links'>
      <a
        href='https://github.com/quentinv72'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href='https://www.linkedin.com/in/quentin-vilchez-0b2a2a163/'
        target='_blank'
        rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}

export default Footer;
