import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';

class LandingPage extends Component {

  render () {
    return ( 
      <div>
        <NavBar />
        <AboutMe className="landing-page--about-me"></AboutMe>
        <Projects />
        <Projects />
        <Projects />
      </div>
    );
  }
}

export default LandingPage;