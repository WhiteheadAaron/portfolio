import React, { Component } from "react";

class Resume extends Component {

  render() {
 
    return (
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1100px' }}>
        <img 
          alt="Aaron's resume"
          src={require('../assets/resume-1.jpg')}
          style={{ width: '95%', height: 'auto' }}
        />
      </div>
    );
  }
}

export default Resume;
