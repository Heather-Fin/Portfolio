import React from 'react';
import ContactTile from '../ContactTile/ContactTile';

import LinkedInIcon from '../../assets/linkedin-logo-icon.png';
import GitHubIcon from '../../assets/github-logo-icon.png';
import ResumeIcon from '../../assets/resume-logo-icon.png';

const ContactMe = () => (
  <div className="contact-me">
    <ContactTile title="LinkedIn" img={LinkedInIcon}/>
    <ContactTile title="GitHub" img={GitHubIcon}/>
    <ContactTile title="Resume" img={ResumeIcon}/>
  </div>
);

export default ContactMe;