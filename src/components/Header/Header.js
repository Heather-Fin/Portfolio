import React from 'react';
import PortfolioImg from '../../assets/HeatherImg.jpg';

const Header = () => (
  <div className="header">
    <div className="header--content">
      <h1 className="header--h1">Hello, I'm <span className="header--h1-alt">Heather Finnegan</span>.<br />I'm a front-end web developer.</h1>
    </div>
    <div className="header--img">
      <img src={PortfolioImg} alt="Portrait of Heather Finnegan" className="header--portfolio-img" />
    </div>
  </div>
);

export default Header;