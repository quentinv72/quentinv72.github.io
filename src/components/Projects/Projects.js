import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import colorTherapy from "./Images/loginGif.gif";
import personalWebsite from "./Images/personal_website.png";
import neuralstyle from "./Images/kirchner_dancer.jpeg";
import twitterSpread from "./Images/twitter_spread.png";
import urlShortener from "./Images/url_shortener.gif";
import Stack from "./Stack/Stack";
import MathVR from "./Images/mathVR.gif";

function Projects(props) {
  return (
    <div className='all-projects'>
      <ProjectBox
        src={colorTherapy}
        alt='color therapy gif'
        href='https://www.colortherapy.io'>
        <h2 className='project-title'>Color Therapy</h2>
        <p className='project-description'>
          Color Therapy is a web app that lets you generate Spotify playlists
          based on your 'color mood'. Go ahead and test it out{" "}
          <span>&#128526;</span>.
        </p>
        <Stack stack={["React", "JavaScript", "HTML", "CSS", "Git"]} />
      </ProjectBox>
      <ProjectBox
        src={MathVR}
        alt='mathVR gif'
        href='https://github.com/quentinv72/MathVR'>
        <h2 className='project-title'>MathVR (In progress)</h2>
        <p className='project-description'>
          Web virtual reality app that helps students visualize mathematical
          concepts.
        </p>
        <Stack stack={["A-Frame", "JavaScript", "HTML", "Git", "Webpack"]} />
      </ProjectBox>

      <ProjectBox
        alt='Neural Style Transfer'
        src={neuralstyle}
        href='https://github.com/quentinv72/NeuralStyleTransfer'>
        <h2 className='project-title'>Neural Style Transfer Web App</h2>
        <p className='project-description'>
          Click to find out more.
          <span>&#128526;</span>.
        </p>
        <Stack
          stack={["Python", "Pytorch", "Docker", "React", "FastAPI", "Git"]}
        />
      </ProjectBox>
      <ProjectBox
        src={urlShortener}
        alt='url shortener'
        href='https://github.com/quentinv72/URL-shortener'>
        <h2 className='project-title'>URL Shortener</h2>
        <p className='project-description'>
          URL shortener web app with login and URL management
          <span>&#128526;</span>.
        </p>
        <Stack
          stack={["JavaScript", "React", "Node", "SQLite", "Express", "Auth0"]}
        />
      </ProjectBox>
      <ProjectBox
        src={twitterSpread}
        alt='graph'
        href='https://drive.google.com/file/d/1CH-kEWi3VG3v6ZkBc8sCXcOW4_V1T1iH/view'>
        <h2 className='project-title'>Twitter Information Spread</h2>
        <p className='project-description'>
          Mathematical model to describe spread of information on Twitter.
          <span>&#128526;</span>.
        </p>
        <Stack stack={["Python", "MatLab", "ODEs"]} />
      </ProjectBox>

      <ProjectBox
        src={personalWebsite}
        alt='personal web'
        href='https://quentinv72.github.io/#/'>
        <h2 className='project-title'>Personal Website</h2>
        <p className='project-description'>
          My personal website
          <span>&#128526;</span>.
        </p>
        <Stack stack={["React", "JavaScript", "HTML", "CSS", "Git"]} />
      </ProjectBox>
    </div>
  );
}

export default Projects;
