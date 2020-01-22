import React, { Component } from "react";

class Spanish extends Component {

  render() {

    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ margin: '10vh', textAlign: 'center' }}>
          <button onClick={() => this.props.chooseProject('all')}>Back</button>
          <h1>Learning Spanish</h1>
        </div>
        <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center', maxWidth: '1300px', width: '95%' }}>
          <p>hello</p>
        </div>
      </div>
    );
  }
}


export default Spanish;
