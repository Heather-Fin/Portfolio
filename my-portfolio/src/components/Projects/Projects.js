import React, { Component } from 'react';
import PlaceHolderImg from '../../assets/placeholder-square.jpg';
import GitHubIcon from '../../assets/github-logo-icon.png';

class Projects extends Component {
  render() {
    return (
      <div className="projects--card">
          <img src={PlaceHolderImg} alt="Screengrab of project" className="projects--img" />
          <div className="projects--col">
            <h2 className="projects--h2">{this.props.title}</h2> 
            <img src={GitHubIcon} alt="GitHub icon" className="projects--github-img"/>
            <p className="projects--p">{this.props.description}</p>
          </div>
      </div>
    );
  }
}

export default Projects;