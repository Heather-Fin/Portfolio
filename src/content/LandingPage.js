import React, { Component } from 'react';
//import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';

import ProjectData from '../data/ProjectContent';

class LandingPage extends Component {

  render () {
    return ( 
      <div>
        {/* <NavBar /> */}
        <AboutMe className="landing-page--about-me" id="about-me"></AboutMe>
        {ProjectData.map(project => (
          <Projects 
            id="projects"
            className="landing-page--project-card"
            title={project.title}
            description={project.description}
            date={project.date}
            img={project.img}
            link={project.link}
            icon={project.icon}
          />
        ))}
        <ContactMe id="contact-me"/>
      </div>
    );
  }
}

export default LandingPage;