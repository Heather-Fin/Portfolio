import React from 'react';
import PlaceHolderImg from '../../assets/placeholder-square.jpg';

const ContactTile = () => (
  <div className="contact-tile">
    <img src={PlaceHolderImg} alt="" className="conact-tile--img" />
    <h3 className="contact-tile--h3">Resource</h3>
  </div>
);

export default ContactTile;