import React, { Component } from 'react';
import GitHubIcon from '../../assets/github-logo-icon.png';

class Projects extends Component {
  render() {
    return (
      <div className="projects--card">
          <img src={this.props.img} alt="Screengrab of project" className="projects--img" />
          <div className="projects--col">
            <h2 className="projects--h2">{this.props.title}</h2> 
            <a href={this.props.gitHubLink} target="_blank">
              <img src={GitHubIcon} alt="GitHubIcon" className="projects--github-img"/>
            </a>
            <h3 className="projects--h3">{this.props.date}</h3>
            <p className="projects--p">{this.props.description}</p>
          </div>
      </div>
    );
  }
}

export default Projects;