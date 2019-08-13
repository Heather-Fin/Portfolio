import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';

class LandingPage extends Component {

  render () {
    return ( 
      <div>
        <NavBar />
        <AboutMe className="landing-page--about-me"></AboutMe>
        <Projects />
        <Projects />
        <Projects />
        <ContactMe />
      </div>
    );
  }
}

export default LandingPage;