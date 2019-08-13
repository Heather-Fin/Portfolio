import React, { Component } from 'react';
import AboutMe from '../components/AboutMe/AboutMe';

class LandingPage extends Component {

  render () {
    return ( 
      <div>
        <AboutMe className="landing-page--about-me"></AboutMe>/>
      </div>
    );
  }
}

export default LandingPage;