import React, { Component } from 'react';

class ContactTile extends Component {
  render() {
    return (  
      <div className="contact-tile">
        <img src={this.props.img} alt="" className="conact-tile--img" />
        <h3 className="contact-tile--h3">{this.props.title}</h3>
      </div>
    );
  }
}

export default ContactTile;