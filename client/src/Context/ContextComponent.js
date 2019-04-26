import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    selectedCards: [],
  };

  render() {
    return (
      <MyContext.Provider value="I'm the value">
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
