import React, { Component } from 'react';
import Header from './Component/Common/Header';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header headerImg={null} titleText="Your scenario" />
      </div>
    );
  }
}

export default App;
