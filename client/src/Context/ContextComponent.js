import React, { Component } from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    selectedCards: [],
  };

  logging = (id, name) => {
    console.log(`id =>> ${id}, name =>> ${name}`);
    this.setState(state => {
      state.selectedCards.push({
        id,
        name,
      });
    });
    console.log(this.state.selectedCards, 'selectedCards');
  };

  render() {
    const { children } = this.props;
    const { selectedCards } = this.state;
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          logging: this.logging,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}
