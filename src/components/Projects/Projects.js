import React, { Component } from 'react';

class Projects extends Component {

  render() {
    return (
      <div className="projects--card">
          <a href={this.props.link} target="_blank">
            <img src={this.props.img} alt="Screengrab of project" className="projects--img" />
          </a>
          <div className="projects--col">
            <div className="projects--click-link">
              <a href={this.props.link} target="_blank">
                <h2 className="projects--h2">{this.props.title}</h2> 
              </a>
              <a href={this.props.link} target="_blank">
                <img src={this.props.icon} alt="logo" className="projects--icon" />
              </a>
            </div>
            <h3 className="projects--h3">{this.props.date}</h3>
            <p className="projects--p">{this.props.description}</p>
          </div>
      </div>
    );
  }
}

export default Projects;