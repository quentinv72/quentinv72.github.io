import React from "react";
import "./ProjectBox.css";

function ProjectBox(props) {
  return (
    <div className='project-container'>
      <div className='project-box'>
        <img src={props.src} alt={props.alt} className='project-pic' />
        <a
          className='slider'
          href={props.href}
          target='_blank'
          rel='noopener noreferrer'>
          <div className='description'> {props.children}</div>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;

//content props.children
