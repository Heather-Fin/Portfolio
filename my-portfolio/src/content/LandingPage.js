import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';

class LandingPage extends Component {

  render () {
    return ( 
      <div>
        <NavBar />
        <AboutMe className="landing-page--about-me"></AboutMe>/>
      </div>
    );
  }
}

export default LandingPage;