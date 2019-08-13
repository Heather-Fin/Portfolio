import React from 'react';
import PortfolioImg from '../../assets/HeatherImg.jpg';

const AboutMe = () => (

  <div className="about-me">
    <div className="about-me--content">
      <h1 className="about-me--h1">Hello, I'm <span className="about-me--h1-alt">Heather Finnegan</span>.<br />I'm a front-end web developer.</h1>
    </div>
    <div className="about-me--img">
      <img src={PortfolioImg} alt="Portrait of Heather Finnegan" className="about-me--portfolio-img" />
    </div>
  </div>
);

export default AboutMe;