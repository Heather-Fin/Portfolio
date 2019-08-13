import React from 'react';
import ContactTile from '../ContactTile/ContactTile';

import LinkedInIcon from '../../assets/linkedin-logo-icon.png';
import GitHubIcon from '../../assets/github-logo-icon.png';
import ResumeIcon from '../../assets/resume-logo-icon.png';

import Resume from '../../assets/Heather-Finnegan-Resume.pdf';

const ContactMe = () => (
  <div className="contact-me">
    <a href="https://www.linkedin.com/in/heatherfinnegan/" target="_blank"><ContactTile title="LinkedIn" img={LinkedInIcon}/></a>
    <a href="https://github.com/Heather-Fin" target="_blank"><ContactTile title="GitHub" img={GitHubIcon}/></a>
    <a href={Resume} target="_blank"><ContactTile title="Resume" img={ResumeIcon}/></a>
  </div>
);

export default ContactMe;