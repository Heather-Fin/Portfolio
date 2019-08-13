import React, { Component } from 'react';

class SectionTitle extends Component {
  render() {
    return (
      <div>
        <h2 className="section-title--h2">{this.props.title}</h2>
      </div>
    );
  }
}

export default SectionTitle;