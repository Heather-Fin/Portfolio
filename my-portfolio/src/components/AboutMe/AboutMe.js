import React from 'react';
import PortfolioImg from '../../assets/HeatherImg.jpg';

const AboutMe = () => (

  <div className="about-me">
    <div className="about-me--content">
      <h1 className="about-me--h1">Heather Finnegan</h1>
      <p className="about-me--p">Heather Finnegan is a Computer Science graduate student studying at The University of Texas at Dallas. Her area of focus is in interactive computing and she is interested in Front End Development. 
      She is a highly organized and team oriented individual who has a passion for creating content that improves people’s lives. In her free time, she loves learning about various topics including iOS App Development, Web Programming, and Virtual Reality. She is an enthusiast of podcasts, video games, hiking, and her dog!
      </p>
    </div>
    <div className="about-me--img">
      <img src={PortfolioImg} alt="Portrait of Heather Finnegan" className="about-me--portfolio-img" />
    </div>
  </div>
);

export default AboutMe;