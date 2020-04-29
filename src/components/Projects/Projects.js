import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import colorTherapy from "./Images/loginGif.gif";
import Stack from "./Stack/Stack";

function Projects(props) {
  return (
    <div className='all-projects'>
      <ProjectBox
        src={colorTherapy}
        alt='color therapy gif'
        href='https://github.com/kabirvirji/colortherapy'>
        <h2 className='project-title'>Color Therapy</h2>
        <p className='project-description'>
          Color Therapy is a web app that lets you generate Spotify playlists
          based on your 'color mood'. Go ahead and test it out{" "}
          <span>&#128526;</span>.
        </p>
        <Stack stack={["React", "JavaScript", "HTML", "CSS", "Node", "Git"]} />
      </ProjectBox>
      <ProjectBox>Hello Project 2</ProjectBox>
      <ProjectBox>Hello Project 3</ProjectBox>
      <ProjectBox>Hello Project 4</ProjectBox>
      <ProjectBox>Hello Project 5</ProjectBox>
    </div>
  );
}

export default Projects;
