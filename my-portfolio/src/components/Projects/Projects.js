import React from 'react';
import PlaceHolderImg from '../../assets/placeholder-square.jpg';
import GitHubIcon from '../../assets/github-logo-icon.png';

const Projects = () => (
  <div className="projects--card">
      <img src={PlaceHolderImg} alt="Screengrab of project" className="projects--img" />
      <div className="projects--col">
        <h2 className="projects--h2">Project Name</h2> 
        <img src={GitHubIcon} alt="GitHub icon" className="projects--github-img"/>
        <p className="projects--p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
  </div>
);

export default Projects;